import { Buffer } from 'node:buffer'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Next.js 渲染与缓存',
  description: '用中文系统学习 Next.js App Router 的渲染模式、缓存模型和最小实战',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }]],
  markdown: {
    lineNumbers: true,
    config(md) {
      const defaultFence = md.renderer.rules.fence
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const info = token.info.trim()
        if (info === 'mermaid') {
          const diagram = Buffer.from(token.content, 'utf8').toString('base64')
          return `<Mermaid diagram="${diagram}" />`
        }
        return defaultFence
          ? defaultFence(tokens, idx, options, env, self)
          : self.renderToken(tokens, idx, options)
      }
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '学习路线', link: '/quick-start' },
      { text: '核心原理', link: '/concepts/rendering-models' },
      { text: '渐进式 Demo', link: '/demos/demo-01-static-server' },
      { text: '最终项目', link: '/practice/minimal-project' },
      { text: '来源', link: '/reference/resources' }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '课程说明', link: '/' },
          { text: '运行与学习路线', link: '/quick-start' },
          { text: '为什么这样学', link: '/guide/why' },
          { text: '学习路线', link: '/guide/roadmap' }
        ]
      },
      {
        text: '第一部分：核心原理',
        collapsed: false,
        items: [
          { text: '渲染模式总览', link: '/concepts/rendering-models' },
          { text: '缓存地图', link: '/concepts/cache-map' },
          { text: 'Cache Components', link: '/concepts/cache-components' },
          { text: '缓存失效', link: '/concepts/revalidation' },
          { text: '技术选型决策树', link: '/concepts/decision-tree' }
        ]
      },
      {
        text: '第二部分：渐进式 Demo',
        collapsed: false,
        items: [
          { text: 'Demo 01：静态页面与 Server Component', link: '/demos/demo-01-static-server' },
          { text: 'Demo 02：动态数据与 Streaming', link: '/demos/demo-02-dynamic-streaming' },
          { text: 'Demo 03：use cache', link: '/demos/demo-03-use-cache' },
          { text: 'Demo 04：Tag 失效', link: '/demos/demo-04-tag-revalidation' }
        ]
      },
      {
        text: '第三部分：最小实战项目',
        collapsed: false,
        items: [
          { text: '项目总览', link: '/practice/minimal-project' },
          { text: '从零实现路线', link: '/practice/build-00-roadmap' },
          { text: 'Step 1：创建项目骨架', link: '/practice/build-01-scaffold' },
          { text: 'Step 2：静态外壳', link: '/practice/build-02-static-shell' },
          { text: 'Step 3：动态区域与 Streaming', link: '/practice/build-03-dynamic-streaming' },
          { text: 'Step 4：缓存商品列表', link: '/practice/build-04-cache-products' },
          { text: 'Step 5：Server Action 与失效', link: '/practice/build-05-server-action' },
          { text: 'Step 6：构建验收', link: '/practice/build-06-debug' },
          { text: 'GitHub 源码阅读导航', link: '/source-reading/nextjs-source-map' },
          { text: '上线前检查清单', link: '/reference/checklist' }
        ]
      },
      {
        text: '参考',
        items: [
          { text: '术语表', link: '/reference/glossary' },
          { text: '官方资料', link: '/reference/resources' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kabutoa/learn-nextjs-rendering-cache' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: '围绕官方文档与可运行实验组织内容。',
      copyright: 'MIT'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一节',
      next: '下一节'
    },
    editLink: {
      pattern: 'https://github.com/kabutoa/learn-nextjs-rendering-cache/edit/main/docs/:path',
      text: '编辑此页'
    }
  }
})
