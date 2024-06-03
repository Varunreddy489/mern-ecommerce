import { Response } from "express";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const generateTokenAndSetCookie = (userId: Types.ObjectId, res: Response) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // prevent XSS attacks
        sameSite: "strict", // CSRF protection
        secure: process.env.NODE_ENV !== "development", // Set to true in production
    });
};

export default generateTokenAndSetCookie;
