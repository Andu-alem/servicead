'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'


export default function NavigationBar(props) {
    const {
        serviceName,
        fromMyservice=false,
        editMode,
        setEditMode,
        uploadPending,
        onSave
    } = props;
    const router = useRouter();
  
    return (
        <div className="fixed w-full top-0 backdrop-blur-2xl shadow-lg z-50">       
            <div className="block sm:flex justify-around border-b-2 border-gray-300 shadow-sm py-2 shadow-b shadow-lg">
                <div className="flex justify-between w-full">
                    <div className="flex justify-start w-10/12">
                        <div className="pl-2 md:pl-4 sm:w-[7%] mx-2 cursor-pointer" onClick={() => router.back()}>
                            <ArrowLeftIcon className="w-[30px] h-[25px] sm:w-[50px] sm:h-[32px] text-zinc-700 font-bold mt-1" />
                        </div>
                        <div className="sm:text-xl font-bold px-4 sm:px-10 md:px-[50px]">
                            <h1 className="bg-gradient-to-r from-black via-zinc-700 to-sky-700 inline-block text-transparent bg-clip-text capitalize">{ serviceName }</h1>
                        </div>
                    </div>
                    <div className="block w-2/12 md:w-[10%] relative">
                        {
                            fromMyservice && (
                                <div className="flex font-bold text-sm sm:text-normal text-zinc-700 sm:px-4 pt-[3px] sm:block sm:flex justify-between cursor-pointer">
                                    {
                                        editMode ? (
                                            <button 
                                                className={`${ uploadPending ? 'animate-pulse': 'animate-none' } mr-2 bg-blue-700 rounded-md mt-1 text-white hover:bg-opacity-75 px-2`}
                                                onClick={ () => {
                                                    onSave();
                                                    !uploadPending && setEditMode(false);
                                                }}
                                            >Save</button>
                                        ):(
                                            <button className="mr-2 bg-blue-700 rounded-md mt-1 text-white hover:bg-opacity-75 px-2" onClick={ () => setEditMode(true) }>Edit</button>
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