import { prisma } from "../../../lib/prisma";
import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";

interface RegisterBody {
    name: string;
    email: string;
    password: string;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json() as RegisterBody;

        if (!body) {
            return NextResponse.json({
                message: "Invalid request body"
            });
        }

        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json({
                message: "Please provide name, email, and password"
            });
        }

        const existingUser = await prisma.users.findFirst({
            where: {
                email: email
            }
        });

        if (existingUser) {
            return NextResponse.json({
                message: "User with this email already exists"
            });
        }

        const hashedPassword = createHash('sha256').update(password).digest('hex');

        const newUser = await prisma.users.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
            },
        });

        return NextResponse.json({
            message: "User registered successfully",
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
            }
        });

    } catch (err: any) {
        console.error(err);
        return NextResponse.json({
            message: `Error: ${err}`
        });
    }
}
