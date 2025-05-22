# Project Summary
This project is a modern, minimalist personal website designed as an online portfolio to showcase academic and professional achievements. It features sections for self-introduction and publications, optimized for visual appeal and user-friendly navigation. Built with React, JavaScript, and Tailwind CSS, the website is tailored for deployment on GitHub Pages. The Publications section has been enhanced to display both research papers and portfolio items continuously.

# Project Module Description
The project consists of the following functional modules:
1. **About Me**: Self-introduction and contact information.
2. **Publications**: Showcase of research papers and personal projects merged into a single section for seamless viewing.
3. **Footer**: Contains copyright information and social media links.

# Directory Tree
```
react_template/
├── README.md                # Project documentation
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML file
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── public/
│   ├── assets/
│   │   └── images/
│   │       ├── lighthouse.png  # Data visualization project image
│   │       ├── twincloud.png    # Data visualization project image
│   │       ├── stockforest.png   # Data visualization project image
│   │       ├── asiangames.png    # Data visualization project image
│   │       ├── movies_longer.png  # Image for 'Movies Are Getting Longer'
│   │       └── whorunschina.png    # Image for 'Who runs China?'
├── src/
│   ├── App.jsx              # Main application component
│   ├── components/          # React components
│   │   ├── AboutMe.jsx      # About Me section component
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Header.jsx       # Header component
│   │   └── Publications.jsx  # Publications section component
│   ├── data/
│   │   └── content.js       # Content data for the website
│   └── index.css            # Global styles
├── tailwind.config.js       # Tailwind CSS configuration
├── template_config.json      # Configuration for templates
└── vite.config.js           # Vite configuration
```

# File Description Inventory
- **README.md**: Overview of the project and setup instructions.
- **eslint.config.js**: ESLint configuration for coding standards.
- **index.html**: Entry point for the web application.
- **package.json**: Lists dependencies and scripts for building and running the application.
- **postcss.config.js**: Configuration for PostCSS processing.
- **public/**: Contains publicly accessible files, including images and data.
- **src/**: Contains the source code for the application, including components and styles.
- **tailwind.config.js**: Configuration for Tailwind CSS styling.
- **template_config.json**: Configuration for the website template.
- **vite.config.js**: Configuration for Vite, the build tool.
- **GITHUB_PAGES_DEPLOYMENT.md**: Instructions for deploying the website to GitHub Pages.

# Technology Stack
- **React**: JavaScript library for building user interfaces.
- **JavaScript**: Programming language used for application logic.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool providing a fast development environment.

# Usage
To set up and run the project:
1. **Install dependencies**: 
   ```bash
   pnpm install
   ```
2. **Run linting**:
   ```bash
   pnpm run lint
   ```
3. **Start the development server**:
   ```bash
   pnpm run dev
   ```

## Deploying to GitHub Pages
1. Create a GitHub repository.
2. Install the `gh-pages` package:
   ```bash
   pnpm add -D gh-pages
   ```
3. Update `package.json` with a `homepage` field and deployment scripts.
4. Configure Vite for GitHub Pages.
5. Initialize Git and connect to your GitHub repository.
6. Run the deploy script:
   ```bash
   pnpm run deploy
   ```

For detailed instructions, refer to `GITHUB_PAGES_DEPLOYMENT.md`.
