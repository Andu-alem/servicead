'use client'
import { useRouter } from 'next/navigation'
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'


export default function Header() {
    const router = useRouter()
  
    return (
        <div className="fixed w-full top-0 backdrop-blur-2xl shadow-lg">       
            <div className="block sm:flex justify-around border-b-2 border-gray-300 shadow-sm py-2 shadow-b shadow-lg">
                <div className="flex justify-between w-full">
                        <div className="flex justify-start w-11/12">
                            <div className="px-2 md:pl-4 w-[2%] md:w-[4%] cursor-pointer" onClick={() => router.push('/services')}>
                                <ArrowLeftIcon className="w-[30px] h-[25px] sm:w-[50px] sm:h-[32px] text-zinc-700 font-bold mt-1" />
                            </div>
                            <div className="sm:text-2xl font-bold ml-5 sm:px-12 md:px-[50px]">
                                <h1 className="italic bg-gradient-to-r from-zinc-900 via-zinc-700 via-amber-500 to-amber-700 inline-block text-transparent bg-clip-text">Not now? Back to home</h1>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}