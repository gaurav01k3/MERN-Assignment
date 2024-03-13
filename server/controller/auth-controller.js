

export const registerUserController = (req, res) => {
    const data = req.body;
    console.log(data);
    return res.send("Hello")
}
