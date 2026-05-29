# Next.js 渲染模式与缓存中文教程

这是一个基于 VitePress 的中文学习项目，主题是 Next.js App Router 的渲染模式、缓存模型和失效策略。

内容按“理解概念 -> 对比策略 -> 渐进式 demo -> 源码阅读导航 -> 最小实战项目”的路径组织，适合边学边跑代码。

## 快速开始

安装文档站依赖：

```bash
npm install
npm run docs:dev
```

运行最小 Next.js 实战：

```bash
cd examples/minimal-next-cache
npm install
npm run dev
```

## 内容基准

教程以 2026-05-29 可见的 Next.js 官方文档为基准，优先采用 App Router、Server Components、Cache Components、`use cache`、`cacheLife`、`cacheTag`、`updateTag`、`revalidateTag` 等当前推荐模型。

## 目录

- `docs/`：VitePress 中文教程
- `examples/minimal-next-cache/`：可运行的最小实战项目

