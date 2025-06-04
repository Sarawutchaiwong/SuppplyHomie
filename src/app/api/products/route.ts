import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
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
  {
    id: 4,
    name: 'ถังพลาสติกพีพี (PP Tank) รับผลิตถังเคมี ไลน์ชุบ บำบัดน้ำเสีย',
    price: '$49.99',
    image: 'https://www.sungenn.com/wp-content/uploads/2024/08/woo_product_conicaltank_image-300x300.jpg',
  },
  {
    id: 5,
    name: 'WAVE WGT-140 ถังดักไขมันใต้ซิงค์/ใต้ดิน 140 L รุ่น WGT',
    price: '$39.99',
    image: 'https://majestic-home.co.th/wp-content/uploads/2021/06/WGT-140.png',
  },
  {
    id: 6,
    name: 'HITACHI ปั๊มน้ำอัตโนมัติ ชนิดดูดน้ำลึก (ระบบเจ็ทคู่) 300 W รุ่น DT-P300XX(PJ)',
    price: '$19.99',
    image: 'https://majestic-home.co.th/wp-content/uploads/2021/11/DT-P-XX-300x300.png',
  }
]


return NextResponse.json({
  data : products
})
}