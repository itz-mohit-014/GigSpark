import { Router } from "express";
import { createNewOrder, getAllOrders, verifyPayment } from "../controllers/order.controller.js";
import { isVerifiedEmail, verifyToken } from "../middleware/auth.middleware.js";

const orderRoutes = Router();

orderRoutes.route('/').get(verifyToken, isVerifiedEmail, getAllOrders)

orderRoutes.route('/new').post(verifyToken, isVerifiedEmail, createNewOrder)

orderRoutes.route('/verify').post(verifyToken, isVerifiedEmail, verifyPayment)

export default orderRoutes;