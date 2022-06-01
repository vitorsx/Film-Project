import { Router } from "express";
import { login } from "../repository/userRepository.js";

const router = Router();

router.post("/user/login", async (req, resp) => {
	try {
		const { email, senha } = req.body;
		const linhas = await login(email, senha);
		if (!linhas) {
			throw new Error("Senha ou email incorretos, tente novamente!");
		}
		resp.send(linhas);
	} catch (err) {
		resp.status(401).send({
			error: err.message,
		});
	}
});

export default router;
