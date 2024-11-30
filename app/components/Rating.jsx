'use client'
import { useState, useEffect } from 'react';
import StarIcon from '@heroicons/react/24/solid/StarIcon';

export default function Rating() {
    const [rate, setRate] = useState(0);
    useEffect(() => {
        const randomRate = Math.ceil((Math.random() * 4)+1);
        setRate(randomRate);
    },[])
        
    return (
        <div className="flex">
            {
                Array.from(Array(5)).map((item, index) => {
                    return (
                        <div key={ index } className={(index+1) < rate ? "text-amber-500" : "text-zinc-300" }>
                            <StarIcon className="w-4 h-4" />
                        </div>
                    )
                })
            }
        </div>
    );
}