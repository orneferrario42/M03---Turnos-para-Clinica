import express from "express";
import morgan from "morgan";
import Router from "./routes";
import cors from 'cors';;

const server = express();
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use(Router);

export default server;
