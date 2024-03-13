import express from 'express'

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    return res.send("Users data");
})

export default userRouter;