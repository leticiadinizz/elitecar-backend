import { Request, Response, Router } from "express";

//cria um roteador
const router = Router();

//criando a rota principal para aplicação
router.get ("/", (req: Request, res: Response) =>{
    res.json({ mensagem: "Olá, mundo!" });
});

//exportando as rotas
export { router };