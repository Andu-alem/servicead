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
        <div className="fixed text-wrap w-full text-[15px] bottom-0 sm:top-32 md:top-20 bg-gray-200 sm:bg-transparent sm:w-4/12 md:w-2/12 z-50">
            <div className="flex sm:block">
                <div className="text-sm hidden sm:block font-medium text-zinc-700 mb-2">Find services</div>
                <div className="my-2 sm:my-1 mx-1 sm:mx-1 text-zinc-500 flex sm:block">
                    <div className="my-1 flex flex-col w-[20vw] sm:block"> 
                        <label htmlFor="selection" className="hidden sm:block">Search By - </label>
                        <select id="selection" className="border border-zinc-200 sm:my-1 focus:border-0" onChange={ changeHandler } >
                            <option value="name">Name</option>
                            <option value="city">City</option>
                            <option value="category">Category</option>
                        </select>
                    </div>
                    <input 
                        type="search"
                        className="border border-sky-500 focus:border-0 rounded-lg px-3 py-1 w-[35vw] sm:w-[70%]" 
                        placeholder="Search"
                        onChange={ inputChange }
                    />
                </div>
                <div className="text-zinc-700 font-medium mx-1">
                    <h3 className="hidden sm:block">By radius</h3>
                    <input 
                        type="number" 
                        className="border border-sky-500 my-2 sm:my-0 sm:mt-2 rounded-lg pl-2 sm:pl-4 w-[20vw] sm:w-[50%]"
                        placeholder="2Km"/>
                </div>
                <div className="block sm:hidden my-2">
                    <ChevronDoubleUpIcon 
                        className="w-[40px] h-[30px] mr-2 font-bold text-sky-700 hover:text-zinc-500"
                        onClick={ () => setOpen(!open) }/>
                </div>
                <div className="hidden sm:block mt-3">
                    <h3 className="text-zinc-700 font-medium">By category</h3>
                    <div className="m-1 hidden sm:block h-[40vh] text-zinc-500 overflow-auto scrollbar-hide">
                        {
                            categories.map((category, index) => {
                                return (
                                    <p 
                                        className="capitalize hover:bg-zinc-100 cursor-default" 
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