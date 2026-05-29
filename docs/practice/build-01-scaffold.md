# Step 1：创建项目骨架

这一节只做一件事：创建一个能启用 Cache Components 的 Next.js App Router 项目。

## 创建目录

```bash
mkdir minimal-next-cache
cd minimal-next-cache
npm init -y
npm pkg set type=module
```

安装依赖：

```bash
npm install next@latest react@latest react-dom@latest
npm install -D typescript @types/node @types/react @types/react-dom
```

## package.json

把脚本调整成：

```json
{
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

## 启用 Cache Components

创建 `next.config.ts`：

```ts
import type { NextConfig } from 'next'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  cacheComponents: true,
  turbopack: {
    root: projectRoot
  }
}

export default nextConfig
```

`cacheComponents: true` 是本教程的关键开关。后面你才能在函数或组件里使用 `'use cache'`。

## 创建最小 App Router 文件

```bash
mkdir -p src/app
```

创建 `src/app/layout.tsx`：

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js 渲染与缓存最小实战'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
```

创建 `src/app/page.tsx`：

```tsx
export default function Page() {
  return <main>Next.js 渲染与缓存最小实战</main>
}
```

创建 `src/app/globals.css`：

```css
body {
  margin: 0;
  font-family: Arial, "Microsoft YaHei", sans-serif;
}
```

## 路径别名

后面的章节会使用 `@/lib/catalog` 这类导入。创建或调整 `tsconfig.json`，加入 `paths`：

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 验收

运行：

```bash
npm run build
```

你应该看到 Next.js 正常编译。如果这里失败，先处理依赖、Node 版本或 `next.config.ts` 问题。
