import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

const products = [
  {
    name: "HITACHI ปั๊มน้ำอัตโนมัติ 300 W รุ่น DT-P300XX(PJ)",
    price: 3990,
    image: "https://majestic-home.co.th/wp-content/uploads/2021/11/DT-P-XX-300x300.png",
    description: "ปั๊มน้ำอัตโนมัติสำหรับบ้านพักอาศัย ดูดน้ำลึก ทนทาน ใช้งานง่าย",
    category: "ปั๊มน้ำ"
  },
  {
    name: "ถังพลาสติกพีพี (PP Tank) 500L",
    price: 2500,
    image: "https://www.sungenn.com/wp-content/uploads/2024/08/woo_product_conicaltank_image-300x300.jpg",
    description: "ถังพลาสติกคุณภาพสูง เหมาะสำหรับเก็บน้ำหรือสารเคมี",
    category: "ถังเก็บน้ำ"
  },
  {
    name: "WAVE WGT-140 ถังดักไขมันใต้ซิงค์ 140L",
    price: 1800,
    image: "https://majestic-home.co.th/wp-content/uploads/2021/06/WGT-140.png",
    description: "ถังดักไขมันสำหรับติดตั้งใต้ซิงค์หรือใต้ดิน ทนทานต่อการใช้งาน",
    category: "ถังดักไขมัน"
  },
  {
    name: "ปั๊มน้ำ Mitsubishi Q5",
    price: 4200,
    image: "https://www.mitsubishi-electric.co.th/products/water_pump/images/Q5.jpg",
    description: "ปั๊มน้ำคุณภาพสูงจาก Mitsubishi เหมาะสำหรับบ้านพักอาศัย",
    category: "ปั๊มน้ำ"
  },
  {
    name: "ถังเก็บน้ำ DOS NATURA 1000L",
    price: 3500,
    image: "https://www.dos.co.th/wp-content/uploads/2020/06/natura-1000l.jpg",
    description: "ถังเก็บน้ำพลาสติก Food Grade ปลอดภัยต่อสุขภาพ",
    category: "ถังเก็บน้ำ"
  },
  {
    name: "ปั๊มน้ำอัตโนมัติ HITACHI WT-P150GX",
    price: 3200,
    image: "https://www.homepro.co.th/img/PRODUCT/1/8850197/8850197-1.jpg",
    description: "ปั๊มน้ำอัตโนมัติขนาดเล็ก เหมาะสำหรับบ้านขนาดเล็ก",
    category: "ปั๊มน้ำ"
  },
  {
    name: "ถังเก็บน้ำบนดิน WAVE ECO 2000L",
    price: 5900,
    image: "https://www.wave.co.th/wp-content/uploads/2020/07/ECO-2000L.jpg",
    description: "ถังเก็บน้ำขนาดใหญ่ เหมาะสำหรับครอบครัวใหญ่",
    category: "ถังเก็บน้ำ"
  },
  {
    name: "ถังดักไขมัน DOS GTR-40",
    price: 1200,
    image: "https://www.dos.co.th/wp-content/uploads/2020/06/gtr-40.jpg",
    description: "ถังดักไขมันขนาดเล็ก ติดตั้งง่าย ดูแลรักษาง่าย",
    category: "ถังดักไขมัน"
  },
  {
    name: "ปั๊มน้ำอัตโนมัติ Panasonic GA-125JAK",
    price: 2700,
    image: "https://www.panasonic.com/th/consumer/home-appliances/water-pump/ga-125jak.html",
    description: "ปั๊มน้ำประหยัดไฟจาก Panasonic เหมาะสำหรับบ้านขนาดกลาง",
    category: "ปั๊มน้ำ"
  },
  {
    name: "ถังเก็บน้ำบนดิน SAFE 1500L",
    price: 4100,
    image: "https://www.safe.co.th/wp-content/uploads/2021/03/SAFE-1500L.jpg",
    description: "ถังเก็บน้ำ Food Grade แข็งแรง ทนทาน",
    category: "ถังเก็บน้ำ"
  },
  {
    name: "ถังดักไขมัน WAVE GTR-60",
    price: 1500,
    image: "https://www.wave.co.th/wp-content/uploads/2020/07/GTR-60.jpg",
    description: "ถังดักไขมันขนาดกลาง สำหรับร้านอาหารหรือบ้านขนาดใหญ่",
    category: "ถังดักไขมัน"
  },
  {
    name: "ปั๊มน้ำอัตโนมัติ MITSUBISHI EP-305R",
    price: 5100,
    image: "https://www.mitsubishi-electric.co.th/products/water_pump/images/EP-305R.jpg",
    description: "ปั๊มน้ำแรงดันสูง เหมาะสำหรับบ้าน 2 ชั้นขึ้นไป",
    category: "ปั๊มน้ำ"
  },
  {
    name: "ถังเก็บน้ำบนดิน DOS NATURA 2000L",
    price: 6700,
    image: "https://www.dos.co.th/wp-content/uploads/2020/06/natura-2000l.jpg",
    description: "ถังเก็บน้ำขนาดใหญ่ ปลอดภัยต่อสุขภาพ",
    category: "ถังเก็บน้ำ"
  },
  {
    name: "ถังดักไขมัน DOS GTR-80",
    price: 2100,
    image: "https://www.dos.co.th/wp-content/uploads/2020/06/gtr-80.jpg",
    description: "ถังดักไขมันขนาดใหญ่ สำหรับร้านอาหารขนาดใหญ่",
    category: "ถังดักไขมัน"
  },
  {
    name: "ปั๊มน้ำอัตโนมัติ HITACHI WT-P200GX",
    price: 3500,
    image: "https://www.homepro.co.th/img/PRODUCT/1/8850197/8850197-2.jpg",
    description: "ปั๊มน้ำอัตโนมัติขนาดกลาง เหมาะสำหรับบ้านขนาดกลาง",
    category: "ปั๊มน้ำ"
  }
];

async function main() {
  for (const product of products) {
    await prisma.products.create({ data: product });
  }
  console.log('Seeded products!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });