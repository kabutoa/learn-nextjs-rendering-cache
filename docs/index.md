---
layout: home
hero:
  name: Next.js 渲染与缓存
  text: 把 App Router 的渲染与缓存真正学明白
  tagline: 用工程化视角拆解 Server Components、Streaming、Cache Components、PPR、缓存失效与最小实战项目。
  image:
    src: /logo.svg
    alt: Next.js 渲染与缓存教程
  actions:
    - theme: brand
      text: 开始学习
      link: /quick-start
    - theme: alt
      text: 运行最终项目
      link: /practice/minimal-project
features:
  - title: 不是文档翻译
    details: 先建立最小心智模型，再逐层拆解 Next.js 渲染与缓存机制。每一节都回答“为什么需要这一层”。
  - title: 渐进式 Demo
    details: 四个小 Demo 分别覆盖 Server Component、Streaming、use cache、tag 失效。读者可以直接运行、改动、观察输出。
  - title: 可运行目标项目
    details: 最后从零实现一个最小商品目录应用，把 PPR、缓存商品列表和 Server Action 失效串成闭环。
---

## 这套教程适合谁

你不需要已经精通 Next.js，但最好具备这些基础：React 组件、异步数据读取、HTTP 请求、npm 脚本，以及能读懂一些 TypeScript 代码。

这套教程默认读者已经知道“写一个 React 页面”是什么，但还没有把“Server Component、Client Component、缓存、Streaming、失效、构建输出”串成一个完整系统。

## 你会学到什么

```mermaid
flowchart LR
  A["渲染模式"] --> B["组件边界"]
  B --> C["缓存地图"]
  C --> D["Cache Components"]
  D --> E["缓存失效"]
  E --> F["最小商品目录项目"]
  F --> G["源码阅读路线"]
```

## 站点中的代码

渐进式 Demo 讲解位于 `docs/demos/`，最终项目位于 `examples/minimal-next-cache/`。

你可以先读概念，再运行代码；也可以反过来，先跑起来观察构建输出，再回头看解释。

## 推荐学习方式

| 阶段 | 目标 | 入口 |
| --- | --- | --- |
| 学习路线 | 先知道全局怎么走 | [运行与学习路线](/quick-start) |
| 核心原理 | 建立渲染与缓存心智模型 | [渲染模式总览](/concepts/rendering-models) |
| 渐进式 Demo | 一次只验证一个机制 | [Demo 01](/demos/demo-01-static-server) |
| 最终项目 | 从零把机制组合起来 | [从零实现路线](/practice/build-00-roadmap) |
| 来源 | 回到官方文档和源码 | [官方资料](/reference/resources) |

## 内容基准

本教程基于 2026-05-29 可见的 Next.js 官方文档整理。Next.js 的缓存 API 演进很快，真实项目请优先核对官方文档和当前依赖版本。
