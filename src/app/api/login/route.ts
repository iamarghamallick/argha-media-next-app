import { NextResponse } from "next/server"
import jwt, { Secret } from "jsonwebtoken";

const KEY = process.env.JWT_SECRET as Secret;

export async function POST(req: Request, res: Response) {
    const { username, password } = await req.json();

    console.log({ username, password });

    return NextResponse.json({
        token: jwt.sign({
            username,
            admin: username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD
        }, KEY)
    })
}