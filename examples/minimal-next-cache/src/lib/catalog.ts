import { cacheLife, cacheTag } from 'next/cache'

export type Product = {
  id: string
  name: string
  createdAt: string
}

const products: Product[] = [
  {
    id: 'p-001',
    name: 'Server Components 学习卡片',
    createdAt: new Date('2026-05-01T09:00:00+08:00').toISOString()
  },
  {
    id: 'p-002',
    name: 'Cache Components 实验手册',
    createdAt: new Date('2026-05-02T09:00:00+08:00').toISOString()
  }
]

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getProducts() {
  'use cache'

  cacheLife('minutes')
  cacheTag('products')

  await sleep(700)
  return products.toSorted((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export async function addProduct(name: string) {
  products.unshift({
    id: `p-${Date.now()}`,
    name,
    createdAt: new Date().toISOString()
  })
}

