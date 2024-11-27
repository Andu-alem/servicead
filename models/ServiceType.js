import mongoose from 'mongoose';

const TypeSchema = new mongoose.Schema({
    name: String,
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

TypeSchema.virtual('services', {
    ref: 'Service',
    localField: '_id',
    foreignField: 'serviceType'
});

export default mongoose.models.ServiceType || mongoose.model('ServiceType', TypeSchema);