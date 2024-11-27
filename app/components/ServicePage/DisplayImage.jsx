'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImagesCarousel from './ImagesCarousel';

export default function DisplayImage({ images=[], src }) {
    const [imageSources, setSources] = useState([]);
    useEffect(() => {
        let sources = [];
        if (images.length > 0) {
            images.forEach((image) => {
                const { mimeType, data } = image;
                const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''));
                const source = `data:${mimeType};base64,${base64String}`;
                sources.push(source);
            })
        }
        setSources(sources);
    },[images]);
    return (
        <>
            {
                images.length > 1 ? (
                    <ImagesCarousel images={ imageSources } fromServer={ true } />
                ) : (
                    <Image 
                        src={ src } 
                        className="w-full h-full rounded-lg opacity-100"
                        width="170"
                        height="100" 
                        alt="profile pic"
                    />
                )
            }
        </>
    );
}