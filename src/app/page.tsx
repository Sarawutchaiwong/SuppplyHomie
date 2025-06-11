'use client'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'

type Product = {
  id: string
  name: string
  price: number
  image: string
  description?: string
  category?: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {

    (async () => {
      const res = await axios.get('/api/products')
      if (res.data.data) {
        setProducts(res.data.data)
      }
    })()
  }, [])

  return (
    <>
      <Head>
        <title>SupplyHomie - Home</title>
      </Head>

      <header className="bg-black shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">SupplyHomie</h1>
          <nav className="space-x-4">
            <a href="#" className="text-white-600 hover:text-blue-500">Home</a>
            <a href="#" className="text-white-600 hover:text-blue-500">Shop</a>
            <a href="#" className="text-white-600 hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      <main className="bg-black-50 min-h-screen">
        <section className=" text-center py-16">
          <h2 className="text-4xl font-bold text-white-800 mb-4">Welcome to SupplyHomie</h2>
          <p className="text-lg text-white-700">Best choice for whoever looking for water supply from a nice homie</p>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h3 className="text-black text-2xl font-semibold mb-6">Featured Products</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 drop-shadow-lg cursor-pointer">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4 scale-100 hover:scale-105 transition-transform duration-300">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
                <h4 className="text-black mt-4 text-lg font-semibold">{product.name}</h4>
                <p className="text-blue-600 font-bold">{product.price}</p>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p
                  className="inline-block mt-3 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full shadow-sm
                    hover:bg-blue-700 transition-colors duration-200"
                >
                  {product.category}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className=" shadow-inner py-6">
        <div className="container mx-auto text-center text-white-500 text-sm">
          &copy; {new Date().getFullYear()} SupplyHomie. All rights reserved.
        </div>
      </footer>
    </>
  )
}