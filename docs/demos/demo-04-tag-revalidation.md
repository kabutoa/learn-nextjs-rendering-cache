# Demo 04：Tag 失效

目标：通过 Server Action 修改数据后，让缓存立即过期。

## 代码

```ts
'use server'

import { updateTag } from 'next/cache'

export async function createProduct(formData: FormData) {
  const name = String(formData.get('name') ?? '').trim()

  if (!name) {
    return
  }

  await saveProduct({ name })
  updateTag('products')
}
```

## 观察点

- `updateTag` 放在 Server Action 中
- 被 `cacheTag('products')` 标记的数据会立即过期
- 用户提交后能读到最新数据

## 练习

把 `updateTag('products')` 注释掉，再新增一条数据。观察页面是否仍然显示旧列表。

