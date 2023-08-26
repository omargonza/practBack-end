import express from "express";
import { Router } from "express";
import { producstRouter } from "./router.products.js";
import { cartsRouter } from "./router.carts.js";
import { usersRouter } from "./router.users.js";
import { sessionRouter } from "./router.session.js";
import { ticketsRouter } from "./router.ticket.js";
import { mocksRouter } from "./router.mock.js";
import { docsRouter } from "./router.docs.js";
import { authJwtApi } from "../../mid/authentication.js";

export const apiRouter = Router();

apiRouter.use(express.json());
apiRouter.use(express.urlencoded({ extended: true }));

apiRouter.use("/products", authJwtApi, producstRouter);
apiRouter.use("/mockingproducts", mocksRouter);
apiRouter.use("/carts", authJwtApi, cartsRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/sessions", sessionRouter);
apiRouter.use("/tickets", authJwtApi, ticketsRouter);
apiRouter.use("/docs", authJwtApi, docsRouter);
