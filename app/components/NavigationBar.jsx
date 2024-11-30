'use client'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Bar3BottomRightIcon from '@heroicons/react/24/solid/Bars3BottomRightIcon'
import BrandLogo from './BrandLogo';


export default function NavigationBar() {
    const [menuToggle, setMenuToggle] = useState(false)
    const { status, data } = useSession()
    const router = useRouter();
   
    return (
        <div className="fixed w-full top-0 backdrop-blur-2xl shadow-b shadow-lg z-50">       
            <div className="block sm:flex justify-around border-b-2 border-gray-300 shadow-sm py-2">
                <div className="flex justify-between w-full">
                        <BrandLogo onClick={ () => router.refresh() } />
                        <div className="w-[1/12] sm:hidden hover:text-red-400 mt-[7px]">
                            <Bar3BottomRightIcon className="w-[50px] h-[40px] mr-1 text-zinc-500 font-bold cursor-pointer hover:text-sky-700" onClick={()=> setMenuToggle(!menuToggle)} />
                        </div>
                </div>
                <div className={`${menuToggle ? "block" : "hidden"} font-medium text-sm text-zinc-700 m-2 px-4 sm:block sm:flex justify-between cursor-pointer`}>
                    <div className="my-3 sm:my-0 mx-1 mr-1 sm:mr-2 hover:text-sky-500">
                        {
                            status === 'unauthenticated' || status === 'loading' ?
                            <Link href="/auth/signup">Register</Link>
                            : data && !data.user.hasService ?
                            <Link href="/register">PostService</Link>
                            :
                            <Link href="/myservice">MyService</Link>
                        }
                    </div>
                    <div className="mx-1 hover:text-sky-500">
                        {
                            status === 'authenticated' ?
                            <div onClick={ () => signOut({ callbackUrl: "/" }) }>
                                LogOut
                            </div> :
                            <div> 
                                <Link href="/auth/login">LogIn</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}