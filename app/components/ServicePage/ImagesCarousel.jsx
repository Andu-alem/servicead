'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ChevronLeftIcon from '@heroicons/react/24/solid/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';
import { useServiceContext } from '../../utils/context';


export default function ImagesCarousel({ images }) {
    if (images.length < 1) return;    
    const [index, setIndex] = useState(0);    
    const { state } = useServiceContext();
    const editMode = state.pageEditMode || state.profileEditMode;


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
        <div className="w-full h-[72vh] relative -z-5">
            <div className="w-full h-[70vh] absolute">
                <Image className={ editMode ? "opacity-20":"opacity-100 rounded-lg" } src={ images[index] } fill={ true } alt="service-images" />
            </div>
            <div className="flex justify-between w-full absolute top-[33vh]">
                <ChevronLeftIcon className="w-7 h-7 backdrop-blur-2xl border border-slate-300 text-white cursor-pointer" onClick={ onPrev }/>
                <ChevronRightIcon className="w-7 h-7 backdrop-blur-2xl border border-slate-300 text-white cursor-pointer" onClick={ onNext }/>
            </div>
        </div>
    );
}