"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddProduct() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image_url: "",
    category: "",
    affiliate_link: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      ...form,
      price: parseFloat(form.price),
      createdAt: new Date(),
    };

    try {
      await addDoc(collection(db, "products"), newProduct);
      alert("✅ Product added successfully!");
      router.push("/admin/dashboard");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("❌ Failed to add product.");
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "auto",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <h1 className="text-xl ">Add Product</h1>
      <form onSubmit={handleSubmit} className=" grid gap-4 ">
        <input
          name="title"
          className="border p-2 rounded-lg m-2 border-gray-600"
          placeholder="Product Title"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          className="border p-2 rounded-lg m-2"
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          name="price"
          className="border p-2 rounded-lg m-2"
          placeholder="Price (e.g., 999)"
          onChange={handleChange}
          required
        />
        <input
          name="image_url"
          className="border p-2 rounded-lg m-2"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />
        <input
          name="category"
          className="border p-2 rounded-lg m-2"
          placeholder="Category"
          onChange={handleChange}
          required
        />
        <input
          name="affiliate_link"
          className="border p-2 rounded-lg m-2"
          placeholder="Affiliate Link"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="m-2 hover:bg-blue-400 text-lg bg-blue-500 rounded-4xl"
          style={{ padding: 10 }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
