import mongoose from "mongoose";

const OrderSchema =  new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String, required: true },
                quantity: { type: Number, required: true, default: 1 },
            }

        ],
        amount: { type: Number, required: true, default: 0 },
        address: { type: String, required: true },
        status: { type: String, required: true, default: "pending" },
    },
    { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);