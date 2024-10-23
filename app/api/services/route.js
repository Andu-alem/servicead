import { NextResponse } from 'next/server'
import connect from '../../../lib/db-connector'
import Service from '../../../models/Service'
import User from '../../../models/User'

export const config = {
    api: {
        bodyParser : false
    }
}

export async function GET (req) {
    const { searchParams } = new URL(req.url)
    try {
        await connect()
        const services = await Service.find()

        let catagories = []
        let data = {}

        for(let service of services) {
            let cat = service.catagory.toLowerCase()
            if (catagories.indexOf(cat) === -1) {
                catagories.push(cat)
            }
            data = {
                ...data,
                [cat] : data[cat] !== undefined ? [...data[cat], service]:[service]
            }
        }


        return NextResponse.json({
            catagories,
            services: data
        }) 
    } catch (error) {
        
        return NextResponse.json({ message: "failed" })
    }
}


export async function POST (req) {
    try {
        await connect()
        const formData = await req.formData()
        const {
            name,
            catagory,
            focusarea,
            description,
            city,
            uniqueaddress,
            image,
            email
        } = Object.fromEntries(formData)
        const imageType = image.type
        const buffer = Buffer.from(await image.arrayBuffer(), "base64")
        const user = await User.findOne({email: email})
        if (user.hasService) {
            throw Error("Service already registerd")
        }
        const newService = await new Service({
            user: user._id,
            servicename: name,
            catagory,
            focusarea,
            description,
            address: {
                city,
                uniqueaddress
            },
            image: {
                imageType,
                data: buffer
            }
        })
        const service = await newService.save()
        await User.updateOne({email: email}, {$set:{ hasService: true }})
        
        return NextResponse.json({ message: 'Registeration success', service })
    } catch(error) {
        
        return NextResponse.json({ error: error.message}, {status: 500})
    }
}
