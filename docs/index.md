---
layout: home

hero:
  name: Next.js 渲染与缓存
  text: 这一次，把渲染模式和缓存真正学明白
  tagline: 参考官方文档和可运行 demo，按“核心原理 -> 渐进实验 -> 最小实战 -> 源码阅读”的路径系统学习 App Router、Server Components、Cache Components、PPR 与缓存失效。
  image:
    src: /rendering-cache-map.svg
    alt: Next.js 渲染与缓存学习地图
  actions:
    - theme: brand
      text: 开始学习
      link: /guide/roadmap
    - theme: alt
      text: 运行最终项目
      link: /practice/minimal-project

features:
  - title: 从问题出发
    details: 不按 API 堆概念，而是围绕“什么时候静态化、什么时候动态渲染、什么时候缓存、怎么失效”来组织。
    link: /concepts/decision-tree
    linkText: 看决策树
  - title: 渐进式 Demo
    details: 每个 demo 只验证一个关键行为，从 Server Component 到 Streaming、use cache、tag 失效逐步推进。
    link: /demos/demo-01-static-server
    linkText: 进入 Demo
  - title: 最小可运行项目
    details: 用一个商品目录应用观察 PPR 输出、缓存命中、Server Action 修改数据后的 updateTag 流程。
    link: /practice/minimal-project
    linkText: 跑起来
---

<section class="course-section">
  <p class="section-eyebrow">项目优势</p>
  <h2>它不是“文档翻译”，而是一条可以照着走的学习路径</h2>
  <p>
    Next.js 的渲染与缓存难点不在某一个 API，而在多个机制会同时参与一次页面请求。这个教程把学习内容拆成心智模型、实验代码、项目实战和源码阅读四层，让你能先理解规则，再亲手验证规则。
  </p>
  <div class="path-grid">
    <a class="path-card" href="/concepts/rendering-models.html">
      <span>01</span>
      <h3>核心原理</h3>
      <p>先搞清 Server Component、Client Component、静态渲染、动态渲染、Streaming 和 PPR。</p>
    </a>
    <a class="path-card" href="/concepts/cache-map.html">
      <span>02</span>
      <h3>缓存地图</h3>
      <p>把 Request Memoization、Data Cache、Full Route Cache、Router Cache 分层理解。</p>
    </a>
    <a class="path-card" href="/demos/demo-03-use-cache.html">
      <span>03</span>
      <h3>渐进实验</h3>
      <p>通过小 demo 观察 use cache、cacheLife、cacheTag 和 Suspense 边界的行为。</p>
    </a>
    <a class="path-card" href="/practice/minimal-project.html">
      <span>04</span>
      <h3>最终项目</h3>
      <p>运行最小商品目录项目，把缓存、失效和重新渲染串成一个完整闭环。</p>
    </a>
  </div>
</section>

<section class="course-section split">
  <div>
    <p class="section-eyebrow">适合谁</p>
    <h2>适合已经会写 React，但想掌握 App Router 生产决策的人</h2>
    <ul class="plain-list">
      <li>你知道 Next.js 很强，但 SSG、SSR、ISR、PPR 和 Streaming 经常混在一起。</li>
      <li>你用过 App Router，但不确定 Server Component 和 Client Component 的边界怎么放。</li>
      <li>你正在做内容站、商品目录、中后台、AI 应用，页面既要快，又要知道什么时候该更新。</li>
      <li>你希望用中文材料学习，同时保留官方资料入口和可运行代码。</li>
    </ul>
  </div>
  <div class="note-panel">
    <p class="section-eyebrow">学习前提</p>
    <h2>你不需要先记住所有缓存 API</h2>
    <p>
      只要熟悉 React 组件、异步数据读取和基本路由概念，就可以从学习路线开始。教程会把 API 放回真实问题里解释。
    </p>
  </div>
</section>

<section class="course-section">
  <p class="section-eyebrow">你会学到什么</p>
  <h2>学完后，你应该能为具体页面选出合理方案</h2>
  <div class="learn-grid">
    <div>
      <h3>渲染策略</h3>
      <p>判断页面应该静态渲染、请求时渲染，还是用静态外壳加动态区域。</p>
    </div>
    <div>
      <h3>组件边界</h3>
      <p>把数据读取留在服务器，把交互下沉到客户端，避免整页变成 Client Component。</p>
    </div>
    <div>
      <h3>缓存策略</h3>
      <p>理解多层缓存的职责，并用 <code>'use cache'</code>、<code>cacheLife</code>、<code>cacheTag</code> 表达意图。</p>
    </div>
    <div>
      <h3>失效策略</h3>
      <p>区分 <code>updateTag</code>、<code>revalidateTag</code>、<code>revalidatePath</code> 的使用场景。</p>
    </div>
    <div>
      <h3>源码阅读</h3>
      <p>知道该从 Next.js 仓库哪些目录和测试用例入手，而不是一头扎进全部源码。</p>
    </div>
    <div>
      <h3>实战验证</h3>
      <p>通过最小项目观察构建输出、PPR 标记、缓存命中和数据提交后的刷新路径。</p>
    </div>
  </div>
</section>

<section class="course-section source-block">
  <p class="section-eyebrow">内容基准</p>
  <h2>以官方文档为基准，代码以当前 Next.js 版本构建验证</h2>
  <p>
    本教程基于 2026-05-29 可见的 Next.js 官方文档整理。Next.js 的缓存 API 演进较快，实际项目请优先核对官方文档和当前依赖版本。
  </p>
  <p>
    推荐从 <a href="/reference/resources.html">官方资料</a> 和 <a href="/source-reading/nextjs-source-map.html">GitHub 源码阅读导航</a> 继续深入。
  </p>
</section>
