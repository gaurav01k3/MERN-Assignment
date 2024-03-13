import bookModel from "../models/book.model.js";
import circulationModel from "../models/circulation.model.js";

export const getAllBooksController = async (req, res) => {
    const books = await bookModel.find();
    return res.send(books);
}

export const createCirculationController = async (req, res) => {
    const { BookID, CopiesRequried, MemberID } = req.body;

    if (!BookID || !CopiesRequried || !MemberID) {
        return res.status(401).send("Request cannot not be fulfilled, infomation missing!")
    }

    try {
        const bookData = await bookModel.find({ BookID: 1000 });
        console.log(bookData);
        if (!bookData) {
            return res.status(401).send("Book not found!")
        } else {
            const { BookID, NumberOfCopies } = bookData;
            if (NumberOfCopies === 0 || NumberOfCopies < CopiesRequried) {
                return res.json({ "message": "Copies not available at the moment" })
            } else {
                //Issuing the book
                const cirObj = new circulationModel({
                    BookID: "65ed870657bc4587ccdaa451",
                    MemberID: "65ed87cd57bc4587ccdaa467",
                    Copies: CopiesRequried,
                    DateOfIssue: new Date()
                })

                // const resultCopies = NumberOfCopies - 1

                const issuedData = await cirObj.save();

                // // reducing the no of copies
                // const updatedBookData = await bookModel.findOneAndUpdate(BookID, { NumberOfCopies: resultCopies })

                // return res.json(updatedBookData);
            }
        }
    } catch (error) {
        console.log(error);
    }

    return res.send("Not found book some error");
}


export const returnBookController = async (req, res) => {
    const { BookID, MemberID } = req.body;

    if (!BookID || !MemberID) {
        return res.status(401).send("Request cannot not be fullfilled, information missing!")
    }

    try {
        const circulation = await circulationModel.find({ BookID, MemberID });

        if (!circulation) {
            return res.status(401).send("Invalid request")
        } else {

        }

    } catch (error) {

    }

}