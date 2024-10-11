import { Router } from "express";
import {
  addModule,
  deleteModule,
  getModule,
  getModuleById,
  updateModule,
} from "../controllers/module.controller";

const router = Router();

router.get("/modules", getModule);
router.get("/modules/:id", getModuleById);
router.post("/modules", addModule);
router.delete("/modules/:id", deleteModule);
router.patch("/modules/:id", updateModule);

export default router;
