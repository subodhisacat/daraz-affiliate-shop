"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  affiliate_link: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      router.push("/admin/login");
    } else {
      async function fetchProducts() {
        const q = query(
          collection(db, "products"),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        const productsData: Product[] = [];
        querySnapshot.forEach((doc) => {
          productsData.push({ id: doc.id, ...doc.data() } as Product);
        });
        setProducts(productsData);
      }
      fetchProducts();
    }
  }, [router]);

  // Navigate to add product page
  const handleAddProduct = () => {
    router.push("/admin/add");
  };

  // Navigate to edit product page
  const handleEdit = (id: string) => {
    router.push(`/admin/edit/${id}`);
  };

  // Delete product from Firestore and update UI
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await deleteDoc(doc(db, "products", id));
      alert("Product deleted successfully.");
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("Failed to delete product.");
    }
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "auto",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <h1>Admin Dashboard</h1>
      <button
        onClick={handleAddProduct}
        className="p-5 hover:bg-blue-400 text-lg bg-blue-500 rounded-4xl"
      >
        ➕ Add Product
      </button>
      {products.length === 0 && <p>No products found.</p>}
      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}
        >
          <h3>{product.title}</h3>
          <p>Price: Rs. {product.price}</p>
          <p>Category: {product.category}</p>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => handleEdit(product.id)}>✏️ Edit</button>
            <button
              onClick={() => handleDelete(product.id)}
              style={{ color: "red" }}
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
