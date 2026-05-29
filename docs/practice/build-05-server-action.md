# Step 5：Server Action 与失效

这一节加入表单提交，让缓存列表能在数据修改后立即失效。

## 给数据源增加写入函数

在 `src/lib/catalog.ts` 里加入：

```ts
export async function addProduct(name: string) {
  products.unshift({
    id: `p-${Date.now()}`,
    name,
    createdAt: new Date().toISOString()
  })
}
```

## 创建 Server Action

创建 `src/app/actions.ts`：

```ts
'use server'

import { updateTag } from 'next/cache'
import { addProduct } from '@/lib/catalog'

export async function createProduct(formData: FormData) {
  const name = String(formData.get('name') ?? '').trim()

  if (!name) {
    return
  }

  await addProduct(name)
  updateTag('products')
}
```

`updateTag('products')` 对应前面 `cacheTag('products')`。这就是“写入后让缓存立即过期”的闭环。

## 在页面中加入表单

```tsx
import { createProduct } from './actions'

<section className="panel">
  <h2>新增商品</h2>
  <form action={createProduct}>
    <input name="name" placeholder="例如：ISR 决策表" />
    <button type="submit">新增并失效 products tag</button>
  </form>
</section>
```

## 补充样式

```css
form {
  display: grid;
  gap: 12px;
}

input,
button {
  min-height: 40px;
  border-radius: 6px;
  font: inherit;
}

input {
  border: 1px solid var(--border);
  padding: 0 12px;
}

button {
  border: 0;
  background: #0ea5e9;
  color: #ffffff;
  cursor: pointer;
}
```

## 观察点

- Server Action 不需要客户端 fetch。
- `updateTag` 只能在 Server Action 中使用。
- 如果注释掉 `updateTag('products')`，你会更容易看到缓存没有按预期更新。

