'use client'
import { useRouter } from 'next/navigation'
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'


export default function Header() {
    const router = useRouter()
  
    return (
        <div className="fixed w-full top-0 backdrop-blur-2xl py-2 shadow-md">       
            <div className="block sm:flex justify-around border-b-2 border-gray-300 py-2 shadow-b shadow-md">
                <div className="flex justify-between w-full">
                        <div className="flex justify-start w-11/12">
                            <div className="px-2 md:pl-4 w-[2%] md:w-[4%] cursor-pointer" onClick={() => router.push('/')}>
                                <ArrowLeftIcon className="w-5 h-5 text-zinc-700 font-bold mt-[2px]" />
                            </div>
                            <div className="text-normal font-bold ml-5 sm:px-12 md:px-[50px]">
                                <h1 className="bg-gradient-to-r from-zinc-900 via-zinc-700 via-sky-500 to-zinc-700 inline-block text-transparent bg-clip-text">
                                    <span className="text-blue-500">Not now ?</span> Back to home
                                </h1>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}