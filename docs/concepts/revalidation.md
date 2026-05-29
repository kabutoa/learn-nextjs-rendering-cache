# 缓存失效

缓存不是“存起来就结束”，真正难的是数据变化后如何让用户看到正确内容。

## updateTag

`updateTag` 只能在 Server Action 中使用。它会让指定 tag 立即过期，适合“用户提交后，当前用户马上读到新数据”的场景。

```ts
'use server'

import { updateTag } from 'next/cache'

export async function createProduct(formData: FormData) {
  await db.product.create({
    data: { name: String(formData.get('name')) }
  })

  updateTag('products')
}
```

适合：

- 新增商品
- 更新个人资料
- 点赞、收藏、评论
- 提交后需要读到自己刚写的数据

## revalidateTag

`revalidateTag(tag, 'max')` 会让指定 tag 使用 stale-while-revalidate 行为：下一次访问可以先拿到旧数据，同时后台更新缓存。

```ts
import { revalidateTag } from 'next/cache'

export async function POST() {
  revalidateTag('products', 'max')
  return Response.json({ ok: true })
}
```

适合：

- CMS webhook
- 后台任务完成后通知前台更新
- 第三方系统触发的数据变化

## revalidatePath

`revalidatePath` 按路径失效。它适合你明确知道哪个页面应该重新验证。

```ts
import { revalidatePath } from 'next/cache'

revalidatePath('/products')
```

## 怎么选

| 需求 | 推荐 |
| --- | --- |
| 用户提交后立即看到新结果 | `updateTag` |
| 外部 webhook 通知内容变了 | `revalidateTag(tag, 'max')` |
| 只想让某个路径重新验证 | `revalidatePath` |
| 当前客户端路由缓存需要刷新 | `router.refresh()` |

## 常见错误

- 忘记给缓存数据加 `cacheTag`，导致后续无法按 tag 精准失效。
- 把用户私有数据放进共享缓存。
- 只调用了 `revalidateTag`，却期望当前交互立刻像强一致读一样更新。
- 继续使用单参数 `revalidateTag(tag)`，在新版本中应传入 profile 或选项。

