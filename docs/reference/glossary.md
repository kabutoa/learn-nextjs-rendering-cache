# 术语表

## App Router

Next.js 基于 `app/` 目录的新路由系统，默认支持 Server Components、布局、嵌套路由、Streaming 和 Server Actions。

## Server Component

默认在服务器执行的 React 组件，不会把组件逻辑发送到浏览器。

## Client Component

带有 `'use client'` 指令的组件，可以使用状态、事件和浏览器 API。

## Static Rendering

页面在构建期或缓存期生成，多个用户复用同一份结果。

## Dynamic Rendering

页面在请求时生成，适合个性化、权限相关或强新鲜度内容。

## Streaming

服务端逐步发送 UI，让用户先看到页面外壳，再看到慢数据区域。

## Cache Components

Next.js 16 推荐的缓存模型，通过 `'use cache'`、`cacheLife` 和 `cacheTag` 声明可缓存工作。

## Revalidation

缓存失效或重新验证过程。

## Server Action

带有 `'use server'` 的服务端函数，常用于表单提交和数据修改。

