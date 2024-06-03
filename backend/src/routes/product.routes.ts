import Router from "express"
import {addProduct, deleteProducts, getAllProducts, getProduct, updateProducts}  from "../controllers/product.controllers"
// import { addToCart } from "../controllers/cart.controller"
import { verifyToken } from "../middleware/protectedRoute"

const router = Router()

router.post('/addProduct', addProduct)
router.get('/',getAllProducts)
router.get('/:id',getProduct)
router.put('/updateProduct/:id',updateProducts)
router.delete('/deleteProduct/:id',deleteProducts)

// router.post("/addCart",verifyToken,addToCart)


export { router as productRoutes }