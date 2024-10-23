'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon'


export default function NavigationBar({servicename, fromMyservice=false}) {
    const [modal, setModal] = useState(false)
    const router = useRouter()
  
    return (
        <div className="fixed w-full top-0 backdrop-blur-2xl shadow-lg">       
            <div className="block sm:flex justify-around border-b-2 border-gray-300 shadow-sm py-2 shadow-b shadow-lg">
                <div className="flex justify-between w-full">
                    <div className="flex justify-start w-8/12">
                        <div className="pl-2 md:pl-4 sm:w-[7%] mx-2" onClick={() => router.back()}>
                            <ArrowLeftIcon className="w-[30px] h-[25px] sm:w-[50px] sm:h-[32px] text-zinc-700 font-bold mt-1 cursor-pointer" />
                        </div>
                        <div className="sm:text-2xl font-bold px-4 sm:px-10 md:px-[50px]">
                            <h1 className="italic bg-gradient-to-r from-zinc-900 via-zinc-700 via-amber-500 to-amber-700 inline-block text-transparent bg-clip-text capitalize">{ servicename }</h1>
                        </div>
                    </div>
                    <div className="block w-4/12 md:w-[25%] relative">
                        <div className="flex font-bold text-sm sm:text-normal text-zinc-700 sm:px-4 pt-[3px] sm:block sm:flex justify-between cursor-pointer">
                            <div className="mx-1 hover:text-sky-500" onClick={() => setModal(!modal)}>Use Map</div>
                        </div>
                        <div className={`${modal ? "block":"hidden"} fixed bg-gradient-to-b from-white to-sky-100 left-0 top-0 md:left-[10vw] md:top-[10vh] min-h-[100vh] w-[100vw] md:h-0 md:w-0`}>
                            <div className="flex justify-between boder-b shadow-lg py-2">
                                <h1 className="font-medium text-lg pl-2">The map goes here....</h1>
                                <div className="px-3">
                                    <XMarkIcon className="w-[50px] h-[30px] text-zinc-700 font-bold cursor-pointer" onClick={() => setModal(false)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}