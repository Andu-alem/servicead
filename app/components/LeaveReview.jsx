'use client'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import StarIcon from '@heroicons/react/24/solid/StarIcon';


export default function LeaveReaview () {
    const { status, data } = useSession();
    const [rate, setRate] = useState(0);
    const rateHandler = (index) => {
        setRate(index);
    }
    return (
        <div className="ml-5 my-5">
            <textarea 
                className="resize-none w-[75%] p-2 border border-stone-300 rounded-lg"
                rows="5"
            />
            <div className="flex">
                {
                    Array.from(Array(5)).map((item, index) => {
                        return (
                            <span key={ index } className={ index <= rate ? "text-amber-500" : "text-zinc-400" } onClick={ () => rateHandler(index) }>
                                <StarIcon className="w-4 h-4" />
                            </span>
                        )
                        })
                }
            </div>
            <button
                className="bg-blue-400 rounded-lg px-2 my-2 text-white font-bold text-[15px]"
            >{ status === 'authenticated' ? "Leave A review" : "Sign-up to leave a review" }</button>
        </div>
    );
}