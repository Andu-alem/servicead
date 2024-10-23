import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
    postDate:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Posts || mongoose.model('Posts', PostSchema)