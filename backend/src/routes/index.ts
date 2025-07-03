import { Router } from "express";
import healthRoutes from "./health";
import sessionRoutes from "./sessions";

const router = Router();

router.use("/health", healthRoutes);
router.use("/sessions", sessionRoutes);

router.get("/", (req, res) => {
  res.send("Hello from focus timer backend");
});

export default router;
