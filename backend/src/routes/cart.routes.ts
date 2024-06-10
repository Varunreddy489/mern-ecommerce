import Router from "express"

import { verifyToken } from "../middleware/protectedRoute"
import { addToCart, getCart, removeItem, updateItem } from "../controllers/cart.controller"

const router = Router()

router.post("/addCart", verifyToken, addToCart)
router.get('/:userId', verifyToken, getCart);
router.put('/updateItem/:itemId', verifyToken, updateItem);
router.delete('/removeItem/:itemId', verifyToken, removeItem);

export { router as cartRoutes }