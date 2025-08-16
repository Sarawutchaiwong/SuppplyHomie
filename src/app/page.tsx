'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';

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
      <Navbar />

      <main className="min-h-screen">
        <section className="text-center py-20 bg-white dark:bg-slate-900">
          <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Welcome to SupplyHomie</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Your one-stop solution for all water supply needs.</p>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Featured Products</h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map(product => (
              <div key={product.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{product.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">{product.price}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{product.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {product.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-slate-900 shadow-inner">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400">©{new Date().getFullYear()} SupplyHomie. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-500 dark:text-slate-400 sm:mt-0">
            <li><a href="#" className="hover:underline me-4 md:me-6">About</a></li>
            <li><a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline me-4 md:me-6">Licensing</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
