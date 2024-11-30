'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageUploadModal from './ImageUploadModal';
import ImagesCarousel from './ImagesCarousel';
import { useServiceContext } from '../../utils/context';


export default function DisplayImageInEdit({ images=[], src, profileImageId }) {
    const [showModal, setShowModal] = useState(false);
    const [imageSources, setImageSources] = useState([]);
    const { state } = useServiceContext();
    const { deletedImages, uploadedImages } = state;
    
    useEffect(() => {
        const sources = [];
        if (images.length > 0) {
            const filterdImages = images.filter((image) => !deletedImages.includes(image._id));
            if (filterdImages.length > 0) {
                filterdImages.forEach((image) => {
                    const { mimeType, data } = image;
                    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''));
                    const source = `data:${mimeType};base64,${base64String}`;
                    sources.push(source)
                });
            }
        }
        if (uploadedImages.length > 0) {
            Array.from(uploadedImages).forEach((image) => {
                sources.push(URL.createObjectURL(image));
            });
        }

        setImageSources(sources);
    },[uploadedImages, deletedImages, images]);

    return (
        <>
            <h2 
                className="text-white text-[15px] mx-auto rounded-lg py-1 font-medium text-sm bg-blue-700 text-center cursor-pointer"
                onClick={ () => setShowModal(true) }
            >Upload Images <br/> that magnifies your service/business</h2>
            {
                imageSources.length > 1 ? (
                    <ImagesCarousel images={ imageSources } />
                ) : (
                    <Image 
                        src={ src } 
                        className="w-full h-full rounded-lg opacity-10" 
                        width="170"
                        height="100" 
                        alt="profile pic"
                    />
                )
            }
            <ImageUploadModal 
                showModal={ showModal } 
                setShowModal={ setShowModal } 
                fetchedImages={ images }
                profileImageId={ profileImageId }
            />
        </>
    );
}