import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Next.js 渲染与缓存',
  description: '用中文系统学习 Next.js App Router 的渲染模式、缓存模型和最小实战',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '学习路线', link: '/guide/roadmap' },
      { text: '核心概念', link: '/concepts/rendering-models' },
      { text: '渐进式 Demo', link: '/demos/demo-01-static-server' },
      { text: '最小实战', link: '/practice/minimal-project' }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '课程说明', link: '/' },
          { text: '为什么这样学', link: '/guide/why' },
          { text: '学习路线', link: '/guide/roadmap' }
        ]
      },
      {
        text: '核心概念',
        items: [
          { text: '渲染模式总览', link: '/concepts/rendering-models' },
          { text: '缓存地图', link: '/concepts/cache-map' },
          { text: 'Cache Components', link: '/concepts/cache-components' },
          { text: '缓存失效', link: '/concepts/revalidation' },
          { text: '技术选型决策树', link: '/concepts/decision-tree' }
        ]
      },
      {
        text: '渐进式 Demo',
        items: [
          { text: 'Demo 01：静态页面与 Server Component', link: '/demos/demo-01-static-server' },
          { text: 'Demo 02：动态数据与 Streaming', link: '/demos/demo-02-dynamic-streaming' },
          { text: 'Demo 03：use cache', link: '/demos/demo-03-use-cache' },
          { text: 'Demo 04：Tag 失效', link: '/demos/demo-04-tag-revalidation' }
        ]
      },
      {
        text: '深入',
        items: [
          { text: 'GitHub 源码阅读导航', link: '/source-reading/nextjs-source-map' },
          { text: '最小实战项目', link: '/practice/minimal-project' },
          { text: '上线前检查清单', link: '/reference/checklist' },
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
    }
  }
})

