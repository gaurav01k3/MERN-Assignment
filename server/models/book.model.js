import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    BookID: {
        type: Number,
        required: true
    },
    BookName: {
        type: String,
        required: true
    },
    NumberOfCopies: {
        type: Number,
        required: true
    }
})

const bookModel = mongoose.model('Book', bookSchema);

export default bookModel
