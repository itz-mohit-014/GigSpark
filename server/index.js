import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"

dotenv.config({
    path:"./.env"
})

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(cors({
    origin:process.env.ALLOW_ORIGIN,
    credentials:true
}))

app.listen(port , () => {
    console.log(`Server is running at localhost: ${port}`);
})