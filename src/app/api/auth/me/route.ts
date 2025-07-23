import { prisma } from "../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
    try {
        const token = req.headers.get('authorization')?.split(' ')[1];

        if (!token) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY || 'your-secret-key');

        if (!decoded) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const user = await prisma.users.findFirst({
            where: {
                id: decoded.userId,
            },
        });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: `Error: ${err}` }, { status: 500 });
    }
}
