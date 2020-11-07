import express from "express";
import 'babel-polyfill';
import router from "./mobile-payment";
import dotenv from "dotenv";
import bodyParser, { json } from "body-parser";

dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.listen(port, ()=> console.log(`Listening from ${port}`));

app.use(bodyParser.json());

app.use("/v3", router);