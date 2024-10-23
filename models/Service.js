import mongoose from 'mongoose'

const ServiceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
        unique: true,
    },
    servicename: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    focusarea: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        city: {
            type: String,
            required: true
        },
        uniqueaddress: {
            type: String,
            reqired: true
        }
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts",
        required: false
    }],
    image: {
        imageType: {
            type: String,
            required: true
        },
        data: {
            type: Buffer,
            required: true
        },
    }
})

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema)