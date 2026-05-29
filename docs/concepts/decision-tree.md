# 技术选型决策树

## 先问数据新鲜度

```text
数据对所有用户一样吗？
  是 -> 变化频率高吗？
    否 -> 静态渲染或 generateStaticParams
    是 -> Cache Components + cacheLife / cacheTag
  否 -> 是否包含用户隐私或权限？
    是 -> 动态渲染，必要时 use cache: private
    否 -> 静态外壳 + Suspense 动态区域
```

## 再问交互位置

```text
组件需要浏览器事件吗？
  否 -> 保持 Server Component
  是 -> 只把交互叶子组件改成 Client Component
```

## 最后问失效方式

```text
数据由用户在当前应用里修改吗？
  是 -> Server Action + updateTag
  否 -> 是否由外部系统通知？
    是 -> Route Handler + revalidateTag(tag, 'max')
    否 -> cacheLife 设置合适的过期时间
```

## 快速表

| 场景 | 推荐组合 |
| --- | --- |
| 文档站、博客详情 | 静态渲染 |
| 商品列表，允许几分钟陈旧 | `'use cache'` + `cacheLife('minutes')` |
| 商品库存，要求请求时新鲜 | 动态渲染 + Suspense |
| 用户后台 | Server Component + 动态请求 API |
| 评论提交 | Server Action + `updateTag` |
| CMS 发布文章 | webhook Route Handler + `revalidateTag(tag, 'max')` |

