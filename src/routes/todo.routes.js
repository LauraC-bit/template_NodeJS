import { Router } from "express";
import { TodoController } from "../controllers/todo.controller.js";

const initTodosRoutes = (app) => {
  const router = Router();
  router.get("/get-all", TodoController.getAll);
  router.post("/create", TodoController.create);

  app.use("/todo", router);
};

export default initTodosRoutes;
