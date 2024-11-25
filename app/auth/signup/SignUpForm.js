'use client'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

const schema = yup.object().shape({
    username : yup.string().required("User name is required"),
    email : yup.string().required("Email is required"),
    password : yup.string().required("Password is required").min(4),
    confirm : yup.string().oneOf([yup.ref('password'), null], 'Password must match!'),
})

export default function SignUpForm() {
    const router = useRouter()
    const [sending, setSending] = useState(false)
    const [signUpError, setSignUpError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver : yupResolver(schema) })
    const onSubmit = async (data) => {
        setSending(true)
        setSignUpError('')
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data })
        })

        if (res.ok) {
            try {
                const { email, password } = data
                await signIn('credentials', {
                    email,
                    password,
                    redirect: true,
                    callbackUrl: "/register"
                })
                setSending(false)
            } catch (error) {
                router.push("auth/login")
            }
        } else {
            setSending(false)
            setSignUpError("Error white submition!! Please try again")
        }
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="flex flex-col jusitfy-start">
                <label className="text-zinc-700 text-sm font-medium">
                    User Name
                </label>
                <input 
                    className="border-2 border-gray-300 focus:border-gray-100 p-1 rounded-lg w-[270px] sm:w-[300px] my-1 mx-1" 
                    type="text"
                    name="username"
                    { ...register("username") }
                />
                { errors.userName && <p className="text-sm text-red-700">{ errors.userName.message }</p> }
            </div>
            <div className="flex flex-col jusitfy-start">
                <label className="text-zinc-700 text-sm font-medium">
                    Email
                </label>
                <input 
                    className="border-2 border-gray-300 focus:border-gray-100 p-1 rounded-lg w-[270px] sm:w-[300px] my-1 mx-1" 
                    type="email"
                    name="email"
                    { ...register("email") }
                />
                { errors.email && <p className="text-sm text-red-700">{ errors.email.message }</p> }
            </div>
            <div className="flex flex-col jusitfy-start">
                <label className="text-zinc-700 text-sm font-medium">
                    Password
                </label>
                <input 
                    className="border-2 border-gray-300 focus:border-gray-100 p-1 rounded-lg w-[270px] sm:w-[300px] my-1 mx-1" 
                    type="password"
                    name="password"
                    autoComplete="false"
                    { ...register("password") }
                />
                { errors.password && <p className="text-sm text-red-700">{ errors.password.message }</p> }
            </div>
            <div className="flex flex-col jusitfy-start">
                <label className="text-zinc-700 text-sm font-medium">
                    Confirm
                </label>
                <input 
                    className="border-2 border-gray-300 focus:border-gray-100 p-1 rounded-lg w-[270px] sm:w-[300px] my-1 mx-1" 
                    type="password"
                    name="confirm"
                    autoComplete="false"
                    { ...register("confirm") }
                />
                { errors.confirm && <p className="text-sm text-red-700">{ errors.confirm.message }</p> }
            </div>
            <div className="flex flex-col justify-center items-center mt-2">
                <button className="flex mx-10 text-sm text-white bg-zinc-700 rounded-lg py-1 px-2 hover:opacity-75 hover:text-white" disabled={sending}>
                    <div className={`${sending ? 'block':'hidden'} animate-spin mt-[3px] mx-1 border-gray-300 bg-white h-[10px] w-[10px] rounded-full border-4 border-t-sky-500 p-[5px]`}></div>
                    SignUp
                </button>
                <p className="mt-2 font-medium">Have an account ? <Link className="text-sky-500" href="/auth/login" >Log in</Link> </p>
            </div>
            <p className="font-medium text-red-400 mx-[10%]">{ signUpError }</p>
        </form>
    )
}