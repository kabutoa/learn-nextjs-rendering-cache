---
layout: home

hero:
  name: Next.js 渲染与缓存
  text: 从心智模型到最小实战
  tagline: 用 VitePress 串起 App Router、Server Components、Cache Components、PPR 和可运行 demo，系统掌握 Next.js 渲染与缓存。
  actions:
    - theme: brand
      text: 开始学习
      link: /guide/roadmap
    - theme: alt
      text: 跑最小实战
      link: /practice/minimal-project

features:
  - title: 官方文档优先
    details: 内容围绕 Next.js App Router 与 Cache Components 的当前官方模型整理，避免沿用过时 Pages Router 经验。
  - title: 渐进式可验证
    details: 每个 demo 只验证一个关键行为，从静态渲染、Streaming 到 tag 失效逐步推进。
  - title: 实战闭环
    details: 最终通过一个最小 Next.js 项目亲手观察缓存命中、失效、重新渲染和 PPR 输出。
---

<section class="home-section home-section-lead">
  <p class="section-kicker">为什么值得学</p>
  <h2>这不是 API 摘抄，而是一套可复用的学习方法</h2>
  <p>
    Next.js 的渲染与缓存难点在于多个层次同时工作：React Server Components、App Router、Data Cache、Full Route Cache、Router Cache、Cache Components 和失效 API。这个项目把这些内容拆成可理解、可运行、可复盘的学习单元，帮助你从“知道有这些概念”走到“能为业务场景做选择”。
  </p>
</section>

<section class="home-section">
  <p class="section-kicker">项目优势</p>
  <div class="insight-grid">
    <article class="insight-card">
      <span class="card-index">01</span>
      <h3>学习路径清晰</h3>
      <p>先建立心智模型，再看缓存地图，然后进入渐进式 demo，最后完成最小实战。</p>
    </article>
    <article class="insight-card">
      <span class="card-index">02</span>
      <h3>每章都能落地</h3>
      <p>不是只解释概念，而是配套代码、观察点、练习任务和下一步阅读方向。</p>
    </article>
    <article class="insight-card">
      <span class="card-index">03</span>
      <h3>贴近真实项目</h3>
      <p>围绕数据新鲜度、用户个性化、缓存失效和可维护性做决策，而不是死记 API。</p>
    </article>
    <article class="insight-card">
      <span class="card-index">04</span>
      <h3>可以持续扩展</h3>
      <p>后续可以继续加入源码拆解、性能实验、部署章节和更多业务场景。</p>
    </article>
  </div>
</section>

<section class="home-section split-section">
  <div>
    <p class="section-kicker">适合谁</p>
    <h2>适合想真正掌握 Next.js App Router 的开发者</h2>
    <ul class="check-list">
      <li>已经会写 React，但对 Server Components 边界不够确定。</li>
      <li>用过 Next.js，但经常分不清 SSG、SSR、ISR、Streaming 和 PPR。</li>
      <li>正在做中后台、内容站、商品目录、AI 应用或需要缓存策略的业务页面。</li>
      <li>希望学习方式包含中文解释、可运行代码和源码阅读路线。</li>
    </ul>
  </div>
  <div>
    <p class="section-kicker">不太适合谁</p>
    <h2>如果只想快速复制 UI，这里会显得偏系统</h2>
    <ul class="check-list muted-list">
      <li>完全没有 React 基础，建议先补组件、状态和 JSX。</li>
      <li>只使用 Pages Router 维护旧项目，建议先看迁移指南。</li>
      <li>只需要部署配置，不关心渲染和缓存原理。</li>
    </ul>
  </div>
</section>

<section class="home-section learning-section">
  <p class="section-kicker">你会学到什么</p>
  <div class="learning-grid">
    <div class="learning-item">
      <h3>渲染模式</h3>
      <p>判断页面何时静态化、何时请求时渲染、何时用 Streaming 渐进展示。</p>
    </div>
    <div class="learning-item">
      <h3>组件边界</h3>
      <p>把数据读取留在 Server Component，把交互下沉到 Client Component。</p>
    </div>
    <div class="learning-item">
      <h3>缓存层次</h3>
      <p>区分 Request Memoization、Data Cache、Full Route Cache 和 Router Cache。</p>
    </div>
    <div class="learning-item">
      <h3>Cache Components</h3>
      <p>使用 <code>'use cache'</code>、<code>cacheLife</code> 和 <code>cacheTag</code> 描述可缓存工作。</p>
    </div>
    <div class="learning-item">
      <h3>缓存失效</h3>
      <p>根据场景选择 <code>updateTag</code>、<code>revalidateTag</code> 或 <code>revalidatePath</code>。</p>
    </div>
    <div class="learning-item">
      <h3>最小实战</h3>
      <p>运行商品目录 demo，观察 PPR、缓存命中和 Server Action 触发后的失效流程。</p>
    </div>
  </div>
</section>

<section class="home-section question-section">
  <p class="section-kicker">课程目标</p>
  <h2>学完后，你应该能回答这些问题</h2>
  <ul class="question-list">
    <li>一个页面什么时候会被预渲染，什么时候会在请求时渲染？</li>
    <li>Server Component 和 Client Component 的边界应该怎么放？</li>
    <li>Data Cache、Full Route Cache、Router Cache、Request Memoization 分别解决什么问题？</li>
    <li>Next.js 16 的 Cache Components 和传统 <code>fetch</code> 缓存是什么关系？</li>
    <li>什么时候用 <code>updateTag</code>，什么时候用 <code>revalidateTag</code> 或 <code>revalidatePath</code>？</li>
    <li>如何通过一个最小项目亲手验证缓存命中、失效和重新渲染？</li>
  </ul>
</section>

> 本教程基于 2026-05-29 可见的 Next.js 官方文档整理。Next.js 的缓存 API 演进较快，实际项目请优先核对官方文档和当前依赖版本。
