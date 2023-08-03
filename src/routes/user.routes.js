import { Router } from "express";

const initUserRoutes = (app) => {
  const router = Router();
  router.get("/get-all", (req, res) => {});
  router.get("/get-one/:testId/:userId", (req, res) => {});
  router.post("/create", (req, res) => {});

  app.use("/user", router);
};

export default initUserRoutes;
