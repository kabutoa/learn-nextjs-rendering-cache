# Step 2：静态页面外壳

这一节建立页面主体，让你先看到 App Router 默认 Server Component 的形态。

## 修改 page.tsx

```tsx
export default function Page() {
  return (
    <main>
      <section className="hero">
        <h1>Next.js 渲染与缓存最小实战</h1>
        <p>
          这个页面会逐步加入动态请求、缓存数据、Server Action 和 tag 失效。
        </p>
      </section>
    </main>
  )
}
```

这里没有 `'use client'`，所以 `Page` 是 Server Component。

## 添加基础样式

```css
:root {
  --background: #f8fafc;
  --foreground: #0f172a;
  --muted: #475569;
  --panel: #ffffff;
  --border: #dbe3ef;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, "Microsoft YaHei", sans-serif;
}

main {
  width: min(1040px, calc(100vw - 32px));
  margin: 0 auto;
  padding: 48px 0;
}

.hero p {
  max-width: 720px;
  color: var(--muted);
  line-height: 1.75;
}
```

## 观察点

- 页面没有状态，也没有事件处理。
- 这一步应该尽量稳定、可预渲染。
- 后面的动态内容会以局部区域加入，而不是一开始就把整页做动态。

## 验收

运行：

```bash
npm run dev
```

浏览器里应该能看到标题和说明。

