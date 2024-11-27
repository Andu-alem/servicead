import { NextResponse } from 'next/server'
import connect from '../../../../lib/db-connector'
import Service from '../../../../models/Service'
import User from '../../../../models/User'


export async function GET (req) {
    let email, path, user_id
    const { pathname } = new URL(req.url)
    const id = pathname.split('/')[3]
    
    if (id.includes('myservice')) {
        [path, email] = id.split('-')
    }
    try {
        await connect()
        if (email !== undefined) {
            const user = await User.findOne({ email: email })
            user_id = user._id
        }
        const searchParam = email === undefined ? { _id: id } : { user: user_id }
        const service = await Service.findOne(searchParam).populate('category').populate('profileImage').populate('images')

        return NextResponse.json({
            service
        }) 
    } catch (error) {
        
        return NextResponse.json({ message: "failed" })
    }
}