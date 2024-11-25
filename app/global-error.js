'use client'
import Link from 'next/link'
import "./globals.css";


export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div className="text-center mt-[20vh]">
                    <h2 className="text-2xl text-zinc-500 font-medium">Ops! Something went wrong!</h2>
                    <div className="flex mt-2">
                        <button
                            onClick={ 
                                () => reset()
                            }
                        > Try again </button>
                        <div className="flex justfy-center">
                            Back to <Link className="text-sky-500" href="/">Home</Link>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}