'use client'

import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function RightSideBar() {
    const { status, data } = useSession();
    return (
        <div className={`${ status === 'authenticated' && data.user.hasService ? 'hidden' : 'hidden sm:block' } bg-green-300 md:bg-transparent z-50 fixed sm:w-full md:sticky sm:top-5 py-2`}>
            <div className="md:mt-14 flex md:flex-col justify-center items-center gap-5">
                <div className="text-zinc-700 text-center text-normal md:text-xl font-medium">
                    What service do you offer?
                    Make your service available..
                </div>
                <Link href="/register" className="bg-sky-500 rounded-lg text-sm text-white px-3 py-1">Register</Link>
            </div>
        </div>
    )
}