import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
    },
    coment: String,
    rate: Number,
});

export default mongoose.models.Category || mongoose.model('Category', ReviewSchema);