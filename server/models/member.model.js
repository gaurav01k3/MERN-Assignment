import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
    MemberID: {
        type: String,
        required: true
    },
    MemberName: {
        type: String,
        required: true
    }
})


const memberModel = mongoose.model('Member', memberSchema);


export default memberModel
