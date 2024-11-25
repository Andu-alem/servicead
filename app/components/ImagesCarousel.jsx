'use client'
import { useState, useEffect } from 'react';
import ChevronLeftIcon from '@heroicons/react/24/solid/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';

export default function Carousel({ uploadedImages }) {
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
        let blobs = [];
        for (let i = 0; i < uploadedImages.length; i++) {
            let file = uploadedImages[i];
            blobs.push(URL.createObjectURL(file))         
        }
        setImages(blobs);
    },[]);

    const onNext = () => {
        if (index == images.length - 1) {
            setIndex(0);
        } else {
            setIndex(index+1);
        }
    }
    const onPrev = () => {
        if (index == 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index-1);
        }
    }

    return (
        <div className="w-full h-[72vh]">
            <img className="w-full h-[70vh]" src={ images[index] } alt=""/>
            <div className="flex justify-between -mt-[37vh]">
                <ChevronLeftIcon className="w-5 h-5 backdrop-blur-xl text-white cursor-pointer" onClick={ onPrev }/>
                <ChevronRightIcon className="w-5 h-5 backdrop-blur-xl text-white cursor-pointer" onClick={ onNext }/>
            </div>
        </div>
    );
}