'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from './Header';
import ServiceImage from './ServiceImage';
import ServiceProfileSection from './ServiceProfileSection';
import ProductAndService from './ProductsAndServices';
import Offerings from './Offerings';
import ClientReview from './ClientReview';
import ProfileUpdateForm from './ProfileUpdateForm';
import { useServiceContext } from '../../utils/context';

import {
    uploadProductsAndService,
    uploadOfferings,
    uploadImages,
    deleteImages
} from '../../../lib/actions';


export default function MyServiceMain({ service, afterRegistration=false }) {
    const router = useRouter();
    const { state, dispatch } = useServiceContext();
    const { profileImage, serviceName, _id, productsAndServices, offering } = service;
    const [images, setImages] = useState([]);
    const { uploadedImages, deletedImages } = state;
    const [error, setError] = useState({});
    const [success, setSuccess] = useState({});

    useEffect(() => {
        if (afterRegistration) {
            dispatch({
                type: "TogglePageEditMode",
                payload: true,
            });
        }
        setImages(service.image);
    },[])
    const uploadChanges = async () => {
        // make a post request to the server to upload the data
        const serviceId = {
            id: _id
        }
        try {
            dispatch({
                type: "ToggleUploadPending",
                payload: {
                    isUploadPending: true,
                }
            });
            if (Object.keys(state.productAndServices).length > 0) {
                const uploadResponse = await uploadProductsAndService(serviceId, state.productAndServices);
                if (!uploadResponse.success) {
                    setError({ products: true })
                    throw new Error("Error!!");
                }
                setSuccess({ products: true })
            }
            if (offering !== "") {
                const offeringUploaded = await uploadOfferings(serviceId, state.offering);
                if (!offeringUploaded.success) {
                    setError({ offering:true })
                    throw new Error("Error!!");
                }
                setSuccess({ offering:true })
            }
            if (uploadedImages.length > 0) {
                const formData = new FormData();
                Array.from(uploadedImages).forEach((file) => {
                    formData.append('images',  file);
                });
                const imageUploaded = await uploadImages(serviceId, formData);  
                if (!imageUploaded.success) {
                    setError({ image:true });
                    throw new Error("Error!!");
                }        
                setSuccess({ image:true });  
            }
            if (deleteImages.length > 0) {
                const deletionResponse = await deleteImages(serviceId, deleteImages);

                if (!deletionResponse.success) {
                    throw new Error("Error!!");
                } else {
                    setImages(deletionResponse.images)
                }
            }
            dispatch({
                type: "ToggleUploadPending",
                payload: {
                    isUploadPending: false,
                }
            });
            setTimeout(() => {
                router.refresh()
            }, 5000);
        } catch (e) {
            dispatch({
                type: "ToggleUploadPending",
                payload: {
                    isUploadPending: false,
                }
            });
        }
    }

    return (
        <div className="min-h-screen">
            <Header  
                fromMyservice={ true } 
                uploadChanges={ uploadChanges }
            />
            <ProfileUpdateForm show={ state.profileEditMode } serviceData={ service } />
            <div className="min-h-[94vh] mx-auto mt-14 bg-zinc-950 flex flex-col-reverse sm:flex-row sm:justify-evenly">
                    <div className="sm:w-[45%] h-[80vh] mt-10">
                        <ServiceImage 
                            profileImage={ profileImage } 
                            images={ images }
                        />
                        { error.image && (<div className="bg-red-500 w-full rounded-lg text-white text-center">Error while uploading images. Please try again!!!</div>) }
                        { success.image && (<div className="bg-green-400 w-full rounded-lg text-white text-center">Image uploaded successfully!</div>) }
                    </div>
                    <div className="w-full sm:w-[45%] mt-[5vh]">
                        <ServiceProfileSection service={ service } />
                    </div>
            </div>
            <div className="min-h-[94vh] mx-auto bg-blue-100 px-3 sm:px-1 md:px-5 py-12 sm:py-7 sm:p-14">
                <ProductAndService productsAndServices={ productsAndServices }/>
                { error.products && (<div className="bg-red-500 w-full rounded-lg text-white text-center">Error while updating products. Please try again!!!</div>) }
                { success.products && (<div className="bg-green-400 w-full rounded-lg text-white text-center">Products updated successfully!</div>) }
            </div>
            <div className="mx-auto min-h-[94vh] flex flex-col sm:flex-row sm:justify-evenly bg-gray-100">
                <div className="w-full sm:w-5/12 pt-10 px-2 sm:border-r border-zinc-500">
                    <h2 className="text-xl mb-5 font-bold text-center">Our Special Offerings</h2>
                    <Offerings fetchedOffering={ offering } />
                    { error.offering && (<div className="bg-red-500 w-full rounded-lg text-white text-center">Error while updating offerings. Please try again!!!</div>) }
                    { success.offering && (<div className="bg-green-400 w-full rounded-lg text-white text-center">Offering updated successfully!</div>) }
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