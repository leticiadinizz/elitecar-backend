import express from "express";
import cors from  "cors";
import { router } from "./routes";

//cria o servidor express
const server = express();
//configura o servidor para aceitar requisitos de outros dominios
server.use(cors());
//configura o servidor para aceitar requisiçoes no formato json
server.use(express.json());

//configurando as rotas do servidor
server.use(router)

//exporta o servidor
export{ server };