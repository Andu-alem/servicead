
export default function CatagoryModal({ catagories }) {
    return (
        <div className="fixed bottom-10 right-0 w-[70vw] h-[50vh] p-3 bg-white overflow-auto scrollbar-hide shadow-lg">
            <h1 className="text-zinc-500 font-medium m-1">Catagories</h1>
            <div className="">
                {
                    catagories.map((item, index) => {
                        return (
                            <p className="p-2 text-zinc-400 border border-gray-100 hover:bg-zinc-100 hover:text-sky-700 cursor-pointer capitalize" key={ index }>{ item }</p>
                        )
                    })
                }
            </div>
        </div>
    )
}