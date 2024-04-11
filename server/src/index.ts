import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use((req, _res, next) => {
    console.log(`${req.method}: ${req.originalUrl} - ${new Date().toLocaleString()}`);
    next();
});

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.listen(PORT, () => console.log(`express server listening on port ${PORT}`));
