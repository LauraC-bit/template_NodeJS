import initUserRoutes from "./user.routes.js";
import initTodosRoutes from "./todo.routes.js";

const initRoutes = (app) => {
  initUserRoutes(app);
  initTodosRoutes(app);
};

export default initRoutes;
