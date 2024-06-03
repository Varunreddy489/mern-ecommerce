import mongoose, { Types } from 'mongoose';
import { CartItem, CartTypes } from '../types/types';

const cartItemSchema = new mongoose.Schema<CartItem>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    count: {
        type: Number,
    }
});

const cartSchema = new mongoose.Schema<CartTypes>({
    cartItems: [cartItemSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "user id is required"],
    },
    totalPrice: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

export const cartModel = mongoose.model<CartTypes>("cart", cartSchema);
