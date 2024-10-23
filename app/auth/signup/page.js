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
        <div className="mt-5 mx-[3%] sm:mx-[10%] sm:mx-[10%] md:mx-[15%] lg:mx-[20%] mb-5 px-[5%] sm:px-[3%] md:px-[5%] lg:[12%] py-4 sm:py-7 bg-gray-50 border border-gray-200 shadow-md shadow-zinc-200">
            <SignUpForm />
        </div>
    )
}