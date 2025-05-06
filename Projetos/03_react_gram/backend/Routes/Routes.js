import express from "express"

const router = express.Router();


// rota teste
router.get("/test", (req, res) => {
    res.send("API Working React Gram!")
})


export default router;

