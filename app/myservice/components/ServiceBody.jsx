'use client'
import Header from '../../components/Header'
import ServiceImage from './../../components/ServiceImag';
import ServiceDetail from './../../components/ServiceDetail';
import ProductAndService from '../../components/ProductsAndServices';
import Offerings from './../../components/Offerings';
import ClientReview from './../../components/ClientReview';
import { useState, useEffect } from 'react';


export default function MyService({ service, afterRegistration=false }) {
    const { address, image, servicename, catagory, focusarea, description } = service
    const [editMode, setEditMode] = useState(false);
    const [offering, setOffering] = useState('');
    const [productAndService, setProductAndService] = useState({});
    const [uploadedImages, setUploadedImages] = useState([]);

    useEffect(() => {
        if (afterRegistration) {
            setEditMode(true);
        }
    },[])
    const onSave = () => {
        const data = {
            pAndS: productAndService,
            offering: offering,
            uploadedImages: uploadedImages
        }
        // make a post request to the server to upload the data
        console.log("Data to be sent to the server", data)
    }

    return (
        <div className="min-h-screen">
            <Header 
                servicename={servicename} 
                fromMyservice={ true } 
                editMode={ editMode }
                setEditMode={ setEditMode }
                onSave={ onSave }
            />
            <div className="min-h-[94vh] mx-auto mt-7 bg-zinc-950 flex flex-col-reverse sm:flex-row sm:justify-evenly">
                    <div className="sm:w-[45%] h-[80vh] mt-10">
                        <ServiceImage 
                            image={ image } 
                            editMode={ editMode } 
                            setUploadedImages={ setUploadedImages }
                            uploadedImages={ uploadedImages }
                        />
                    </div>
                    <div className="w-full sm:w-[45%] mt-[5vh]">
                        <ServiceDetail service={ service } editMode={ editMode } />
                    </div>
            </div>
            <div className="min-h-[94vh] mx-auto bg-blue-100 px-7 sm:px-1 md:px-5 py-12 sm:py-7 sm:p-14">
                <h1 className="text-2xl text-center font-bold">Services & Products</h1>
                <div className="flex flex-col sm:flex-row justify-between mt-2 sm:mt-5">
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
                    <h2 className="text-2xl mb-2 font-bold text-center">Our Offerings</h2>
                    <Offerings editMode={ editMode } setOffering={ setOffering } />
                </div>
                <div className="w-full sm:w-5/12 pt-10 px-2 text-sm">
                    <h2 className="text-2xl mb-2 font-bold text-center">Client Reviews</h2>
                    <div>
                            {
                                Array.from(Array(3)).map((_, index) => (
                                    <ClientReview key={ index } image={ image } />
                                ))
                            }   
                    </div>
                </div>
            </div>
        </div>       
    )
}