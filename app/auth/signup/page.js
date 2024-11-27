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
        <div className="flex jusitfy-center items-center w-11/12 mx-auto sm:w-7/12 md:w-[45%] px-10 py-7 bg-gray-100 border border-gray-200 shadow-md shadow-zinc-200">
            <SignUpForm />
        </div>
    )
}