import connect from '../../../lib/db-connector'
import User from '../../../models/User'
import { NextResponse } from 'next/server'


export async function POST (req) {
    try {
        await connect()
        const reqBody = await req.json()
        const { username, email, password } = reqBody
        const user = await User.findOne({email: email})
        if (user) {
            return NextResponse.json({ error: "already exist"})
        }
        const newUser = new User({ username, email, password })  
        const saved = await newUser.save() 

        return NextResponse.json({ message: "user registerd", saved})
    } catch (error) {

        return NextResponse.json({ error: error.message}, { status: 500})
    }
}