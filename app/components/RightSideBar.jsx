'use client'

import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function RightSideBar() {
    const { status, data } = useSession();
    return (
        <div className={`${ status === 'authenticated' && data.user.hasService ? 'hidden' : 'hidden sm:block' } bg-green-300 md:bg-transparent z-50 sm:w-full md:w-2/12 sm:fixed sm:left-0 md:left-[80vw] sm:top-14 py-2 md:mx-4`}>
            <div className="md:mt-14 flex md:flex-col justify-center items-center ">
                <div className="text-zinc-700 text-center text-normal md:text-xl font-medium md:mb-7">
                    What service do you offer?
                    Make your service available..
                </div>
                <Link href="/register" className="md:py-1 px-3 md:mt-2 ml-2 md:ml-0 bg-sky-500 rounded-lg text-lg text-white">Register</Link>
            </div>
        </div>
    )
}