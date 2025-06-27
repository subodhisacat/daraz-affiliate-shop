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
    <div className="max-w-xl mx-auto  backdrop-blur-3xl  rounded-xl font-sans mt-10">
      <h1 className="text-3xl font-extrabold mb-8 text-center ">Add Product</h1>
      <form onSubmit={handleSubmit} className="grid gap-5">
        <input
          name="title"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition m-1"
          placeholder="Product Title"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition m-1 resize-none"
          placeholder="Description"
          rows={3}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          type="number"
          min="0"
          step="0.01"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition m-1"
          placeholder="Price (e.g., 999)"
          onChange={handleChange}
          required
        />
        <input
          name="image_url"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition m-1"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />
        <input
          name="category"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition m-1"
          placeholder="Category"
          onChange={handleChange}
          required
        />
        <input
          name="affiliate_link"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition m-1"
          placeholder="Affiliate Link"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="m-1 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl py-3 px-6 transition-colors shadow"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
