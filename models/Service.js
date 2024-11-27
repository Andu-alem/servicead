import mongoose from 'mongoose'

const ServiceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    serviceName: {
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
            required: true
        },
        geoLocation: {
            type: String,
            required: false
        }
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    serviceType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ServiceType",
    },
    productsAndServices: [{
        title: String,
        description: String
    }],
    offering: String,
    profileImage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
    }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

ServiceSchema.virtual('images', {
    ref: 'Image',
    localField: '_id',
    foreignField: 'service'
});

ServiceSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'services'
});

ServiceSchema.pre('find', function(next) {
    this.populate({
        path: 'category serviceType profileImage',
        options: { _recursed: true }
    });
    next();
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema)