// 'use client'

// import { useEffect, useState } from 'react'
// import { useRouter, useParams } from 'next/navigation'
// import { doc, getDoc, updateDoc } from 'firebase/firestore'
// import { db } from '@/lib/firebase'

// export default function EditProduct() {
//   const router = useRouter()
//   const params = useParams()
//   const productId = params.id

//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     price: '',
//     image_url: '',
//     category: '',
//     affiliate_link: '',
//   })

//   useEffect(() => {
//     async function fetchProduct() {
//       if (!productId) return

//       const docRef = doc(db, 'products', productId)
//       const docSnap = await getDoc(docRef)

//       if (docSnap.exists()) {
//         const data = docSnap.data()
//         setForm({
//           title: data.title,
//           description: data.description,
//           price: data.price.toString(),
//           image_url: data.image_url,
//           category: data.category,
//           affiliate_link: data.affiliate_link,
//         })
//       } else {
//         alert('Product not found.')
//         router.push('/admin/dashboard')
//       }
//     }
//     fetchProduct()
//   }, [productId, router])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     const docRef = doc(db, 'products', productId!)

//     try {
//       await updateDoc(docRef, {
//         title: form.title,
//         description: form.description,
//         price: parseFloat(form.price),
//         image_url: form.image_url,
//         category: form.category,
//         affiliate_link: form.affiliate_link,
//       })
//       alert('Product updated successfully.')
//       router.push('/admin/dashboard')
//     } catch (error) {
//       console.error('Failed to update product:', error)
//       alert('Failed to update product.')
//     }
//   }

//   return (
//     <div style={{ maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial' }}>
//       <h1>Edit Product</h1>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
//         <input name="title" placeholder="Product Title" onChange={handleChange} value={form.title} required />
//         <textarea name="description" placeholder="Description" onChange={handleChange} value={form.description} required />
//         <input name="price" placeholder="Price (e.g., 999)" onChange={handleChange} value={form.price} required />
//         <input name="image_url" placeholder="Image URL" onChange={handleChange} value={form.image_url} required />
//         <input name="category" placeholder="Category" onChange={handleChange} value={form.category} required />
//         <input name="affiliate_link" placeholder="Affiliate Link" onChange={handleChange} value={form.affiliate_link} required />

//         <button type="submit" style={{ padding: 10 }}>Update Product</button>
//       </form>
//     </div>
//   )
// }
