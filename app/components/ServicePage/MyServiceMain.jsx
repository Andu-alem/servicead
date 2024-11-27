'use client'

import { useState, useEffect } from 'react';
import Header from './Header';
import ServiceImage from './ServiceImage';
import ServiceProfileSection from './ServiceProfileSection';
import ProductAndService from './ProductsAndServices';
import Offerings from './Offerings';
import ClientReview from './ClientReview';

import {
    uploadProductsAndService,
    uploadOfferings,
    uploadImages,
    deleteImages
} from '../../../lib/actions';


export default function MyServiceMain({ service, afterRegistration=false }) {
    const { profileImage, serviceName, _id } = service;
    const [images, setImages] = useState([])
    const [editMode, setEditMode] = useState(false);
    const [uploadPending, setUploadPending] = useState(false);
    const [offering, setOffering] = useState('');
    const [productAndService, setProductAndService] = useState({});
    const [uploadedImages, setUploadedImages] = useState([]);
    const [deletedImages, setDeletedImages] = useState([]);

    useEffect(() => {
        if (afterRegistration) {
            setEditMode(true);
        }
        setImages(service.image);
    },[])
    const onSave = async () => {
        // make a post request to the server to upload the data
        const serviceId = {
            id: _id
        }
        try {
            setUploadPending(true);
            if (Object.keys(productAndService).length > 0) {
                const uploadResponse = await uploadProductsAndService(serviceId, productAndService);
                if (!uploadResponse.success) {
                    throw new Error("Error!!");
                }
            }
            if (offering !== "") {
                const offeringUploaded = await uploadOfferings(serviceId, offering);
                if (!offeringUploaded.success) {
                    throw new Error("Error!!");
                }
            }
            if (uploadedImages.length > 0) {
                const formData = new FormData();
                Array.from(uploadedImages).forEach((file) => {
                    formData.append('images',  file);
                });
                const imageUploaded = await uploadImages(serviceId, formData);  
                if (!imageUploaded.success) {
                    throw new Error("Error!!");
                }          
            }
            if (deleteImages.length > 0) {
                const deletionResponse = await deleteImages(serviceId, deleteImages);

                if (!deletionResponse.success) {
                    throw new Error("Error!!");
                } else {
                    setImages(deletionResponse.images)
                }
            }
            setUploadPending(false);
        } catch (e) {

        }
    }

    return (
        <div className="min-h-screen">
            <Header 
                serviceName={serviceName} 
                fromMyservice={ true } 
                editMode={ editMode }
                setEditMode={ setEditMode }
                onSave={ onSave }
                uploadPending={ uploadPending }
            />
            <div className="min-h-[94vh] mx-auto mt-7 bg-zinc-950 flex flex-col-reverse sm:flex-row sm:justify-evenly">
                    <div className="sm:w-[45%] h-[80vh] mt-10">
                        <ServiceImage 
                            profileImage={ profileImage } 
                            images={ images }
                            editMode={ editMode } 
                            setUploadedImages={ setUploadedImages }
                            uploadedImages={ uploadedImages }
                            setDeletedImages={ setDeletedImages }
                            deletedImages={ deletedImages }
                        />
                    </div>
                    <div className="w-full sm:w-[45%] mt-[5vh]">
                        <ServiceProfileSection service={ service } editMode={ editMode } />
                    </div>
            </div>
            <div className="min-h-[94vh] mx-auto bg-blue-100 px-7 sm:px-1 md:px-5 py-12 sm:py-7 sm:p-14">
                <h1 className="text-xl text-center font-bold mt-5">Services & Products</h1>
                <div className="flex flex-col sm:flex-row justify-between mt-10 sm:mt-5">
                    {
                        Array.from(Array(3)).map((_, index) => (
                            <ProductAndService 
                                key={ index } 
                                index={ index }
                                editMode={ editMode }
                                setProductAndService={ setProductAndService }
                                productAndService={ productAndService }
                            />
                        ))
                    }
                </div>
            </div>
            <div className="mx-auto min-h-[94vh] flex flex-col sm:flex-row sm:justify-evenly bg-gray-100">
                <div className="w-full sm:w-5/12 pt-10 px-2 sm:border-r border-zinc-500">
                    <h2 className="text-xl mb-5 font-bold text-center">Our Special Offerings</h2>
                    <Offerings editMode={ editMode } setOffering={ setOffering } />
                </div>
                <div className="w-full sm:w-5/12 pt-10 px-2">
                    <h2 className="text-xl mb-5 font-bold text-center">Client Reviews</h2>
                    <div>
                            {
                                Array.from(Array(3)).map((_, index) => (
                                    <ClientReview key={ index } profileImage={ profileImage } />
                                ))
                            }   
                    </div>
                </div>
            </div>
        </div>       
    )
}