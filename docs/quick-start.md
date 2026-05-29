# 运行与学习路线

这一页先帮你把教程站点和最终项目跑起来。后面的章节会不断让你回到这些命令上观察 Next.js 的渲染与缓存行为。

## 环境要求

| 工具 | 建议版本 | 用途 |
| --- | --- | --- |
| Node.js | 20.9+ | Next.js 16、VitePress、示例项目 |
| npm | 10+ | 安装依赖、执行脚本 |
| 终端 | 任意 | 观察构建输出、dev server 日志 |

## 安装依赖

在仓库根目录安装文档站依赖：

```bash
npm install
```

最终项目有自己的依赖：

```bash
cd examples/minimal-next-cache
npm install
```

## 启动教程站点

```bash
npm run docs:dev
```

默认会启动 VitePress。终端会打印本地地址，通常是 `http://localhost:5173/`。

## 运行最终项目

```bash
npm run example:dev
```

如果你已经进入 `examples/minimal-next-cache` 目录，也可以运行：

```bash
npm run dev
```

## 推荐学习顺序

1. 先读 [渲染模式总览](/concepts/rendering-models)，建立 Server Component、Client Component、静态渲染和动态渲染的最小模型。
2. 读 [缓存地图](/concepts/cache-map)，把缓存拆成 Request Memoization、Data Cache、Full Route Cache、Router Cache。
3. 跑 [Demo 01](/demos/demo-01-static-server)，确认 Server Component 默认行为。
4. 跑 [Demo 02](/demos/demo-02-dynamic-streaming)，观察动态区域和 Suspense。
5. 跑 [Demo 03](/demos/demo-03-use-cache)，理解 `use cache`。
6. 跑 [Demo 04](/demos/demo-04-tag-revalidation)，理解 tag 失效。
7. 最后进入 [最小实战项目](/practice/minimal-project)，按 Step 章节从零实现。

## 目录总览

```text
learn-nextjs-rendering-cache/
├─ docs/                         # VitePress 教程站点
│  ├─ concepts/                  # 核心原理
│  ├─ demos/                     # 渐进式 Demo 讲解
│  ├─ practice/                  # 最终项目分步教程
│  ├─ source-reading/            # GitHub 源码阅读路线
│  └─ reference/                 # 术语表、检查清单、官方资料
└─ examples/
   └─ minimal-next-cache/        # 最终可运行项目
```

## 学习时的一个建议

每次读到一个机制，都问自己三个问题：

| 问题 | 目的 |
| --- | --- |
| 这个机制解决了什么痛点？ | 防止把框架设计背成术语 |
| 如果没有它，会在哪里变慢或变错？ | 理解边界条件 |
| 它和前后一个机制怎么接上？ | 建立系统视角 |
