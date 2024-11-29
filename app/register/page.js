'use client'
import { useSession } from "next-auth/react"
import { useForm, FormProvider } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { InputField, TextArea, SelectField } from '../components/form/Input';
import DataList from '../components/form/DataList';
import { useState } from 'react'


const schema = yup.object().shape({
    serviceName: yup.string().required("Provider/Comapany name is required"),
    serviceType: yup.string().required("Please select the one of the provided service types"),
    city: yup.string().required("City is required"),
    uniqueaddress: yup.string().required("Please provide your unique address/sefer name"),
    description: yup.string().required("Write a description about your service"),
    category: yup.string().required("Category is required"),
    profilePic: yup
        .mixed()
        .required("Please upload profile pic")
        .test('fileSize','Image size must be < 1mb', file => file[0].size <= 1024 * 1024)
        .test('fileType','Only JPG, JPEG, or PNG files are allowed', (value) => {
            if(!value) return true
            const fileType = value[0].type
            return ['image/jpeg', 'image/png', 'image/jpg'].includes(fileType)
        }),
})

export default function RegistrationForm() {
    const { data, status, update } = useSession()
    const [sending, setSending] = useState(false)
    const [sendError, setSendError] = useState('')
    const router = useRouter()
    const methods = useForm({ resolver: yupResolver(schema) })
    const submitHandler = async (inputData) => {
        setSending(true)
        let userEmail
        if (status === 'authenticated') {
            userEmail = data.user.email
        }
        let formData = new FormData()
        for (let key in inputData) {
            formData.append(key, key === 'profilePic' ? inputData[key][0]:inputData[key])
        }
        formData.append('email', userEmail)
        const res = await fetch('/api/services', {
            method: 'POST',
            body: formData
        })

        if (res.ok) {
            await update({hasService: true})
            router.push('/myservice/edit')
        } else {
            setSending(false)
            setSendError('Submition Faild!! please try again')
        }
    }
    return (
        <FormProvider { ...methods }>
            <div className="mt-3">
                <h1 className="text-zinc-700 text-sm font-medium">Fill out the form below to register your service to the system</h1>
            </div>
            <div className="mt-2 sm:mt-4 mb-5 flex justify-center w-11/12 sm:w-9/12 md:w-7/12 lg:w-7/12 px-[2%] py-4 sm:py-7 border border-gray-300 bg-gray-50 shadow-md shadow-gray-200">
                <form onSubmit={ methods.handleSubmit(submitHandler) }>
                    <InputField label="Service/Business Name" type="text" name="serviceName" />
                    <DataList label="Your service category" name="category" />
                    <SelectField label="Service/Business type" type="text" name="serviceType" />
                    <InputField label="Address - City" type="text" name="city" />
                    <InputField label="Address unique name/sefer" type="text" name="uniqueaddress" />
                    <TextArea label="Write a detailed description about your service" type="textarea" name="description" />
                    <InputField label="Profile picture or Logo for your service" type="file" name="profilePic" />
                    <div className="flex justify-center">
                        <button className="flex text-sm text-white bg-zinc-700 rounded-lg py-1 px-2 hover:opacity-75 hover:text-white" disabled={sending}>
                            <div className={`${sending ? 'block':'hidden'} animate-spin mt-[3px] mx-1 border-gray-300 bg-white h-[10px] w-[10px] rounded-full border-4 border-t-sky-500 p-[5px]`}></div>
                            Submit
                        </button>
                    </div>
                    <p className="mx-2 mt-1 text-red-400 text-lg font-medium">{ sendError }</p>
                </form>
            </div>
        </FormProvider>
    )
}