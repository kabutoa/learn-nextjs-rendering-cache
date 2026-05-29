import { Suspense } from 'react'
import { headers } from 'next/headers'
import { createProduct } from './actions'
import { Counter } from '@/components/Counter'
import { getProducts } from '@/lib/catalog'

async function RuntimePanel() {
  const requestHeaders = await headers()
  const userAgent = requestHeaders.get('user-agent') ?? 'unknown'

  return (
    <div>
      <p className="muted">这块读取了请求头，因此属于请求时动态数据。</p>
      <p>{userAgent.slice(0, 120)}</p>
    </div>
  )
}

async function ProductList() {
  const products = await getProducts()

  return (
    <ul className="list">
      {products.map((product) => (
        <li className="item" key={product.id}>
          <span>{product.name}</span>
          <span className="tag">{product.id}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Page() {
  return (
    <main>
      <section className="hero">
        <h1>Next.js 渲染与缓存最小实战</h1>
        <p>
          这个页面把静态外壳、请求时动态数据、Cache Components、Server Action
          和 tag 失效放在同一个小项目里，方便你逐步观察每种机制。
        </p>
      </section>

      <section className="grid">
        <div className="panel">
          <h2>Streaming 动态区域</h2>
          <Suspense fallback={<p className="muted">正在读取请求信息...</p>}>
            <RuntimePanel />
          </Suspense>
        </div>

        <Counter />

        <div className="panel">
          <h2>新增商品</h2>
          <form action={createProduct}>
            <input name="name" placeholder="例如：ISR 决策表" />
            <button type="submit">新增并失效 products tag</button>
          </form>
        </div>

        <div className="panel">
          <h2>缓存商品列表</h2>
          <Suspense fallback={<p className="muted">正在读取缓存数据...</p>}>
            <ProductList />
          </Suspense>
        </div>
      </section>
    </main>
  )
}

