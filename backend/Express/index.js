import express from "express";

// Routes
import AuthRoute from "./Routes/Auth.js";
import UserRoute from "./Routes/User.js";
import ProductRoute from "./Routes/Product.js";
import CartRoute from "./Routes/Cart.js";
import OrderRoute from "./Routes/Order.js";
import StripeRoute from "./Routes/Stripe.js";

// Express APP
const app = express();

// Request Body Parser
app.use(express.json());

/**
 * @name AuthRoute
 * @listens /api/v1/auth/
 * @description Router for all Auth APIs
 */
app.use("/api/v1/auth/", AuthRoute);

/**
 * @name UserRoute
 * @listens /api/v1/user/
 * @description Router for all User APIs
 */
app.use("/api/v1/user/", UserRoute);

/**
 * @name ProductRoute
 * @listens /api/v1/product/
 * @description Router for all Product APIs
 */
app.use("/api/v1/product/", ProductRoute);

/**
 * @name CartRoute
 * @listens /api/v1/cart/
 * @description Router for all Cart APIs
 */
app.use("/api/v1/cart/", CartRoute);

/**
 * @name OrderRoute
 * @listens /api/v1/order/
 * @description Router for all Order APIs
 */
app.use("/api/v1/order/", OrderRoute);

/**
 * @name StripeRoute
 * @listens /api/v1/stripe/
 * @description Route for ALl Stripe Payment APIs
 */
app.use("/api/v1/stripe/", StripeRoute);

export default app;
