import express from "express";
import "./database.js";
import { cut } from "./src/cut.js";
import { redirect } from "./src/redirect.js";

const app = express();
const port = 4000;

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post("/cut", cut);
app.get("/:code", redirect);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});