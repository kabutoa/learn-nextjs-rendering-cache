# GitHub 源码阅读导航

Next.js 源码变化很快，所以本章不要求你背文件名，而是建立阅读路径。建议阅读 `vercel/next.js` 的 `canary` 分支，并结合当前项目依赖版本核对。

## 推荐入口

- App Router 服务端渲染入口：`packages/next/src/server/app-render/`
- 组件树构建：`packages/next/src/server/app-render/create-component-tree.tsx`
- Incremental Cache：`packages/next/src/server/lib/incremental-cache/`
- Cache Components 相关实现：在 `packages/next/src/server/` 下搜索 `use cache`、`cacheLife`、`cacheTag`
- 缓存失效 API：在 `packages/next/src/server/web/spec-extension/` 和 `packages/next/src/server/` 下搜索 `revalidateTag`、`updateTag`

## 阅读顺序

1. 先看官方文档里的行为说明。
2. 找到测试用例。Next.js 仓库的 e2e 测试通常比源码更适合初学者。
3. 再进入 `server/app-render` 理解渲染管线。
4. 最后看缓存实现和失效 API。

## 重点问题

阅读源码时带着这些问题：

- 一个 App Router 页面如何被解析成组件树？
- Suspense 边界如何影响服务端输出？
- 缓存 key 由哪些信息组成？
- tag 失效如何影响下一次读取？
- 哪些行为只在 Vercel 平台上有额外优化？

## 官方仓库

源码地址：[vercel/next.js](https://github.com/vercel/next.js)

相关目录：

- [app-render](https://github.com/vercel/next.js/tree/canary/packages/next/src/server/app-render)
- [incremental-cache](https://github.com/vercel/next.js/tree/canary/packages/next/src/server/lib/incremental-cache)
- [e2e tests](https://github.com/vercel/next.js/tree/canary/test/e2e)

