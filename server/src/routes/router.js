import { Router } from "express";
import { userRoutes } from "./user.route.js";
import categoryRoutes from "./category.route.js";
import { gigRoutes } from "./gig.route.js";

const router = Router();

// user, category, Gig , reviews,  orders, chats, message,

router.use("/user", userRoutes)
router.use("/category", categoryRoutes)
router.use("/gig", gigRoutes)
// router.use("/reviews", userRoutes)
// router.use("/orders", userRoutes)
// router.use("/chats", userRoutes)
// router.use("/message", userRoutes)

export default router;