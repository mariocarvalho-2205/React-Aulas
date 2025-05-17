import { Router } from "express";

const router = Router();

// controller
import {insertPhoto} from "../controllers/PhotoController.js"

// middlewares
import { authGuard } from "../middlewares/authGuard.js";
import { imageUpload } from "../middlewares/imageUpload.js";
import { validatePhotoUpload } from "../middlewares/photoValidations.js";




// routes
router.post("/", authGuard, imageUpload.single("image"), validatePhotoUpload, insertPhoto)






export default router;
