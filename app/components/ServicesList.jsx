"use client"
import Card from './Card'


const CardContainer = ({ services }) => {
    return (
        <div className="w-[100%] md:w-[100%]">
            <div className="flex flex-nowrap overflow-x-auto scrollbar-hide w-[98%] mx-auto">
            {
                //loop through services[]
                services.map((service, index) => {
                    return (
                        <Card key={ index } service={ service } />
                    )
                })
            }
            </div>
        </div>
    )
}

export default function ServicesList({ categories }) {
    return (
        <div className="mb-12 mt-3">
            {
                categories.length < 1 ?
                (
                    <h2 className="text-lg text-zinc-500 text-center pt-10">No Service Found</h2>
                ) :
                categories.map((category, index) => {
                    return (
                        <div key={index}>
                            <div className="border-b border-gray-100 py-1 px-1 sm:px-4">
                                <h2 className="font-semibold text-[15px] text-zinc-900 capitalize">{`${category.name}s`}</h2>
                            </div>
                            <CardContainer services={ category.services } />
                        </div>
                    )
                })
            }
        </div>
    )
}