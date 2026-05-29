# Step 3：动态区域与 Streaming

这一节加入一个请求时动态区域，并把它放进 Suspense 边界里。

## 为什么要这样做

`headers()` 读取的是请求信息，它不是构建期能确定的静态数据。把它放进独立组件，并用 `<Suspense>` 包起来，可以让页面外壳和动态区域边界更清楚。

## 添加 RuntimePanel

修改 `src/app/page.tsx`：

```tsx
import { Suspense } from 'react'
import { headers } from 'next/headers'

async function RuntimePanel() {
  const requestHeaders = await headers()
  const userAgent = requestHeaders.get('user-agent') ?? 'unknown'

  return (
    <div>
      <p className="muted">这块读取了请求头，因此属于请求时动态数据。</p>
      <p>{userAgent.slice(0, 120)}</p>
    </div>
  )
}

export default function Page() {
  return (
    <main>
      <section className="hero">
        <h1>Next.js 渲染与缓存最小实战</h1>
        <p>
          这个页面会逐步加入动态请求、缓存数据、Server Action 和 tag 失效。
        </p>
      </section>

      <section className="panel">
        <h2>Streaming 动态区域</h2>
        <Suspense fallback={<p className="muted">正在读取请求信息...</p>}>
          <RuntimePanel />
        </Suspense>
      </section>
    </main>
  )
}
```

## 补充样式

```css
.panel {
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--panel);
  padding: 20px;
}

.muted {
  color: var(--muted);
}
```

## 观察点

- `headers()` 要 `await`。
- 动态组件不需要变成 Client Component。
- Suspense 边界让动态区域可以独立加载。

## 验收

运行：

```bash
npm run build
```

后面 Step 完成后，你会在构建输出中看到 Partial Prerender 标记。

