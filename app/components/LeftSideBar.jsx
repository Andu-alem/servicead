"use client"

import { useState } from 'react';
import ChevronDoubleUpIcon from '@heroicons/react/24/solid/ChevronDoubleUpIcon';
import CatagoryModal from './CatagoryModal';


export default function LeftSideBar({ categories, filterService }) {
    const [open, setOpen] = useState(false);
    const [searchBy, setSearchBy] = useState("name");
    const changeHandler = (e) => {
        setSearchBy(e.target.value);
    }
    const inputChange = (e) => {
        filterService(searchBy, e.target.value.trim());
    }
    const handleClick = (e) => {
        filterService('category', e.target.innerHTML.trim());
    }

    return (
        <div className="fixed sm:sticky text-wrap w-full text-[15px] bottom-0 sm:top-32 md:top-20 z-50 bg-white">
            <div className="flex justify-evenly items-center sm:block">
                <div className="text-sm hidden sm:block font-medium text-zinc-700 mb-2">Find services</div>
                <div className="my-2 sm:my-1 mx-1 text-zinc-500 flex gap-7 items-center sm:block">
                    <div className="my-1 flex flex-row-reverse items-center gap-2 w-[20vw] sm:block"> 
                        <label htmlFor="selection" className="hidden sm:block">Search By - </label>
                        <select id="selection" className="border border-zinc-200 sm:my-1 focus:border-0" onChange={ changeHandler } >
                            <option value="name">Name</option>
                            <option value="city">City</option>
                            <option value="category">Category</option>
                        </select>
                        <span className="bg-blue-500 mt-1 sm:mt-0 cursor-pointer px-2 rounded-md text-white ml-2" onClick={ () => filterService('all') }>All</span>
                    </div>
                    <input 
                        type="search"
                        className="border border-sky-500 h-7 focus:border-0 rounded-lg px-3 py-1 w-[35vw] sm:w-[90%]" 
                        placeholder="Search"
                        onChange={ inputChange }
                    />
                </div>
                <div className="block sm:hidden my-2">
                    <ChevronDoubleUpIcon 
                        className="w-[40px] h-[30px] mr-2 font-bold text-sky-700 hover:text-zinc-500"
                        onClick={ () => setOpen(!open) }/>
                </div>
                <div className="hidden sm:block mt-3">
                    <h3 className="text-zinc-900 font-medium">By category</h3>
                    <div className="hidden sm:block h-[40vh] text-zinc-500 overflow-auto scrollbar-hide">
                        {
                            categories.map((category, index) => {
                                return (
                                    <p 
                                        className="capitalize hover:bg-zinc-100 cursor-default p-1" 
                                        key={ index }
                                        onClick={ handleClick }
                                    >{ category.name }</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={open ? "block sm:hidden": "hidden"}>
                    <CatagoryModal 
                        categories={ categories } 
                        filterService={ filterService }
                    />
            </div>
        </div>
    )
}