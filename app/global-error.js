'use client'
import Link from 'next/link'
import "./globals.css";


export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div className="text-center flex flex-col items-center justify-center min-h-[100vh] bg-gradient-zinc-500 via-gray-200 via-gray-100 to-blue-100">
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
            </body>
        </html>
    )
}