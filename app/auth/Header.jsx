'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


export default function Header() {
  
    return (
        <div className="flex justify-center">
            <Link className="flex flex-col items-center" href="/">
                <Image src="/logo.png" width={77} height={77} alt="logo" priority={ true } />
                <h1 className="bg-gradient-to-r from-sky-700 via-sky-300 to-sky-100 inline-block text-transparent bg-clip-text underline -mt-3 text-xl font-semibold tracking-wide">
                    Service<span className="text-zinc-500">Ad</span> 
                </h1>
            </Link>
        </div>
    )
}