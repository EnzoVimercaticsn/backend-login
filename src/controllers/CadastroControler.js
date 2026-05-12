const knex = require('../database/index.js');

module.exports = {
    async searchcadastroAllCod(req, res) {
        try {
            const result = await knex('usuario').orderBy('usu_matricula');
            return res.status(200).send(result);
        } catch (error) {
            return res.status(500).send({ msg: 'Erro ao buscar usuários', error: error.message });
        }
    },
    
    async searchcadastroAllNome(req, res) {
        try {
            const result = await knex('usuario').orderBy('usu_nome');
            return res.status(200).send(result);
        } catch (error) {
            return res.status(500).send({ msg: 'Erro ao buscar usuários', error: error.message });
        }
    },

    async searchcadastroByNome(req, res) {
        try {
            const { nome } = req.params;
            const result = await knex('usuario').where('usu_nome', 'ilike', `%${nome}%`);
            if (result.length === 0) {
                return res.status(404).send({ msg: 'Usuário não encontrado' });
            }
            return res.status(200).send(result);
        } catch (error) {
            return res.status(500).send({ msg: 'Erro ao buscar usuário', error: error.message });
        }
    },

    async searchcadastroByemail(req, res) {
        try {
            const { nome } = req.params;
            const result = await knex('usuario').where('usu_nome', 'ilike', `%${nome}%`);
            if (result.length === 0) {
                return res.status(404).send({ msg: 'Usuário não encontrado' });
            }
            return res.status(200).send(result);
        } catch (error) {
            return res.status(500).send({ msg: 'Erro ao buscar usuário', error: error.message });
        }
    },

    async createcadastro(req, res) {
        try {
            const { usu_matricula, usu_nome, usu_senha, isadm } = req.body;

            if (!usu_matricula) return res.status(400).send({ msg: 'Matrícula é obrigatória.' });
            if (!usu_nome) return res.status(400).send({ msg: 'Nome é obrigatório.' });
            if (!usu_senha) return res.status(400).send({ msg: 'Senha é obrigatória.' });
             if (!isadm) return res.status(400).send({ msg: 'Status de administrador é obrigatório.' });
            const dados = {
                usu_matricula,
                usu_nome,
                usu_senha,
                isadm
            };

            await knex('usuario').insert(dados);
            return res.status(201).send({ msg: 'Usuário criado com sucesso!', dados });
        } catch (error) {
            return res.status(500).send({ msg: 'Erro ao criar usuário', error: error.message });
        }
    },

async updatecadastro(req, res) {
    const { usu_matricula } = req.params;
    const { usu_nome, usu_senha, isadm } = req.body;

    const data = {
        usu_matricula,
        usu_nome,
        usu_senha,
        isadm
    };

    // ...
}

        await knex('usuario').update(data).where({ usu_matricula: id });
        return res.status(200).send({ msg: 'Atualização efetuada com sucesso!' });
    },

    async deletecadastro(req, res) {
        try {
            const { usu_matricula } = req.params;

            const deleted = await knex('usuario').delete().where({ usu_matricula });
            
            if (deleted === 0) {
                return res.status(404).send({ msg: 'Usuário não encontrado' });
            }

            return res.status(200).send({ msg: 'Usuário deletado com sucesso!' });
        } catch (error) {
            return res.status(500).send({ msg: 'Erro ao deletar usuário', error: error.message });
        }
    }
};

