"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken"
import { CldImage } from "next-cloudinary";
import { redirect, useRouter } from "next/navigation";

const LoginPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("Please Login to continue");
    const [login, setLogin] = useState<string>('false');

    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem('login') === 'true') {
            setLogin('true');
            setMessage('Welcome Admin')
        }
    }, [])

    const handleLogin = async (event: any) => {
        event.preventDefault();

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            }).then(t => t.json())

            const { token } = res;
            console.log(token);

            if (token) {
                const data = jwt.decode(token) as { admin: boolean };
                if (data.admin) {
                    setMessage("Welcome Admin");
                    setLogin('true');
                    localStorage.setItem('login', 'true');
                    setTimeout(() => {
                        router.replace("/upload")
                    }, 2000);
                }
                else setMessage("Invalid Credentials!");
            }

        } catch (err) {
            console.error(err);
            setMessage("Something went wrong!");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('login');
        setMessage('Please Login to continue');
        setLogin('false');
    }

    return (
        <section className="min-h-screen p-4">
            <h1 className="font-bold text-xl md:text-3xl border-b-2 pb-2 mt-2">{message}</h1>
            <div className="flex flex-col gap-4 justify-center items-center mt-8">
                {login === 'false' && <form method="POST" action="/api/login" className="flex flex-col gap-4 justify-center items-center">
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={e => setUsername(e.currentTarget.value)}
                    />
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                    />
                    <Button onClick={handleLogin}>Submit</Button>
                </form>}
                {login === 'true' && <>
                    <CldImage
                        width="320"
                        height="320"
                        src={"bjn2wpgm9vc54ocymt5o"}
                        sizes="100vw"
                        alt="argha media"
                        className='mt-2 mb-4'
                    />
                    <Button onClick={handleLogout}>Logout</Button>
                </>}
            </div>
        </section>
    );
}

export default LoginPage