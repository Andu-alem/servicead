'use client'
import { useState } from 'react'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { signIn } from "next-auth/react"
import Link from 'next/link'

const schema = yup.object().shape({
    email : yup.string().required("Email is required"),
    password : yup.string().required("Please enter your password").min(4)
})

export default function LogInForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver : yupResolver(schema) })
    const router = useRouter()
    const [sending, setSending] = useState()
    const [logInError, setLogInError] = useState('')

    const onSubmit = async (data) => {
        setSending(true)
        setLogInError('')
        const { email, password } = data
        try {
            const res = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })
            if (!res.ok) {
                setLogInError('Log in failed, try again!')
            } else {
                router.push('/services')
            }
        } catch (error) {
            setSending(false)
            setLogInError('Log in failed, try again!')
        }
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <p className="font-medium text-red-400 mx-[7%]">{ logInError }</p>
            <div className="my-1 md:flex">
                <label className="text-zinc-500 font-medium my-2 md:mx-2">
                    Email
                </label>
                <input 
                    className="border-2 border-gray-300 focus:border-gray-100 p-1 rounded-lg w-[270px] sm:w-[300px] my-2 mx-1" 
                    type="email"
                    name="email"
                    { ...register("email") }
                />
                { errors.email && <p className="text-sm text-red-700">{ errors.email.message }</p> }
            </div>
            <div className="my-1 md:flex">
                <label className="text-zinc-500 font-medium my-2 md:mx-2">
                    Password
                </label>
                <input 
                    autoComplete="false"
                    className="border-2 border-gray-300 focus:border-gray-100 p-1 rounded-lg w-[270px] sm:w-[300px] my-2 mx-1" 
                    type="password"
                    name="password"
                    { ...register("password") }
                />
                { errors.password && <p className="text-sm text-red-700">{ errors.password.message }</p> }
            </div>
            <div className="mx-[20%] sm:mx-[27%]">
                <button className="flex mx-5 text-sm text-amber-500 outline outline-amber-500 rounded-lg py-1 px-2 hover:bg-amber-500 hover:text-white" disabled={sending}>
                    <div className={`${sending ? 'block':'hidden'} animate-spin mt-[3px] mx-1 border-gray-300 bg-white h-[10px] w-[10px] rounded-full border-4 border-t-sky-500 p-[5px]`}></div>
                    LogIn
                </button>
                <p className="mt-2 font-medium">New ? <Link className="text-sky-500" href="/auth/signup" >Sign up</Link> </p>
            </div>
        </form>
    )
}