'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'


export default function NavigationBar({ servicename, fromMyservice=false, editMode, setEditMode, onSave }) {
    const router = useRouter();
  
    return (
        <div className="fixed w-full top-0 backdrop-blur-2xl shadow-lg">       
            <div className="block sm:flex justify-around border-b-2 border-gray-300 shadow-sm py-2 shadow-b shadow-lg">
                <div className="flex justify-between w-full">
                    <div className="flex justify-start w-10/12">
                        <div className="pl-2 md:pl-4 sm:w-[7%] mx-2 cursor-pointer" onClick={() => router.back()}>
                            <ArrowLeftIcon className="w-[30px] h-[25px] sm:w-[50px] sm:h-[32px] text-zinc-700 font-bold mt-1" />
                        </div>
                        <div className="sm:text-2xl font-bold px-4 sm:px-10 md:px-[50px]">
                            <h1 className="italic bg-gradient-to-r from-sky-400 via-blue-500 via-amber-500 to-amber-700 inline-block text-transparent bg-clip-text capitalize">{ servicename }</h1>
                        </div>
                    </div>
                    <div className="block w-2/12 md:w-[10%] relative">
                        {
                            fromMyservice && (
                                <div className="flex font-bold text-sm sm:text-normal text-zinc-700 sm:px-4 pt-[3px] sm:block sm:flex justify-between cursor-pointer">
                                    {
                                        editMode ? (
                                            <div 
                                                className="mx-1 hover:text-sky-500" 
                                                onClick={ () => {
                                                    onSave();
                                                    setEditMode(false);
                                                }}
                                            >Save</div>
                                        ):(
                                            <div className="mx-1 hover:text-sky-500" onClick={ () => setEditMode(true) }>Edit</div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}