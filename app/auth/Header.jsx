'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


export default function Header() {
  
    return (
        <div className="flex justify-center">
            <Link href="/">
                <Image src="/logo.png" width={100} height={100} alt="logo" />
                <span className="bg-gradient-to-r -mt-10 from-sky-400 via-blue-500 via-amber-500 to-amber-700 inline-block text-transparent bg-clip-text text-lg font-medium capitalize">ServiceAd</span>
            </Link>
        </div>
    )
}