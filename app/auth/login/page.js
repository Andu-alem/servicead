"use client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import LoginForm from "./LoginForm"


export default function LogInForm() {
    const { status } = useSession()
    if (status==="authenticated") {
        redirect("/services")
    }
    return (
        <div className="mt-5 mx-[5%] sm:mx-[10%] md:mx-[15%] lg:mx-[20%] mb-5 px-[5%] sm:px-[3%] md:px-[5%] lg:[12%] py-4 sm:py-7 bg-gray-50 border border-zinc-200 shadow-md shadow-zinc-200">
            <LoginForm />
        </div>
    )
}