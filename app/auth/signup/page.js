"use client"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import SignUpForm from './SignUpForm'


export default function SignUp() {
    const { status } = useSession()
    const router = useRouter()

    if (status === "authenticated") {
        router.push("/")
        router.refresh()
    }
    return (
        <div className="flex flex-col jusitfy-center items-center w-10/12 sm:w-7/12 md:w-[40%] mx-auto px-10 py-7 border border-gray-100 shadow-sm shadow-zinc-200">
            <SignUpForm />
        </div>
    )
}