import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import connectToMongo from "./db/connectToMongo";
import { productRoutes } from "./routes/product.routes";
import { userRoutes } from "./routes/user.routes";

const app = express();
dotenv.config()

app.use(cors())
app.use(express.json())

app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    connectToMongo()
    console.log(`SERVER IS RUNNING ON ${PORT}`);
})