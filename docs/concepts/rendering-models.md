# 渲染模式总览

Next.js App Router 的渲染不是一个开关，而是一组组合能力。

## Server Component

App Router 中的组件默认是 Server Component。它们在服务器执行，可以直接访问数据库、文件系统、私有环境变量和后端服务。

适合：

- 页面主体内容
- 数据读取
- 不需要浏览器事件的 UI
- 大部分列表、详情页、布局组件

不适合：

- `useState`
- `useEffect`
- 浏览器 API
- 点击、输入、拖拽等事件处理

## Client Component

在文件顶部写 `'use client'` 后，该模块及其导入链会进入客户端组件边界。

适合：

- 表单交互
- 弹窗、下拉菜单、标签切换
- 本地状态
- 浏览器 API
- 第三方客户端组件库

最佳实践是把 `'use client'` 放得尽量靠下。页面和数据读取尽量留在 Server Component，只有真正需要交互的叶子组件进入客户端。

## 静态渲染

静态渲染适合“所有用户看到相同内容，而且内容变化不频繁”的页面。

常见场景：

- 文档页
- 营销页
- 博客文章
- 商品类目页

常见信号：

- 使用 `generateStaticParams`
- 不读取请求专属 API
- 数据可以在构建期或缓存期复用

## 动态渲染

动态渲染适合“每个请求都可能不同”的内容。

常见场景：

- 个性化首页
- 用户后台
- 需要读取 cookie、header、权限状态的页面
- 强一致性数据

触发动态渲染的常见原因：

- `cookies()`
- `headers()`
- `searchParams`
- `connection()`
- 标记为不缓存的数据读取

## Streaming

Streaming 允许页面先发送静态外壳，再逐步填充慢数据。它常和 `<Suspense>`、`loading.tsx` 一起使用。

适合：

- 仪表盘
- 搜索页
- 有慢接口的详情页
- 静态主体 + 动态局部

## Partial Prerendering

Partial Prerendering 的目标是把页面拆成“可预渲染的静态外壳”和“请求时再解析的动态区域”。在 Cache Components 启用后，未缓存的动态工作通常需要放在 Suspense 边界内。

你可以把它理解成：尽量让页面先快起来，再让必须动态的部分补上。

