import express from "express";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import userRoute from "./routes/user.js"
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
})
mongoose.connection.on("error", (err) => {
    console.log(err.message);
})
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
})

app.use(express.json());

app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/user/", userRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
})

app.listen(port, () => {
    connect();
    console.log('Server is running on port 8800');
});