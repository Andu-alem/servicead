'use client'
import { useSession } from "next-auth/react"
import { useForm, FormProvider } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { InputField, TextArea } from './components/Input'
import DataList from './components/DataList'
import { useState } from 'react'


const schema = yup.object().shape({
    name: yup.string().required("Provider/Comapany name is required"),
    focusarea: yup.string().required("Please enter the area your service focuses on"),
    city: yup.string().required("City is required"),
    uniqueaddress: yup.string().required("Please provide your unique address/sefer name"),
    description: yup.string().required("Write a description about your service"),
    catagory: yup.string().required("Catagory is required"),
    image: yup
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
            formData.append(key, key === 'image' ? inputData[key][0]:inputData[key])
        }
        formData.append('email', userEmail) 
        const res = await fetch('/api/services', {
            method: 'POST',
            body: formData
        })

        if (res.ok) {
            await update({hasService: true})
            router.push('/')
        } else {
            setSending(false)
            setSendError('Submition Faild!! please try again')
        }
    }
    return (
        <FormProvider { ...methods }>
            <div className="mt-3 sm:mt-2 mx-[7%] md:mx-[15%] lg:mx-[20%]">
                <h1 className="text-zinc-700 font-medium">Fill out the form below to register your service to the system</h1>
            </div>
            <div className="mt-2 sm:mt-4 mx-[2%] sm:mx-[10%] md:mx-[15%] lg:mx-[20%] mb-5 px-[5%] sm:px-[3%] md:px-[5%] lg:[12%] py-4 sm:py-7 border border-gray-100 shadow-md shadow-gray-200">
                <form onSubmit={ methods.handleSubmit(submitHandler) }>
                    <DataList label="What is your service catagory" name="catagory" />
                    <InputField label="Business Name" type="text" name="name" />
                    <InputField label="What is your focus area" type="text" name="focusarea" />
                    <InputField label="Address - City" type="text" name="city" />
                    <InputField label="Address unique name/sefer" type="text" name="uniqueaddress" />
                    <TextArea label="Brief description of your offering" type="textarea" name="description" />
                    <InputField label="Upload Profilpic" type="file" name="image" />
                    <div className="mx-[30%] flex justify-around">
                        <button className="flex text-sm text-green-500 outline outline-green-500 rounded-lg py-1 px-2 hover:bg-green-500 hover:text-white" disabled={sending}>
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