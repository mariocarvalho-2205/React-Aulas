import express from "express"

const router = express.Router();
import UserRoutes from "./UserRoutes.js"

router.use("/api/users", UserRoutes)

// rota teste
router.get("/test", (req, res) => {
    res.send("API Working React Gram!")
})


export default router;

