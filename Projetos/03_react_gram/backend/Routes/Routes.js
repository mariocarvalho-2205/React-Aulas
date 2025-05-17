import express from "express"

const router = express.Router();
import UserRoutes from "./UserRoutes.js"
import PhotoRoutes from "./PhotoRoutes.js"


router.use("/api/users", UserRoutes)
router.use("/api/photos", PhotoRoutes)



// rota teste
router.get("/test", (req, res) => {
    res.send("API Working React Gram!")
})


export default router;

