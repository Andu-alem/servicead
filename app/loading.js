import Image from 'next/image';

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[100vh] bg-gray-50">
            <Image className="" src="/logo.png" width={75} height={75} alt="logo" priority={true} />
            <div className="flex justify-center mt-2">
                <div className="animate-pulse mx-1 rounded-full bg-rose-500 h-2 w-2"></div>
                <div className="animate-pulse mx-1 rounded-full bg-red-400 h-2 w-2"></div>
                <div className="animate-pulse mx-1 rounded-full bg-blue-200 h-2 w-2"></div>
                <div className="animate-pulse mx-1 rounded-full bg-red-400 h-2 w-2"></div>
                <div className="animate-pulse mx-1 rounded-full bg-rose-500 h-2 w-2"></div>
            </div>
            <span className="text-center text-zinc-700 mt-2 text-sm font-bold">Loading</span>
        </div>
    )
}