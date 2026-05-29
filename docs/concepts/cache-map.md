# 缓存地图

Next.js 的缓存最容易混乱，因为“缓存”这个词覆盖了多个层次。学习时建议按职责拆开。

## Request Memoization

一次服务端渲染过程中，相同请求会被记忆化。它主要避免同一棵 React 组件树里重复读取相同数据。

特点：

- 生命周期只在单次渲染内
- 对相同参数的 `fetch` 去重
- 不需要手动失效

## Data Cache

Data Cache 跨请求保存数据结果。传统 `fetch` 缓存和 Cache Components 都会让你接触这一层。

适合：

- 商品列表
- 配置数据
- CMS 内容
- 可以接受短暂陈旧的数据

## Full Route Cache

Full Route Cache 保存预渲染后的路由结果。静态页面和可复用的路由输出会从这里受益。

一旦页面中包含必须请求时执行的动态 API，整个路由或局部区域就需要动态处理。

## Router Cache

Router Cache 存在于浏览器中，用于缓存已访问或预取的路由段。它让客户端导航更快。

注意：服务端数据失效不等于浏览器路由缓存自动按你想象刷新。用户操作后如果当前页面需要立刻更新，通常要结合 Server Action 的失效能力，必要时再使用客户端刷新。

## 一句话区分

| 层次 | 位置 | 主要目的 |
| --- | --- | --- |
| Request Memoization | 单次服务端渲染 | 去重 |
| Data Cache | 服务端数据层 | 跨请求复用数据 |
| Full Route Cache | 服务端路由层 | 复用预渲染页面 |
| Router Cache | 浏览器 | 加速客户端导航 |

