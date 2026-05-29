# 从零实现路线

前面的 Demo 是把机制拆小；这一部分把机制重新装回一个可运行项目。目标不是做一个完整商城，而是用最小代码验证 Next.js 渲染与缓存的关键路径。

最终代码已经放在 `examples/minimal-next-cache/`，这一组章节会告诉你如果从空目录开始，应该按什么顺序实现。

## 你要做出的系统

```mermaid
flowchart LR
  A["创建 Next.js App"] --> B["静态页面外壳"]
  B --> C["动态请求区域"]
  C --> D["缓存商品列表"]
  D --> E["Server Action 新增商品"]
  E --> F["updateTag 失效缓存"]
  F --> G["next build 验收 PPR"]
```

最小闭环是：

1. 页面先展示稳定的静态外壳。
2. 动态区域读取请求头，放在 Suspense 边界里。
3. 商品列表用 `getProducts()` 读取。
4. `getProducts()` 使用 `'use cache'`、`cacheLife('minutes')`、`cacheTag('products')`。
5. 表单提交到 Server Action。
6. Server Action 修改数据后调用 `updateTag('products')`。
7. 构建时观察路由是否显示 Partial Prerender。

## 为什么按这个顺序实现

| 步骤 | 为什么先做它 |
| --- | --- |
| 项目骨架 | 先保证 Next.js 16 + Cache Components 可用 |
| 静态外壳 | 先看到 App Router 默认 Server Component 行为 |
| 动态区域 | 引入请求时数据，同时不破坏整页学习节奏 |
| 缓存列表 | 把慢数据读取集中到一个函数里，方便观察缓存 |
| Server Action | 让页面从只读变成可修改 |
| 构建验收 | 用 `next build` 反过来验证你写出的渲染形态 |

## 跟做方式

如果你想从空目录练习，可以新建一个目录，然后按 Step 逐步添加文件。每一步结束都建议运行一次：

```bash
npm run build
```

如果某一步失败，先不要继续往下写。缓存和渲染问题越早定位越容易。

## 每一步的验收

| 页面 | 验收动作 |
| --- | --- |
| [Step 1：创建项目骨架](/practice/build-01-scaffold) | `npm run build` 能识别 `cacheComponents` |
| [Step 2：静态外壳](/practice/build-02-static-shell) | 页面能展示标题、说明和基本布局 |
| [Step 3：动态区域与 Streaming](/practice/build-03-dynamic-streaming) | 请求头区域被 Suspense 包裹 |
| [Step 4：缓存商品列表](/practice/build-04-cache-products) | `getProducts()` 使用 cache API |
| [Step 5：Server Action 与失效](/practice/build-05-server-action) | 新增商品后调用 `updateTag('products')` |
| [Step 6：构建验收](/practice/build-06-debug) | `next build` 输出 Partial Prerender |

## 不要一开始就做的事

| 暂缓事项 | 原因 |
| --- | --- |
| 接数据库 | 会把缓存学习和 ORM 连接问题混在一起 |
| 做完整登录 | 用户私有缓存是下一阶段主题 |
| 做复杂 UI | 先让渲染和失效路径清楚 |
| 接真实后端接口 | 网络、鉴权、错误处理会干扰核心机制 |

