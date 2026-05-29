# Cache Components

Cache Components 是 Next.js 16 里更清晰的缓存表达方式：你直接标记某个组件、函数或文件可以缓存，而不是只围绕 `fetch` 选项思考。

## 启用方式

在 `next.config.ts` 中启用：

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true
}

export default nextConfig
```

## use cache

在可缓存的异步函数或组件中写：

```ts
import { cacheLife, cacheTag } from 'next/cache'

export async function getProducts() {
  'use cache'

  cacheLife('minutes')
  cacheTag('products')

  const res = await fetch('https://api.example.com/products')
  return res.json()
}
```

这段代码表达了三件事：

- 这个函数结果可以被缓存
- 缓存生命周期使用 `minutes` 配置
- 这份数据归属于 `products` 这个 tag

## cacheLife

`cacheLife` 用于描述缓存寿命。你可以使用内置 profile，也可以在 `next.config.ts` 中定义自定义 profile。

学习阶段建议先使用内置 profile，例如：

```ts
cacheLife('minutes')
cacheLife('hours')
cacheLife('days')
```

## cacheTag

`cacheTag` 给缓存结果打标签，后续可以用 `updateTag` 或 `revalidateTag` 失效。

一个页面可以读取多个 tag，一类数据也可以在多个页面中复用同一个 tag。

## use cache: private

如果缓存内容包含用户专属数据，不应该跨用户共享，可以使用：

```ts
export async function getUserProfile(userId: string) {
  'use cache: private'
  return readProfile(userId)
}
```

用户数据要特别小心。不要把 cookie、权限、私密信息混进可跨用户共享的缓存里。

## use cache: remote

`use cache: remote` 面向远程共享缓存，适合昂贵计算或跨区域复用场景。是否使用它取决于部署平台和缓存处理器能力。

学习阶段建议先掌握默认 `'use cache'`，等项目真的遇到跨部署、跨区域缓存需求时再引入 remote cache。

