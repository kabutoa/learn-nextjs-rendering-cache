# 学习路线

## 第 1 阶段：建立渲染模型

先理解 App Router 的默认行为：

- `app/` 目录使用文件系统路由
- 组件默认是 Server Component
- 只有加上 `'use client'` 的模块才进入客户端组件边界
- `layout.tsx` 保持跨页面状态，`page.tsx` 是路由入口
- `loading.tsx` 和 `<Suspense>` 用于渐进式展示

完成后阅读：[渲染模式总览](/concepts/rendering-models)。

## 第 2 阶段：理解缓存地图

把缓存拆成四层看：

- Request Memoization：一次渲染过程内去重
- Data Cache：跨请求缓存数据
- Full Route Cache：缓存预渲染结果
- Router Cache：浏览器内的路由段缓存

完成后阅读：[缓存地图](/concepts/cache-map)。

## 第 3 阶段：学习 Cache Components

Next.js 16 推荐用 Cache Components 表达“哪些组件或函数可缓存”。你会重点学习：

- `cacheComponents: true`
- `'use cache'`
- `cacheLife`
- `cacheTag`
- `use cache: private`
- `use cache: remote`

完成后阅读：[Cache Components](/concepts/cache-components)。

## 第 4 阶段：练习缓存失效

你需要能区分这些工具：

- `updateTag`：Server Action 里立即失效，适合用户提交后读到自己刚写的数据
- `revalidateTag(tag, 'max')`：按 tag 触发 stale-while-revalidate
- `revalidatePath`：让某个路径重新验证
- `router.refresh()`：刷新当前客户端路由缓存

完成后阅读：[缓存失效](/concepts/revalidation)。

## 第 5 阶段：跑最小实战

进入 `examples/minimal-next-cache`，运行一个包含静态外壳、Streaming 动态区、缓存商品列表和 Server Action 失效的最小项目。

