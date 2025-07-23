import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.products.findMany();
    return NextResponse.json({ data: products });
  } catch (error: any) {
    return NextResponse.json({ message: "Error"});
  }
}