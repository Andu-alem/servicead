'use client'
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal from "./Modal";
import { InputField, TextArea, SelectField } from '../form/Input';
import DataList from '../form/DataList';
import { useServiceContext } from '../../utils/context';
import { updateServices } from '../../../lib/actions';
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";



const schema = yup.object().shape({
    serviceName: yup.string().required("Provider/Comapany name is required"),
    serviceType: yup.string().required("Please select the one of the provided service types"),
    city: yup.string().required("City is required"),
    uniqueaddress: yup.string().required("Please provide your unique address/sefer name"),
    description: yup.string().required("Write a description about your service"),
    category: yup.string().required("Category is required"),
    profilePic: yup
        .mixed()
        .test('fileSize','Image size must be < 1mb', file => {
            if (!file[0]) {
                return true;
            }
            return file[0].size <= 1024 * 1024;
        }),
})

export default function ProfileUpdateModal({ serviceData=null, show=false }) {
    if(!serviceData) return;
    const { data, status, update } = useSession();
    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState('')
    const router = useRouter()
    const { serviceName, serviceType, address:{ city, uniqueaddress }, description, category:{ name:category } } = serviceData
    const methods = useForm({ resolver: yupResolver(schema),
            defaultValues: {
                serviceName,
                serviceType,
                city,
                uniqueaddress,
                description,
                category,
            }
    });
    const [imageSrc, setImageSrc] = useState(null);
    const [newImage, setNewImage] = useState(null);
    const { dispatch } = useServiceContext();

    useEffect(() => {
        const { mimeType, data } = serviceData.profileImage;
        const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''));
        const src = `data:${mimeType};base64,${base64String}`;
        setImageSrc(src);
    },[]);

    const picChangeHandler = (e) => {
        methods.register("profilePic").onChange(e);
        const image = e.target.files[0];
        setNewImage(URL.createObjectURL(image));
    }

    const submitHandler = async (inputData) => {
        setSending(true)
        let userEmail
        let serviceId = serviceData._id
        let formData = new FormData()
        for (let key in inputData) {
            if (key === 'profilePic') {
                if (newImage !== null) {
                    formData.append(key, inputData[key][0])
                }
                break;
            }
            formData.append(key, inputData[key])
        }

        const res = await updateServices(serviceId, formData);

        if (res.success) {
            router.refresh()
            onClose();
        } else {
            setSending(false)
            setSendError('Submition Faild!! please try again')
        }
    }
    const onClose = () => {
        dispatch({
            type: "ToggleProfileEditMode",
            payload: {
                isProfileEditMode: false,
            }
        })
    }

    return (
        <Modal show={ show }>
            <div className="text-lg py-2 flex justify-end font-bold text-red-400">
                <span className="cursor-pointer px-2" onClick={ onClose }>
                    <XMarkIcon className="w-7 h-7 text-red-500" />
                </span>
            </div>
            <FormProvider { ...methods }>
            <div className="h-[85%] text-[15px] flex justify-center">
                <form onSubmit={ methods.handleSubmit(submitHandler) }>
                    <div className="h-[90%] p-5 rounded-lg bg-gray-50 border border-stone-200 overflow-auto scrollbar-hide">
                        <InputField label="Service/Business Name" type="text" name="serviceName" />
                        <DataList label="Your service category" name="category" />
                        <SelectField label="Service/Business type" type="text" name="serviceType" />
                        <InputField label="Address - City" type="text" name="city" />
                        <InputField label="Address unique name/sefer" type="text" name="uniqueaddress" />
                        <TextArea label="Write a detailed description about your service" type="textarea" name="description" />
                        <div className="mx-2">
                            <div>
                                <img className="w-32 h-32 rounded-lg border-2 border-slate-300 m-1" src={ newImage ? newImage : imageSrc } />
                            </div>
                            <div className="mt-1">
                                <label htmlFor="update-image" className="bg-blue-700 cursor-pointer text-white text-[12px] font-medium rounded-lg px-2 py-1">Change Profile Pic</label>
                                <input id="update-image" className="hidden" type="file" accept="image/*" name="profilePic" { ...methods.register("profilePic") } onChange={ picChangeHandler } />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-2">
                        <button className="flex text-[15px] font-medium text-white bg-zinc-700 rounded-lg py-1 px-2 hover:opacity-75 hover:text-white" disabled={sending}>
                            <div className={`${sending ? 'block':'hidden'} animate-spin mt-[3px] mx-1 border-gray-300 bg-white h-[10px] w-[10px] rounded-full border-4 border-t-sky-500 p-[5px]`}></div>
                            Submit
                        </button>
                    </div>
                    <p className="mx-2 mt-1 text-red-500 font-medium">{ sendError }</p>
                </form>
            </div>
        </FormProvider>
        </Modal>
    );
}