'use client'
import { useState } from 'react';
import ImageUploadModal from './ImageUploadModal';
import Image from 'next/image';
import Carousel from './ImagesCarousel';

export default function ServiceImage ({ image, editMode=false, uploadedImages, setUploadedImages }) {
    const [showModal, setShowModal] = useState(false);
    const { type, data } = image
    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''))

    return (
        <div className="h-full w-full mt-4">
            {
                editMode && (<h2 
                    className="text-white mx-auto rounded-lg py-1 font-medium text-sm bg-blue-700 text-center cursor-pointer"
                    onClick={ () => setShowModal(true) }
                >Upload Images <br/> that magnifies your service/business</h2>)
            }
            {
                uploadedImages.length < 1 ? (
                    <Image 
                        className={`w-full h-full rounded-lg ${ editMode ? 'opacity-10' : 'opacity-100' }`} 
                        src={`data:${type};base64,${base64String}`} 
                        width="170"
                        height="100" 
                        alt="profile pic"
                    />
                ):(
                    <Carousel uploadedImages={ uploadedImages } />
                )
            }
            <ImageUploadModal 
                showModal={ showModal } 
                setShowModal={ setShowModal } 
                setUploadedImages={ setUploadedImages }
            />
        </div>
    );
}