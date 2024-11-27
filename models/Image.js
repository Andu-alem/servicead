import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    mimeType: String,
    data: Buffer,
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }
});

export default mongoose.models.Image || mongoose.model('Image', imageSchema);