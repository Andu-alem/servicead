'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function RightSideBar() {
    const { status, data } = useSession();
    return (
        <div className={`${ status === 'authenticated' && data.user.hasService ? 'hidden' : 'hidden sm:block' } sm:fixed text-lg mx-4`}>
            <div className="mt-14">
                <div className="text-zinc-700 font-medium mb-10">
                    What service do you offer? <br/>
                    Make your service available..
                </div>
                <Link href="/register" className="py-1 px-2 mt-2 ml-[15px] bg-sky-500 rounded-lg text-white">Register</Link>
            </div>
        </div>
    )
}