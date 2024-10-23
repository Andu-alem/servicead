'use client'
import { useState } from 'react';
import Header from './Header'
import Profile from '../../components/Profile'
import Description from '../../components/Description'
import Posts from '../../components/Post'
import ManagmentSection from '../../components/ManagmentSection';



export default function Main({ services }) {
    const { address, image, servicename, catagory, focusarea, description } = services
    const [menuPressed, setMenuPressed] = useState(false)
    
    return (
        <>
            <Header servicename={servicename} setMenuPressed={setMenuPressed} menuPressed={menuPressed} />
            <div className="sm:w-11/12 md:w-11/12 mx-auto mt-14 sm:flex md:justify-between">
                <div className="w-[96%] mx-auto sm:w-[42%] md:w-[37%] shadow-full shadow-lg">
                    <Profile image={image} address={address} catagory={catagory} />
                </div>
                <div className="px-2 sm:w-[57%] md:w-[45%]">
                    <Description description={description} servicename={servicename} />
                    {
                        Array.from(Array(10)).map((_, index) => {
                            return (
                                <div key={ index }>
                                    <Posts />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`${menuPressed ? 'visible':'hidden'} fixed w-[70%] sm:w-[50%] top-10 right-0 md:block md:static md:w-[17%] font-medium p-2 text-zinc-500`}>
                    <ManagmentSection />
                </div>
            </div>
        </>
    )
}