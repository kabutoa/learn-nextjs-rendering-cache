# 上线前检查清单

## 渲染

- 页面主体优先使用 Server Component。
- `'use client'` 只放在真正需要交互的叶子组件。
- 慢数据放进 Suspense 边界。
- 用户专属页面不要误做成共享静态页面。

## 缓存

- 明确每类数据的新鲜度要求。
- 可缓存函数使用 `'use cache'`。
- 可失效数据加 `cacheTag`。
- 私有数据使用动态渲染或 `use cache: private`。
- 不继续使用过时的单参数 `revalidateTag(tag)`。

## 失效

- 用户提交后的强一致体验使用 `updateTag`。
- 外部 webhook 使用 `revalidateTag(tag, 'max')`。
- 页面级重验证使用 `revalidatePath`。
- 必要时刷新客户端 Router Cache。

## 安全

- 不在 Client Component 中暴露服务端密钥。
- 不把权限判断只放在 proxy 或中间层。
- Server Action 和 Route Handler 都要做输入校验。
- 依赖版本使用当前安全补丁版本。

