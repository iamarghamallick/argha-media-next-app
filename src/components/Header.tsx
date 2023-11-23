"use client";

import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Header = () => {
    return (
        <div className="border-b container mx-auto bg-slate-950">
            <div className="flex h-16 items-center justify-between px-4">
                <div className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-2 w-8 h-8 bg-gray-800 rounded-sm">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>
                <div className='text-center'>Argha Media</div>
                <div className="ml-2 flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/iamarghamallick.png" alt="am" />
                        <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Header