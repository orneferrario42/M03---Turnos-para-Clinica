import {Router} from "express";
import userRouter from "../routes/userRouter"
import appointmentRouter from "./turnsRouter";
import auth from "../middleware/auth";

const router:Router = Router();

router.use("/users", userRouter);
router.use("/turns", appointmentRouter);

export default router;
