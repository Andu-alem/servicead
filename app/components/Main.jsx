"use client"
import Card2 from './Card2'
import { useSession } from "next-auth/react"


const CardContainer = ({ services }) => {
    return (
        <div className="w-[100%] md:w-[100%] card-color">
            <div className="flex flex-nowrap overflow-x-auto w-full scrollbar-hide w-[98%] mx-auto">
            {
                //loop through services[]
                services.map((service, index) => {
                    return (
                        <Card2 key={index} service={service} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default function Services({ catagories, services }) {
    return (
        <div className="mb-12">
            {
                //loop through catag
                catagories.map((cat, index) => {
                    return (
                        <div key={index}>
                            <div className="border-b border-gray-100 py-3 px-2 sm:px-7">
                                <h2 className="font-bold text-lg text-gray-400 capitalize">{`${cat}s`}</h2>
                            </div>
                            <CardContainer services={services[cat]} />
                        </div>
                    )
                })
            }
        </div>
    )
}