import { NextResponse } from "next/server"
import jwt from "jsonwebtoken";

const KEY = 'thisismyjwtsecretwfgyrfgeuihmdxoiwqmhgyneurhcjmegrqomjwicfgyrfgurgnfiuhqwixjorfgnru';

export async function POST(req: Request, res: Response) {
    const { username, password } = await req.json();

    console.log({ username, password });

    return NextResponse.json({
        token: jwt.sign({
            username,
            admin: username === 'admin' && password === 'admin'
        }, KEY)
    })
}