import { Router } from "express";
import {
  addModule,
  deleteModule,
  getModule,
  getModuleById,
  updateModule,
} from "../controllers/module.controller";
import { editModuleSchema, moduleSchema } from "../validators/course.validator";
import { validator } from "../middlewares/validator";

const router = Router();

router.get("/modules", getModule);
router.get("/modules/:id", getModuleById);
router.post("/modules", validator(moduleSchema), addModule);
router.delete("/modules/:id", deleteModule);
router.patch("/modules/:id", validator(editModuleSchema), updateModule);

export default router;
