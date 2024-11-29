'use client'
import { useState, useEffect } from 'react';
import StarIcon from '@heroicons/react/24/solid/StarIcon';

export default function Rating({ rate=null }) {
    const [serviceRate, setRate] = useState(1);
    
    useEffect(() => {
        let rating = rate || Math.ceil((Math.random() * 4)+1);//set random rating out of 5 if rate is not proviced
        setRate(rating);
    },[rate])
    return (
        <div className="flex">
            {
                Array.from(Array(5)).map((item, index) => {
                    return (
                        <div key={ index } className={(index+1) < serviceRate ? "text-amber-500" : "text-zinc-300" }>
                            <StarIcon className="w-4 h-4" />
                        </div>
                    )
                })
            }
        </div>
    );
}