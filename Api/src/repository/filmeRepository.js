import { connection } from "../repository/connection.js";

export async function inserirFilme(filme) {
	const command = `
    INSERT INTO tb_filme (id_usuario, nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
            VALUES (?, ?, ?, ?, ?, ?);
    `;
	const [resposta] = await connection.query(command, [filme.usuario, filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
	filme.id = resposta.insertId;
	
	return filme;
}
