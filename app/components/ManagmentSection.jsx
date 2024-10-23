
export default function ManagmentSection () {
    return (
        <div className="bg-white h-[86vh] overflow-auto scrollbar-hide p-2 md:fixed md:w-[17%] md:bg-transparent font-medium text-zinc-500 cursor-default" >
            <div className="border-1 mt-1 border-zinc-300 px-1 py-2 hover:bg-zinc-200">
                <h3 className="mt-1 border-b border-zinc-300">Manage your business</h3>
            </div>
            <div className="border-1 mt-1 border-zinc-300 p-1 hover:bg-zinc-200">
                <h3 className="mt-1 border-b border-zinc-300">Change Service name</h3>
            </div>
            <div className="border-1 mt-1 border-zinc-300 p-1 hover:bg-zinc-200">
                <h3 className="mt-1 border-b border-zinc-300">Change address</h3>
            </div>
            <div className="border-1 mt-1 border-zinc-300 p-1 hover:bg-zinc-200">
                <h3 className="mt-1 border-b border-zinc-300">Change Admin</h3>
            </div>
            <div className="border-1 mt-1 border-zinc-300 p-1 hover:bg-zinc-200">
                <h3 className="mt-1 border-b border-zinc-300">Manage posts</h3>
            </div>
            <div className="border-1 mt-1 border-zinc-300 p-1 hover:bg-zinc-200">
                <h3 className="mt-1 border-b border-zinc-300">Change profile pic</h3>
            </div>
        </div>
    )
}