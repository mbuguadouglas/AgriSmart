import express, { json } from "express";

import authRouter from "./api-v1/routes/auth.routes";

const app = express()   //initialize the application
app.use(json())     //add body to requests


// URLs within application
app.use('/auth', authRouter)


// start the application
app.listen(4000, () => {
    console.log('The backend server is running!')
})