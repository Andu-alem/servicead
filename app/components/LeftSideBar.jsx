"use client"
import Link from 'next/link'
import ChevronDoubleUpIcon from '@heroicons/react/24/solid/ChevronDoubleUpIcon'
import CatagoryModal from './CatagoryModal'
import { useState } from 'react';


export default function LeftSideBar({catagories}) {
    const [open, setOpen] = useState(false)
    return (
        <div className="fixed text-wrap w-full bottom-0 md:top-20 bg-gray-200 md:bg-transparent md:w-2/12 z-50">
            <div className="flex md:block">
                <div className="text-lg hidden md:block font-medium text-zinc-700 mb-2">Find services</div>
                <div className="my-2 md:my-1 mx-1 md:mx-1 text-zinc-500">
                    <input className="border border-sky-500 rounded-lg px-3 w-[40vw] md:w-[70%]" placeholder="Search" />
                </div>
                <div className="text-zinc-700 font-medium mx-1">
                    <h3 className="hidden md:block">By radius</h3>
                    <input 
                        type="number" 
                        className="border border-sky-500 my-2 md:my-0 md:mt-2 rounded-lg pl-2 md:pl-4 w-[40vw] md:w-[50%]"
                        placeholder="2Km"/>
                </div>
                <div className="block md:hidden my-2">
                    <ChevronDoubleUpIcon 
                        className="w-[40px] h-[30px] mr-2 font-bold text-sky-700 hover:text-zinc-500"
                        onClick={ () => setOpen(!open) }/>
                </div>
                <div className="hidden md:block mt-3">
                    <h3 className="text-zinc-700 font-medium">By catagory</h3>
                    <div className="m-1 hidden md:block h-[40vh] text-zinc-500 overflow-auto scrollbar-hide">
                        {
                            catagories.map((item, index) => {
                                return (
                                    <p className="capitalize hover:bg-zinc-100 cursor-default" key={ index }>{ item }</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={open ? "block": "hidden"}>
                    <CatagoryModal catagories={ catagories } />
            </div>
        </div>
    )
}