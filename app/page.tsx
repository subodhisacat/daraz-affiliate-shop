'use client'

import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

interface Product {
  id: string
  title: string
  description: string
  price: number
  image_url: string
  category: string
  affiliate_link: string
}

export default function Home() {
  const [productsData, setProductsData] = useState<Product[]>([])
  const [queryStr, setQueryStr] = useState('')

  useEffect(() => {
    async function fetchProducts() {
      const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      const products: Product[] = []
      querySnapshot.forEach(doc => {
        products.push({ id: doc.id, ...doc.data() } as Product)
      })
      setProductsData(products)
    }
    fetchProducts()
  }, [])

  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(queryStr.toLowerCase())
  )

  return (
    <div style={{ maxWidth: 900, margin: 'auto', fontFamily: 'Arial', padding: 20 }}>
     <h1 style={{ color: '#14b8a6', fontWeight: '700', fontSize: '3rem', textAlign: 'center', margin: '2rem 0' }}>
  Daraz Links Hub
</h1>

      <input
        type="text"
        placeholder="Search products..."
        onChange={e => setQueryStr(e.target.value)}
        style={{ width: '100%', padding: 10, marginBottom: 20, fontSize: 16 }}
      />

      {/* Masonry-style responsive grid container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredProducts.length === 0 && <p>No products found.</p>}

        {filteredProducts.map(product => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: 8,
              padding: 15,
              backgroundColor: '#fff',
              boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <img
              src={product.image_url}
              alt={product.title}
              style={{
                width: '100%',
                height: 180,
                borderRadius: 6,
                objectFit: 'cover', // crops nicely but fills container
                marginBottom: 12,
              }}
            />
            <h2 style={{ margin: '0 0 8px 0', fontSize: 20 }}>{product.title}</h2>
            <p style={{ margin: '0 0 6px 0', color: '#555', fontWeight: 'bold' }}>
              Rs. {product.price}
            </p>
            <p style={{ margin: '0 0 12px 0', color: '#777' }}>Category: {product.category}</p>
            <p style={{ flexGrow: 1, marginBottom: 12 }}>{product.description}</p>
            <a
              href={product.affiliate_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '202121',
                backgroundColor: '#202121',
                padding: '10px 0',
                borderRadius: 6,
                textAlign: 'center',
                fontWeight: 'bold',
                display: 'block',
              }}
            >
              Buy on Daraz
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
