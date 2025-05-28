import Head from 'next/head'

const products = [
  {
    id: 1,
    name: 'HITACHI ปั๊มน้ำอัตโนมัติ ชนิดดูดน้ำลึก (ระบบเจ็ทคู่) 300 W รุ่น DT-P300XX(PJ)',
    price: '$19.99',
    image: 'https://majestic-home.co.th/wp-content/uploads/2021/11/DT-P-XX-300x300.png',
  },
  {
    id: 2,
    name: 'ถังพลาสติกพีพี (PP Tank) รับผลิตถังเคมี ไลน์ชุบ บำบัดน้ำเสีย',
    price: '$49.99',
    image: 'https://www.sungenn.com/wp-content/uploads/2024/08/woo_product_conicaltank_image-300x300.jpg',
  },
  {
    id: 3,
    name: 'WAVE WGT-140 ถังดักไขมันใต้ซิงค์/ใต้ดิน 140 L รุ่น WGT',
    price: '$39.99',
    image: 'https://majestic-home.co.th/wp-content/uploads/2021/06/WGT-140.png',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>ShopEase - Home</title>
      </Head>

      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">SupplyHomie</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Shop</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      <main className="bg-gray-50 min-h-screen">
        <section className="bg-blue-100 text-center py-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Welcome to SupplyHomie</h2>
          <p className="text-lg text-blue-700">Best choice for whoever looking for water supply from a nice homie</p>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h3 className="text-black text-2xl font-semibold mb-6">Featured Products</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
                <h4 className="text-black mt-4 text-lg font-semibold">{product.name}</h4>
                <p className="text-blue-600 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-inner py-6">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>
      </footer>
    </>
  )
}
