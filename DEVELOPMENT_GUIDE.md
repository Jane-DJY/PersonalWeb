# 个人网站开发与部署指南

## 项目概述

这是一个基于React和TypeScript的个人网站项目，包含以下主要内容：

- 自我介绍部分
- 学术论文展示
- 项目作品展示

网站采用创意艺术风格设计，使用大胆的配色方案，并实现了鼠标滑动交互效果。网站内容以英文为主，并已适配移动端设备。

## 本地开发指南

### 环境准备

1. 确保您已安装Node.js (推荐v16+)
2. 安装项目依赖：

```bash
cd PersonalWeb
npm install
```

### 本地开发

启动开发服务器：

```bash
npm run dev
```

开发服务器将在 http://localhost:5173 启动，支持热重载。

### 修改内容

- **自我介绍**：编辑 `src/components/About.tsx`
- **论文信息**：编辑 `src/components/Papers.tsx`
- **项目信息**：编辑 `src/components/Projects.tsx`

### 修改样式

- **全局样式**：编辑 `src/index.css`
- **组件样式**：编辑 `src/components/components.css`
- **导航样式**：编辑 `src/App.css`

### 添加项目图片

1. 将项目图片放入 `src/assets/images/projects/` 目录
2. 在 `src/components/Projects.tsx` 中更新图片引用

## 构建与部署

### 构建项目

每次修改后，需要重新构建项目以生成最新的静态文件：

```bash
npm run build
```

构建完成后，生成的静态文件将位于 `dist` 目录中。

### 部署到GitHub Pages

**重要：** 项目的 `vite.config.ts` 中已设置 `base: '/PersonalWeb/'`，这是为了确保在GitHub Pages子路径下正确加载资源。如果您更改仓库名称，需要相应地更新此配置。

#### 部署方法1：手动上传

1. 构建项目后，将 `dist` 目录中的所有文件上传到GitHub仓库根目录
2. 确保GitHub Pages设置为从main分支的根目录部署

#### 部署方法2：使用GitHub Actions自动部署

在仓库根目录创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

这将在每次推送到main分支时自动构建并部署网站。

## 文件结构

```
PersonalWeb/
├── public/                 # 静态资源目录
├── src/                    # 源代码目录
│   ├── assets/             # 资源文件
│   │   ├── images/         # 图片资源
│   │   │   └── projects/   # 项目图片
│   │   └── placeholders.ts # 占位图片生成
│   ├── components/         # 组件目录
│   │   ├── About.tsx       # 自我介绍组件
│   │   ├── Footer.tsx      # 页脚组件
│   │   ├── Header.tsx      # 导航组件
│   │   ├── Papers.tsx      # 论文展示组件
│   │   ├── Projects.tsx    # 项目展示组件
│   │   └── components.css  # 组件样式
│   ├── App.css             # 应用样式
│   ├── App.tsx             # 主应用组件
│   ├── index.css           # 全局样式
│   └── main.tsx            # 入口文件
├── dist/                   # 构建输出目录（部署到GitHub Pages）
├── vite.config.ts          # Vite配置文件
├── tsconfig.json           # TypeScript配置
├── package.json            # 项目依赖和脚本
└── ... (其他配置文件)
```

## 常见问题

### 网站在GitHub Pages上显示空白

确保：
1. `vite.config.ts` 中的 `base` 设置与您的仓库名称匹配
2. 已将 `dist` 目录中的所有文件上传到仓库根目录
3. GitHub Pages设置正确（从main分支的根目录部署）

### 本地开发时找不到模块

运行 `npm install` 安装所有依赖。

### 如何添加新页面

1. 在 `src/components/` 创建新的组件文件
2. 在 `src/App.tsx` 中导入并添加到路由中

## 自定义提示

- 替换占位图片为实际项目图片
- 根据需要调整配色方案（在 `src/index.css` 中的 `:root` 选择器）
- 添加更多社交媒体链接到页脚
- 考虑添加联系表单或其他交互功能
