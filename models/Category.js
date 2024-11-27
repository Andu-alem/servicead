import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: String,
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

CategorySchema.virtual('services', {
    ref: 'Service',
    localField: '_id',
    foreignField: 'category'
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);