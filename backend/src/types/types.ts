import { Document, Schema, Types } from 'mongoose';

export interface authTypes {
    name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: 'male' | 'female';
    profilePic: string;
}

export interface productTypes {
    title: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    rating: number
}

export interface CartItem {
    title: String;
    description: String;
    price: Number;
    imageUrl: String;
    rating: Number;
    count: Number;
}

export interface CartTypes extends Document {
    cartItems: CartItem[];
    user: Types.ObjectId;
    totalPrice: number;
}

export interface IRequest extends Request {
    userId?: Schema.Types.ObjectId;
}