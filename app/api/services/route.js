import { NextResponse } from 'next/server';
import connect from '../../../lib/db-connector';
import Service from '../../../models/Service';
import User from '../../../models/User';
import Category from '../../../models/Category';
import ServiceType from '../../../models/ServiceType';
import Image from '../../../models/Image';


export async function GET (req) {
    const { searchParams } = new URL(req.url)
    try {
        await connect()
        //const services = await Service.find
        const categories = await Category.find().populate('services');

        return NextResponse.json({
            categories,
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
            serviceName,
            category,
            serviceType,
            description,
            city,
            uniqueaddress,
            profilePic,
            email
        } = Object.fromEntries(formData)
        const mimeType = profilePic.type
        const buffer = Buffer.from(await profilePic.arrayBuffer(), "base64")
        const user = await User.findOne({email: email})
        if (user.hasService) {
            throw Error("Service already registerd")
        }
        const image = await Image.create({
            mimeType,
            data: buffer
        });
        let insertedCategory = await Category.findOne({ name: category.trim() });
        if (!insertedCategory) {// if not created create a new category
            insertedCategory = await Category.create({ name: category.trim() });
        }

        let sType = await ServiceType.findOne({ name: serviceType.trim() });
        if (!sType) { // if there isn't create a new service type
            sType = await ServiceType.create({ name: serviceType.trim() });
        }

        const service = await Service.create({
            user: user._id,
            serviceName,
            category: insertedCategory._id,
            serviceType: sType._id,
            description,
            address: {
                city: city.trim(),
                uniqueaddress: uniqueaddress.trim()
            },
            profileImage: image._id
        });

        await User.updateOne({email: email}, {$set:{ hasService: true }});
        await Image.updateOne({_id: image._id}, {$set:{ service: service._id }});
        
        return NextResponse.json({ message: 'Registeration success', service })
    } catch(error) {
        
        return NextResponse.json({ error: error.message}, {status: 500})
    }
}
