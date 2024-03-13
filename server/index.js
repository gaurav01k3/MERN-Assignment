import express from 'express'
import cors from 'cors'

import userRouter from './routers/user-router.js';
import authRouter from './routers/auth-router.js';
import morgan from 'morgan';
import connectDB from './config/db.js';
import libraryRouter from './routers/library.route.js';


const app = express();
const PORT = process.env.PORT || 3000;

connectDB()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('tiny'));

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/library', libraryRouter)

app.listen(PORT, () => {
    console.log("Server listining on PORT", PORT);
})
