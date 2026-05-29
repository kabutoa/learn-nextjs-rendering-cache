# Demo 01：静态页面与 Server Component

目标：理解 App Router 默认的 Server Component。

## 代码

```tsx
export default async function Page() {
  const message = '这个组件默认在服务器执行'

  return (
    <main>
      <h1>Server Component</h1>
      <p>{message}</p>
    </main>
  )
}
```

## 观察点

- 文件里没有 `'use client'`
- 可以把数据读取放在组件里
- 不会把这个组件的交互代码发送到浏览器

## 练习

在页面中加入一个异步函数：

```ts
async function getCourseTitle() {
  return 'Next.js 渲染与缓存'
}
```

然后在 `Page` 中 `await getCourseTitle()`。这就是 Server Component 最常见的数据读取方式。

