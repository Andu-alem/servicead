import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: false
    },
    postDate:{
        type: Date,
        default: Date.now
    },
    startingDate: {
        type: Date,
        default:new Date("2027-1-10"),
        required: true
    }
});

export default mongoose.models.Events || mongoose.model('Events', EventSchema)