import { Request, Response } from 'express';
import { cartModel } from '../models/cartModel';
import { productModel } from '../models/productModel';
import { cartItemTypes, cartTypes } from '../types/types';

export const addToCart = async (req: Request, res: Response) => {
    try {
        const { userId, productId, count } = req.body

        const product = await productModel.findById({ productId })

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        let cart = await cartModel.findOne({ userId })

        if (!cart) {
            cart = new cartModel({ userId, items: [], totalPrice: 0 })
        }

        const cartItem = cart.items.find(item => item.productId.toString() === productId);

        if (cartItem) {
            cartItem.quantity += count;
        } else {
            cart.items.push({ productId, quantity:count });
        }

        cart.totalPrice += product.price * count;

        await cart.save();

        return res.status(200).json(cart);

    } catch (error) {
        console.log("error in addToCart", error);
        res.status(403).json({ error: "Internal Server Error" })
    }
}

export const getCart = async (req: Request, res: Response) => {

}

export const updateItem = async (req: Request, res: Response) => {

}


export const removeItem = async (req: Request, res: Response) => {

}