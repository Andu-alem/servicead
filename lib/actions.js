'use server'
import Image from '../models/Image';
import Service from '../models/Service';


export async function uploadImages (service, formData) {
    try{
        const images = formData.getAll('images');

        images.forEach(async (image) => {
            const mimeType = image.type
            const buffer = Buffer.from(await image.arrayBuffer(), "base64")
            const createdImage = await Image.create({
                mimeType,
                data: buffer,
                service: service.id
            });
        })

        return {
            success: true,
        }
    } catch (e) {
        return {
            success: false,
        }
    }
}

export async function deleteImages (service, imagesId) {
    try {
        if (imagesId.length > 0) {
            imagesId.forEach(async (id) => {
                await deleteOne({ _id: id })
            })
        } else {
            await deleteOne({ _id: imagesId[0] })
        }
        const images = await Image.find({ service: service._id })
        return {
            success: true,
            images: images
        }
    } catch (e) {
        return {
            success: false
        }
    }
}

export async function uploadProductsAndService (service, data) {
    try {
        const productsAndServices = [];
        for (const key in data) {
            productsAndServices.push(data[key]);
        }
        
        const newService = await Service.findOneAndUpdate({
            _id: service.id
        }, {
            productsAndServices
        });

        return {
            success: true,
        }
    } catch(e) {
        return {
            success: false,
        }
    }
}

export async function uploadOfferings (service, offering) {
    try {
        const newOffering = await Service.findOneAndUpdate({ _id: service.id },{
            offering: offering
        });
        return {
            success: true,
        }
    } catch(e) {
        return {
            success: false,
        }
    }
}
