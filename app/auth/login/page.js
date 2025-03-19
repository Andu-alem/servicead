"use client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import LoginForm from "./LoginForm"


export default function LogInForm() {
    const { status } = useSession()
    if (status==="authenticated") {
        redirect("/")
    }
    return (
        <div className="flex flex-col jusitfy-center items-center w-10/12 sm:w-7/12 md:w-[40%] mx-auto px-7 py-7 border border-gray-50 shadow-md rounded-lg">
            <LoginForm />
        </div>
    )
}