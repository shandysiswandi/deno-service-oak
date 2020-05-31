import { Application } from "./deps.ts";
import { routes } from "./routes/routes.ts";
import { start } from "./utils/server.ts";

/**
 * Initial variable
 */
const app = new Application();

/**
 * Initial all route
 */
routes(app);

/**
 * Start application
 */
start(app);
