'use server'

import { updateTag } from 'next/cache'
import { addProduct } from '@/lib/catalog'

export async function createProduct(formData: FormData) {
  const name = String(formData.get('name') ?? '').trim()

  if (!name) {
    return
  }

  await addProduct(name)
  updateTag('products')
}

