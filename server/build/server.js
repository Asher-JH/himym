"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (_req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`🚀 [server]: Server is running at http://localhost:${port}`);
});
