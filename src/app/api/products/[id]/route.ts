import { prisma } from "../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const product = await prisma.products.findUnique({
            where: { id: params.id },
        });

        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({ data: product });
    } catch (err: any) {
        return NextResponse.json({ message: `Error: ${err.message}` }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const body = await req.json();
        const { name, price, description, category, image } = body;

        const updatedProduct = await prisma.products.update({
            where: { id: params.id },
            data: { name, price, description, category, image },
        });

        return NextResponse.json({ data: updatedProduct });
    } catch (err: any) {
        return NextResponse.json({ message: `Error: ${err.message}` }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await prisma.products.delete({
            where: { id: params.id },
        });

        return new Response(null, { status: 204 });
    } catch (err: any) {
        return NextResponse.json({ message: `Error: ${err.message}` }, { status: 500 });
    }
}
