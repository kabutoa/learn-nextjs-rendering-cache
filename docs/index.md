---
layout: home

hero:
  name: Next.js 渲染与缓存
  text: 中文系统教程
  tagline: 用 App Router、Server Components、Cache Components 和可运行 demo 搭一条清晰学习路径。
  actions:
    - theme: brand
      text: 开始学习
      link: /guide/roadmap
    - theme: alt
      text: 跑最小实战
      link: /practice/minimal-project

features:
  - title: 先建立心智模型
    details: 区分 Server Component、Client Component、静态渲染、动态渲染、Streaming、PPR 与缓存层次。
  - title: 再渐进式实验
    details: 每个 demo 只验证一个关键行为，避免在完整项目里迷路。
  - title: 最后完成实战
    details: 用一个最小商品目录应用验证 use cache、cacheLife、cacheTag 和 Server Action 失效流程。
---

# 课程目标

学完后，你应该能回答这些问题：

- 一个页面什么时候会被预渲染，什么时候会在请求时渲染？
- Server Component 和 Client Component 的边界应该怎么放？
- Data Cache、Full Route Cache、Router Cache、Request Memoization 分别解决什么问题？
- Next.js 16 的 Cache Components 和传统 `fetch` 缓存是什么关系？
- 什么时候用 `updateTag`，什么时候用 `revalidateTag` 或 `revalidatePath`？
- 如何通过一个最小项目亲手验证缓存命中、失效和重新渲染？

> 本教程基于 2026-05-29 可见的 Next.js 官方文档整理。Next.js 的缓存 API 演进较快，实际项目请优先核对官方文档和当前依赖版本。

