# Step 4：缓存商品列表

这一节加入可缓存的数据读取函数。

## 创建 catalog.ts

创建 `src/lib/catalog.ts`：

```ts
import { cacheLife, cacheTag } from 'next/cache'

export type Product = {
  id: string
  name: string
  createdAt: string
}

const products: Product[] = [
  {
    id: 'p-001',
    name: 'Server Components 学习卡片',
    createdAt: new Date('2026-05-01T09:00:00+08:00').toISOString()
  },
  {
    id: 'p-002',
    name: 'Cache Components 实验手册',
    createdAt: new Date('2026-05-02T09:00:00+08:00').toISOString()
  }
]

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getProducts() {
  'use cache'

  cacheLife('minutes')
  cacheTag('products')

  await sleep(700)
  return products.toSorted((a, b) => b.createdAt.localeCompare(a.createdAt))
}
```

这段代码故意加了 `sleep(700)`，目的是让你更容易观察“第一次慢、后续复用缓存”的差异。

## 在页面中读取

在 `src/app/page.tsx` 中加入：

```tsx
import { getProducts } from '@/lib/catalog'

async function ProductList() {
  const products = await getProducts()

  return (
    <ul className="list">
      {products.map((product) => (
        <li className="item" key={product.id}>
          <span>{product.name}</span>
          <span className="tag">{product.id}</span>
        </li>
      ))}
    </ul>
  )
}
```

然后在页面里渲染：

```tsx
<section className="panel">
  <h2>缓存商品列表</h2>
  <Suspense fallback={<p className="muted">正在读取缓存数据...</p>}>
    <ProductList />
  </Suspense>
</section>
```

## 补充样式

```css
.list {
  display: grid;
  gap: 10px;
  padding: 0;
  list-style: none;
}

.item {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 12px;
}

.tag {
  color: #16a34a;
  font-family: Consolas, "Courier New", monospace;
}
```

## 观察点

- `'use cache'` 必须放在函数体最前面。
- `cacheTag('products')` 是后面精准失效的基础。
- 缓存函数可以被 Server Component 直接调用。

