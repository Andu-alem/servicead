
export default function Loading() {
    return (
        <div className="flex flex-col m-5 min-h-[70vh]">
            <div className="flex justify-between items-center border border-zinc-100 shadow-md px-5 py-2 mt-1 mb-7">
                <div className="w-16 h-16 rounded-full bg-stone-500 border border-zinc-200 animate-pulse"></div>
                <div className="h-7 w-1/3 bg-stone-500 border border-zinc-200 animate-pulse"></div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center w-full">
                <div className="w-11/12 sm:w-[50%] flex-col justify-center items-center px-10 py-20 mx-auto h-[65vh] bg-stone-500 shadow-md rounded-lg animate-pulse">
                    <div className="h-7 w-[80%] my-3 bg-stone-50 border border-zinc-100 rounded-lg"></div>
                    <div className="h-7 w-[65%] my-3 bg-stone-50 border border-zinc-100 rounded-lg"></div>
                    <div className="h-7 w-[50%] my-3 bg-stone-50 border border-zinc-100 rounded-lg"></div>
                    <div className="h-7 w-[35%] my-3 bg-stone-50 border border-zinc-100 rounded-lg"></div>

                </div>
                <div className="w-11/12 sm:w-[47%] flex flex-col justify-center items-center rounded-lg border border-zinc-200 shadow-md">
                    <div className="w-24 h-24 rounded-full bg-stone-500 border-zinc-300 m-1 animate-pulse"></div>
                    <div className="h-4 w-[30%] bg-stone-500 border-zinc-300 m-1 animate-pulse"></div>
                    <div className="w-3/4 h-[30vh] bg-stone-500 border-zinc-300 m-2 animate-pulse"></div>
                    <div className="flex justify-evenly w-3/4 m-2">
                        <div className="w-24 h-7 bg-stone-500 border-zinc-300 animate-pulse"></div>
                        <div className="w-24 h-7 bg-gray-300 border-zinc-300 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}