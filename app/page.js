//"use client"
//import { useSession } from "next-auth/react"
import Main from './components/Main'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar'
import NavigationBar from './components/NavigationBar'



export default async function Services() {
    const data = await fetch('http://localhost:3000/api/services', {cache: 'no-store'})
    const serviceData = await data.json()
    const { catagories, services } = serviceData
    
    return (
        <div>
            <NavigationBar />
            <div className="w-[96%] mx-auto mt-[70px] md:flex md:justify-evenly">
                <div className="md:w-2/12">
                    <LeftSideBar catagories={catagories} />
                </div>
                <div className="sm:w-10/12 md:w-8/12 mx-auto">
                    <Main catagories={catagories} services={services} />
                </div>
                <div className="w-2/12">
                    <RightSideBar />
                </div>
            </div>
        </div>
    )
}