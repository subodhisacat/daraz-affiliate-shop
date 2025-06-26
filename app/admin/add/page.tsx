'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { db } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function AddProduct() {
  const router = useRouter()
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    image_url: '',
    category: '',
    affiliate_link: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newProduct = {
      ...form,
      price: parseFloat(form.price),
      createdAt: new Date()
    }

    try {
      await addDoc(collection(db, 'products'), newProduct)
      alert('✅ Product added successfully!')
      router.push('/admin/dashboard')
    } catch (error) {
      console.error('Error adding product:', error)
      alert('❌ Failed to add product.')
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial' }}>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input name="title" placeholder="Product Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input name="price" placeholder="Price (e.g., 999)" onChange={handleChange} required />
        <input name="image_url" placeholder="Image URL" onChange={handleChange} required />
        <input name="category" placeholder="Category" onChange={handleChange} required />
        <input name="affiliate_link" placeholder="Affiliate Link" onChange={handleChange} required />

        <button type="submit" style={{ padding: 10 }}>Add Product</button>
      </form>
    </div>
  )
}
