'use client'
import Link from 'next/link'

export default function Error({ error, reset }) {
    return (
        <div className="text-center max-h-[100vh] mt-[24vh]">
            <h2 className="text-[100px] text-zinc-500 font-medium">500</h2>
            <h3 className="text-2xl text-gray-700 font-medium">Internal server error</h3>
            <div className="pt-5 mx-4 text-sm font-bold text-zinc-700">
                Back to <Link className="text-sky-700 text-lg bg-zinc-100 hover:bg-zinc-200 rounded-md p-1" href="/">Home</Link>
            </div>
        </div>
    )
}