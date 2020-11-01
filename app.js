import express from "express";
import morgan from "morgan"; // logging
import helmet from "helmet"; // to protect for node.js app
import cookieParser from "cookie-parser"; // save user information at cookie
import bodyParser from "body-parser"; // get the information from body
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;