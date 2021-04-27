import dotenv from "dotenv";
import Server from "./src/models/server";

//CONFIGURAR dot.env
dotenv.config();

const server = new Server();
server.listen();