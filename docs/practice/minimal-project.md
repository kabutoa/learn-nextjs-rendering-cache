# 最小实战项目

仓库里已经包含一个可运行的最小 Next.js 项目：

```text
examples/minimal-next-cache
```

## 运行

```bash
cd examples/minimal-next-cache
npm install
npm run dev
```

打开终端显示的本地地址。

## 你会看到什么

这个项目包含四个部分：

- 静态页面外壳
- 请求时读取的动态面板
- 使用 `'use cache'` 的商品列表
- 使用 Server Action 和 `updateTag('products')` 的新增商品表单

## 学习任务

1. 第一次打开页面，观察商品列表加载时间。
2. 刷新页面，观察缓存后的速度变化。
3. 新增一条商品，观察列表是否立刻更新。
4. 注释掉 `src/app/actions.ts` 中的 `updateTag('products')`，再次新增商品。
5. 恢复 `updateTag`，再思考为什么 tag 比路径失效更适合这类列表数据。

## 关键文件

- `src/lib/catalog.ts`：缓存数据读取和内存数据源
- `src/app/actions.ts`：Server Action 与 tag 失效
- `src/app/page.tsx`：静态外壳、Streaming 动态区和缓存列表组合
- `src/components/Counter.tsx`：Client Component 边界示例

