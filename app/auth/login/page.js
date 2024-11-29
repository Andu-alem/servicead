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
        <div className="flex flex-col jusitfy-center items-center w-11/12 mx-auto sm:w-7/12 md:w-[45%] px-7 py-7 bg-gray-100 border border-gray-200 shadow-md shadow-zinc-200">
            <LoginForm />
        </div>
    )
}