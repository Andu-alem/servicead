'use client'
import { useRouter } from 'next/navigation'
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'


export default function NavigationBar({servicename, menuPressed, setMenuPressed }) {
    const router = useRouter()
  
    return (
        <div className="fixed w-full top-0 backdrop-blur-2xl shadow-lg">       
            <div className="block sm:flex justify-around border-b-2 border-gray-300 shadow-sm py-2 shadow-b shadow-lg">
                <div className="flex justify-between w-full">
                    <div className="flex justify-start w-7/12">
                        <div className="px-2 md:pl-4 w-[2%] md:w-[4%]" onClick={() => router.back()}>
                            <ArrowLeftIcon className="w-[30px] h-[25px] sm:w-[50px] sm:h-[32px] text-zinc-700 font-bold mt-1 cursor-pointer" />
                        </div>
                        <div className="sm:text-2xl font-bold px-12 md:px-[50px]">
                            <h1 className="italic bg-gradient-to-r from-zinc-900 via-zinc-700 via-amber-500 to-amber-700 inline-block text-transparent bg-clip-text capitalize">{ servicename }</h1>
                        </div>
                    </div>
                    <div className="visible md:hidden w-5/12">
                        <div className="mx-1 font-medium text-sm sm:text-lg text-zinc-700 px-4 sm:block sm:flex justify-between cursor-pointer hover:text-sky-500" onClick={() => setMenuPressed(!menuPressed)}>ManageService</div>
                    </div>
                </div>
            </div>
        </div>
    )
}