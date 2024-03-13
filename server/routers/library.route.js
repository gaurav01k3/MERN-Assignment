import express from 'express'
import { createCirculationController, getAllBooksController } from '../controllers/books.controller.js';

const libraryRouter = express.Router();

libraryRouter.get('/books', getAllBooksController)

libraryRouter.post('/book/issue', createCirculationController)

libraryRouter.post('/book/return', returnBookController)


export default libraryRouter;