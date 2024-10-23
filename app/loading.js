import Image from 'next/image';

export default function Loading() {
    return (
        <div className="mx-[20vw] mt-[35vh]">
            <Image className="mx-[42%] md:mx-[45%]" src="/logo.png" width={75} height={75} alt="logo" priority={true} />
            <div className="flex justify-center mt-2">
                <div className="animate-pulse mx-1 rounded-full bg-amber-500 h-4 w-4"></div>
                <div className="animate-pulse mx-1 rounded-full bg-amber-200 h-4 w-4"></div>
                <div className="animate-pulse mx-1 rounded-full bg-amber-400 h-4 w-4"></div>
            </div>
            <h2 className="text-center text-sky-500 mt-2 text-lg font-bold">Loading</h2>
        </div>
    )
}