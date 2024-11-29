'use server'
import Image from '../models/Image';
import Service from '../models/Service';
import Category from '../models/Category';
import ServiceType from '../models/ServiceType';


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

export async function updateServices (serviceId, formData) {
    try {
        let image;
        const {
            serviceName,
            category,
            serviceType,
            description,
            city,
            uniqueaddress,
            profilePic,
        } = Object.fromEntries(formData);
        if (profilePic) {
            const mimeType = profilePic.type
            const buffer = Buffer.from(await profilePic.arrayBuffer(), "base64")
            image = await Image.create({
                mimeType,
                data: buffer,
                service: serviceId,
            });
        }

        let insertedCategory = await Category.findOne({ name: category });
        if (!insertedCategory) {
            insertedCategory = await Category.create({ name: category });
        }

        let sType = await ServiceType.findOne({ name: serviceType });
        if (!sType) {
            sType = await ServiceType.create({ name: serviceType });
        }
        const data = {
            serviceName,
            category: insertedCategory._id,
            serviceType: sType._id,
            description,
            address: {
                city: city.trim(),
                uniqueaddress: uniqueaddress.trim()
            },
        }
        if (image) {
            data.profileImage = image._id
        }
        const service = await Service.findOneAndUpdate({ _id: serviceId }, data);

        return {
            success: true
        }

    } catch (error) {
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
        const productsAndServices = data.filter((product) => product.title && product.description);
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
