import Image from 'next/image';

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[100vh] bg-gradient-to-b from-sky-300 via-gray-200 via-gray-300">
            <Image className="" src="/logo.png" width={120} height={120} alt="logo" priority={true} />
            <div className="flex justify-center mt-2">
                <div className="animate-pulse mx-1 rounded-full bg-rose-500 h-3 w-3"></div>
                <div className="animate-pulse mx-1 rounded-full bg-red-400 h-3 w-3"></div>
                <div className="animate-pulse mx-1 rounded-full bg-blue-300 h-3 w-3"></div>
                <div className="animate-pulse mx-1 rounded-full bg-red-400 h-3 w-3"></div>
                <div className="animate-pulse mx-1 rounded-full bg-rose-500 h-3 w-3"></div>
            </div>
            <span className="text-center text-zinc-700 mt-2 text-xl font-bold">Loading</span>
        </div>
    )
}