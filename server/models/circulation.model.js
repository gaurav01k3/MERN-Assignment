import mongoose from 'mongoose'

const circulationSchema = new mongoose.Schema({
    BookID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    },
    MemberID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
    },
    Copies: {
        type: Number,
        required: true
    },
    DateOfIssue: {
        type: Date,
        required: true
    }
})


const circulationModel = mongoose.model('Circulation', circulationSchema);


export default circulationModel
