import express from "express";
import bodyParser from "body-parser";

const app = express();

app.set("port", process.env.PORT || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * set Routes here
 */

export default app;
