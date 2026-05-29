# Demo 03：use cache

目标：把昂贵但可复用的数据读取显式缓存起来。

## 代码

```ts
import { cacheLife, cacheTag } from 'next/cache'

export async function getProducts() {
  'use cache'

  cacheLife('minutes')
  cacheTag('products')

  await new Promise((resolve) => setTimeout(resolve, 800))

  return [
    { id: 'p-1', name: 'Server Components 手册' },
    { id: 'p-2', name: 'Cache Components 图解' }
  ]
}
```

## 观察点

- 第一次请求会慢一些
- 后续请求会复用缓存
- `products` tag 为后续失效做准备

## 练习

把 `cacheLife('minutes')` 改成 `cacheLife('hours')`，思考它对用户体验和数据新鲜度的影响。

