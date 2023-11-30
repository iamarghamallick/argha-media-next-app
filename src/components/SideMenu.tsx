"use client";

import React, { useState } from 'react'
import { Button } from './ui/button'
import classNames from 'classnames';
import Link from 'next/link';
import ArrowRight from './icons/ArrowRight';
import ArrowCircled from './icons/ArrowCircled';
import LoveIcon from './icons/LoveIcon';
import AlbumIcon from './icons/AlbumIcon';
import { Folder } from '@/app/albums/page';
import ArchiveIcon from './icons/ArchiveIcon';

const SideMenu = ({ folderNames }: { folderNames: Folder[] }) => {
    const [showMenuBar, setShowMenuBar] = useState(false);
    const toggleSideMenu = () => { setShowMenuBar(!showMenuBar); }

    return (
        <div className="pb-0 md:pb-12 md:block md:w-1/5 md:border-r-2">
            <div className='md:hidden fixed top-4 left-4 z-20' onClick={toggleSideMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-2 w-8 h-8 bg-gray-800 rounded-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
            <div className={classNames({ 'hidden': !showMenuBar, 'fixed top-16 left-0 overflow-y-scroll z-10 h-screen pb-16 bg-slate-700 no-scrollbar': showMenuBar, 'space-y-4': true, 'py-4': true, 'md:block': true })}>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Gallery
                    </h2>
                    <div className="space-y-1">
                        <Link href="/gallery">
                            <Button onClick={() => setShowMenuBar(showMenuBar && true ? false : showMenuBar)} variant="ghost" className="w-full justify-start">
                                <ArrowCircled />
                                Latest
                            </Button>
                        </Link>
                        <Link href="/favorites">
                            <Button onClick={() => setShowMenuBar(showMenuBar && true ? false : showMenuBar)} variant="ghost" className="w-full justify-start">
                                <LoveIcon />
                                Favorites
                            </Button>
                        </Link>
                        <Link href="/albums">
                            <Button onClick={() => setShowMenuBar(showMenuBar && true ? false : showMenuBar)} variant="ghost" className="w-full justify-start">
                                <AlbumIcon />
                                Albums
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Highlights
                    </h2>
                    <div className="space-y-1">
                        {folderNames.map((folder) => (
                            <Link key={folder.name} href={`/albums/${folder.name}`}>
                                <Button onClick={() => setShowMenuBar(showMenuBar && true ? false : showMenuBar)} variant="ghost" className="w-full justify-start">
                                    <ArrowRight />
                                    {folder.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Archive
                    </h2>
                    <div className="space-y-1">
                        <Link href={`/archive/2022`}>
                            <Button onClick={() => setShowMenuBar(showMenuBar && true ? false : showMenuBar)} variant="ghost" className="w-full justify-start">
                                <ArchiveIcon />
                                2022
                            </Button>
                        </Link>
                        <Link href={`/archive/2021`}>
                            <Button onClick={() => setShowMenuBar(showMenuBar && true ? false : showMenuBar)} variant="ghost" className="w-full justify-start">
                                <ArchiveIcon />
                                2021
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight hover:bg-slate-700 rounded-md p-2">
                        <Link href="/upload" onClick={() => setShowMenuBar(showMenuBar && true ? false : showMenuBar)}>Upload</Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default SideMenu