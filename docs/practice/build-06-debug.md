# Step 6：构建验收

这一节不再加功能，只做验收。Next.js 的构建输出会告诉你页面最终被框架理解成什么渲染形态。

## 运行构建

```bash
npm run build
```

你应该看到类似输出：

```text
Route (app)      Revalidate  Expire
┌ ◐ /                    1m      1h
└ ○ /_not-found

○  (Static)             prerendered as static content
◐  (Partial Prerender)  prerendered as static HTML with dynamic server-streamed content
```

这里最重要的是 `◐ /`。

它表示首页不是一个简单的纯静态页面，而是“静态 HTML + 动态 server-streamed content”的组合。这正是我们前面通过 Suspense 和动态请求区域制造出来的效果。

## 手动观察

启动项目：

```bash
npm run dev
```

然后做三件事：

1. 打开首页，观察商品列表。
2. 新增一个商品。
3. 看列表是否立刻出现新商品。

再做一次反向实验：

1. 注释 `src/app/actions.ts` 里的 `updateTag('products')`。
2. 重新新增商品。
3. 观察列表是否还会按你期望刷新。

## 常见问题

| 问题 | 排查方向 |
| --- | --- |
| `cacheLife` 或 `cacheTag` 类型报错 | 确认 `next.config.ts` 中启用了 `cacheComponents: true` |
| `headers()` 报异步 API 错误 | 确认使用 `await headers()` |
| 构建没有 PPR 标记 | 确认动态区域在 Suspense 边界中 |
| 新增后列表没变 | 确认 `cacheTag('products')` 与 `updateTag('products')` 名称一致 |

## 下一步

到这里，你已经把最小闭环跑通了。下一步可以继续学习：

- [GitHub 源码阅读导航](/source-reading/nextjs-source-map)
- [上线前检查清单](/reference/checklist)
- [官方资料](/reference/resources)
