# Demo 02：动态数据与 Streaming

目标：理解动态区域应该放进 Suspense 边界。

## 代码

```tsx
import { Suspense } from 'react'
import { headers } from 'next/headers'

async function RuntimePanel() {
  const requestHeaders = await headers()
  const userAgent = requestHeaders.get('user-agent') ?? 'unknown'

  return <p>{userAgent}</p>
}

export default function Page() {
  return (
    <main>
      <h1>静态外壳先展示</h1>
      <Suspense fallback={<p>正在读取请求信息...</p>}>
        <RuntimePanel />
      </Suspense>
    </main>
  )
}
```

## 观察点

- `headers()` 是请求时数据
- 动态区域被包在 `<Suspense>` 中
- 页面外壳可以先返回，慢数据稍后补上

## 练习

把 `RuntimePanel` 改成等待 1 秒后再返回。观察页面是否先显示 fallback。

