'use client'
import Link from 'next/link'

export default function Error({ error, reset }) {
    return (
        <div className="text-center flex flex-col justify-center items-center min-h-[100vh]">
            <h2 className="text-3xl text-stone-700 font-bold my-2">Oops!</h2>
            <h2 className="text-xl text-zinc-500 font-bold">Something went wrong!</h2>
            <div className="flex mt-5 justify-center">
                <button
                    className="text-stone-500 font-medium bg-zinc-100 px-2 mx-2 hover:bg-zinc-300 rounded-md"
                    onClick={ 
                        () => reset()
                    }
                > Try again </button>
                <div className="mx-4 text-sm font-medium text-zinc-500">
                    or Back to <Link className="text-sky-500 text-lg font-bold bg-zinc-100 hover:bg-zinc-500 rounded-md p-1" href="/">Home</Link>
                </div>
            </div>
        </div>
    )
}