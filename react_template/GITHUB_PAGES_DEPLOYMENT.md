# Deploying to GitHub Pages

This document provides step-by-step instructions for deploying this React website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Node.js and npm/pnpm installed

## Step 1: Create a GitHub repository

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click the '+' icon in the top-right corner and select 'New repository'
3. Name your repository (e.g., 'personal-website')
4. Set the repository to public (GitHub Pages requires public repositories for free accounts)
5. Click 'Create repository'

## Step 2: Prepare your React project for GitHub Pages

1. Install the GitHub Pages package as a dev dependency:
   ```bash
   cd /path/to/your/project
   pnpm add -D gh-pages
   ```

2. Open `package.json` and add the following:
   - Add a `homepage` field at the top level:
     ```json
     "homepage": "https://your-username.github.io/repository-name",
     ```
     Replace `your-username` with your GitHub username and `repository-name` with the name of your GitHub repository

   - Add deployment scripts in the `scripts` section:
     ```json
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "lint": "eslint ./src --quiet",
       "preview": "vite preview",
       "predeploy": "pnpm run build",
       "deploy": "gh-pages -d dist"
     },
     ```

3. Configure Vite for GitHub Pages by updating `vite.config.js`:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     base: '/repository-name/', // Replace with your repository name
   })
   ```

## Step 3: Initialize Git repository and connect to GitHub

1. Initialize Git in your project folder (if not already done):
   ```bash
   git init
   ```

2. Add your GitHub repository as the remote origin:
   ```bash
   git remote add origin https://github.com/your-username/repository-name.git
   ```
   Replace `your-username` and `repository-name` with your GitHub username and repository name

3. Add all files to Git:
   ```bash
   git add .
   ```

4. Commit the changes:
   ```bash
   git commit -m "Initial commit"
   ```

5. Push to the main branch:
   ```bash
   git push -u origin main
   ```
   Note: GitHub now uses `main` as the default branch name. If your repository uses `master`, replace `main` with `master`.

## Step 4: Deploy to GitHub Pages

1. Run the deploy script:
   ```bash
   pnpm run deploy
   ```

   This script will:
   - Build your React app (`pnpm run build`)
   - Create a `gh-pages` branch if it doesn't exist
   - Push the contents of the `dist` folder to the `gh-pages` branch

2. Configure GitHub Pages in repository settings:
   - Go to your GitHub repository
   - Click on 'Settings'
   - Scroll down to 'GitHub Pages' section
   - Under 'Source', select 'gh-pages' branch
   - Click 'Save'

## Step 5: Access your deployed website

After a few minutes, your website should be available at:
`https://your-username.github.io/repository-name/`

## Handling Router Issues

If you're using React Router, you may need to configure it to work with GitHub Pages:

1. Use HashRouter instead of BrowserRouter:
   ```javascript
   import { HashRouter } from 'react-router-dom';

   // Instead of BrowserRouter, use HashRouter
   <HashRouter>
     {/* Your routes */}
   </HashRouter>
   ```

   Or, if you prefer to keep using BrowserRouter, you can add a `404.html` file with a script that redirects to your index.html.

## Updating your deployed website

Whenever you make changes to your website and want to update the deployed version:

1. Make and commit your changes locally
2. Push your changes to GitHub
3. Run the deploy script again:
   ```bash
   pnpm run deploy
   ```

## Troubleshooting

1. **Missing assets**: Make sure all your assets are using relative paths and are properly imported

2. **Blank page after deployment**: Check your browser console for errors. It's often related to incorrect paths. Make sure the `base` in `vite.config.js` matches your repository name

3. **404 errors**: Ensure your GitHub Pages settings are correctly configured to use the `gh-pages` branch

4. **Custom domain**: If you want to use a custom domain, add it in the GitHub Pages settings and create a CNAME file in your public directory
