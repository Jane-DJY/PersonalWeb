# 个人网站部署指南

## 项目概述

这是一个基于React和TypeScript的个人网站项目，包含以下主要内容：

- 自我介绍部分
- 学术论文展示
- 项目作品展示

网站采用创意艺术风格设计，使用大胆的配色方案，并实现了鼠标滑动交互效果。网站内容以英文为主，并已适配移动端设备。

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
└── ... (其他配置文件)
```

## 部署步骤

### 1. 替换项目图片

目前网站使用了占位图片，您需要将实际项目图片放入 `src/assets/images/projects/` 目录中，并在 `Projects.tsx` 文件中更新图片路径。

图片命名建议：
- lighthouse.png
- twin_cloud.png
- stock_forest.png
- womensports.png
- movies_longer.png
- who_runs_china.png

### 2. 构建项目

```bash
cd PersonalWeb/personal_web
npm install    # 安装依赖
npm run build  # 构建项目
```

构建完成后，生成的静态文件将位于 `dist` 目录中。

### 3. 部署到GitHub Pages

将 `dist` 目录中的所有文件上传到您的GitHub仓库 `PersonalWeb` 中。

如果您使用GitHub Actions自动部署，可以在仓库根目录创建 `.github/workflows/deploy.yml` 文件：

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
          node-version: '20'

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

### 4. 自定义域名（可选）

如果您想使用自定义域名，可以在GitHub仓库设置中配置。

## 本地开发

如需在本地进行开发和测试：

```bash
cd PersonalWeb/personal_web
npm install    # 安装依赖
npm run dev    # 启动开发服务器
```

开发服务器将在 http://localhost:5173 启动。

## 自定义修改

### 修改内容

- 自我介绍：编辑 `src/components/About.tsx`
- 论文信息：编辑 `src/components/Papers.tsx`
- 项目信息：编辑 `src/components/Projects.tsx`

### 修改样式

- 全局样式：编辑 `src/index.css`
- 组件样式：编辑 `src/components/components.css`
- 导航样式：编辑 `src/App.css`

## 注意事项

- 网站已实现响应式设计，可在不同设备上正常显示
- 鼠标交互效果在移动设备上已禁用
- 所有链接已设置为在新标签页中打开
