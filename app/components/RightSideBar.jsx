import Image from 'next/image'
import Link from 'next/link'

export default function RightSideBar() {
    return (
        <div className="fixed mx-4">
            <div className="mt-14">
                <div className="text-2xl text-zinc-700 mb-10">
                    What service do you offer? <br/>
                    Make your service available..
                </div>
                <Link href="/register" className="p-2 mt-2 ml-[15px] bg-sky-500 rounded-lg text-lg text-white">Register</Link>
            </div>
        </div>
    )
}