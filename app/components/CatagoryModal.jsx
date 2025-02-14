
export default function CatagoryModal({ categories, filterService }) {
    const handleClick = (e) => {
        filterService('category', e.target.innerHTML.trim());
    }

    return (
        <div className="fixed bottom-14 right-0 w-[70vw] h-[70vh] p-3 bg-white overflow-auto scrollbar-hide bg-gray-100 shadow-lg">
            <h1 className="text-zinc-900 font-semibold m-1">Categories</h1>
            <div className="">
                {
                    categories.map((category, index) => {
                        return (
                            <p 
                                className="p-2 text-zinc-700 hover:bg-zinc-100 hover:text-sky-700 cursor-pointer capitalize" 
                                key={ index }
                                onClick={ handleClick }
                            >{ category.name }</p>
                        )
                    })
                }
            </div>
        </div>
    )
}