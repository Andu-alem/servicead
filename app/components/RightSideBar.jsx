import Image from 'next/image'
import Link from 'next/link'

export default function RightSideBar() {
    return (
        <div className="hidden md:block md:fixed text-lg mx-4">
            <div className="mt-14">
                <div className="text-zinc-700 font-medium mb-10">
                    What service do you offer? <br/>
                    Make your service available..
                </div>
                <Link href="/register" className="py-1 px-2 mt-2 ml-[15px] bg-sky-500 rounded-lg text-white">Register</Link>
            </div>
        </div>
    )
}