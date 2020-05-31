const connection = require("../database/conection");

module.exports = {
    async create(request, response) {
        const { cpf } = request.body;
        console.log(cpf);

        

        const users = await connection('user')
            .where('cpf', cpf)
            .select(['name','cpf', 'email'])
            .first();

        if (!users) {
            return response.status(400).json({ error: 'Essa Conta não existe' });
        }    

        return response.json(users)

    }
}