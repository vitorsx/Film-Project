import { inserirFilme } from "../repository/filmeRepository.js";
import { Router } from "express";

const router = Router();

router.post("/filme", async (req, resp) => {
	try {
		const newFilme = req.body;
		const insert = await inserirFilme(newFilme);
		if (!newFilme.nome) {
			throw new Error('Campo nome não pode estar vazio!')
		}
		if (!newFilme.sinopse) {
			throw new Error('Campo sinopes não pode estar vazio!')
		}
		if (!newFilme.avaliacao) {
			throw new Error('Campo avaliação nao pode estar vazio!')
		}
		if (newFilme.avaliacao < 0) {
			throw new Error('Avaliação não pode ser menor do que 0!')
		}
		if (!newFilme.lancamento) {
			throw new Error('Campo lançamento não pode estar vazio')
		}
		if (!newFilme.disponivel) {
			throw new Error('Campo disponível não pode estar vazio!')
		}
		if (!newFilme.usuario) {
			throw new Error('Campo usuario não pode estar vazio!')
		}
		else {
			resp.send(insert)
		}
	} catch (err) {
		resp.send({
			error: err.message,
		});
	}
});

export default router;
