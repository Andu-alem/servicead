"use client"
import Card from './Card'
import { useSession } from "next-auth/react"


const CardContainer = ({ services }) => {
    return (
        <div className="w-[100%] md:w-[100%] card-color">
            <div className="flex flex-nowrap overflow-x-auto w-full scrollbar-hide w-[98%] mx-auto">
            {
                //loop through services[]
                services.map((service, index) => {
                    return (
                        <Card key={index} service={service} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default function ServicesList({ catagories, services }) {
    return (
        <div className="mb-12">
            {
                catagories.length < 1 ?
                (
                    <h2 className="text-lg text-zinc-500 text-center pt-10">No Service Found</h2>
                ) :
                catagories.map((cat, index) => {
                    return (
                        <div key={index}>
                            <div className="border-b border-gray-100 py-1 px-1 sm:px-7">
                                <h2 className="font-bold text-[17px] text-gray-500 capitalize">{`${cat}s`}</h2>
                            </div>
                            <CardContainer services={services[cat]} />
                        </div>
                    )
                })
            }
        </div>
    )
}