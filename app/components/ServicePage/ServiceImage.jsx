'use client'
import { useState } from 'react';
import Image from 'next/image';
import ImagesCarousel from './ImagesCarousel';
import DisplayImage from './DisplayImage';
import DisplayImageInEdit from './DisplayImageInEdit';

export default function ServiceImage ({ profileImage, images=[], editMode=false, uploadedImages=[], setUploadedImages, deletedImages, setDeletedImages }) {
    const { mimeType, data } = profileImage;
    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''));
    const src = `data:${mimeType};base64,${base64String}`;

    return (
        <div className="h-full w-full mt-4">
            {
                editMode ? (
                    <DisplayImageInEdit 
                        src={ src } 
                        images={ images } 
                        uploadedImages={ uploadedImages } 
                        setUploadedImages={ setUploadedImages }
                        deletedImages={ deletedImages }
                        setDeletedImages={ setDeletedImages }
                    />
                ) : (
                    <DisplayImage src={ src } images={ images } />
                )
            }
        </div>
    );
}