const connection = require("../database/conection");

module.exports = {
    //'name', 'email', 'password', 'account_balance', 'phone_number', 'plans', 'cpf', 'account'
    async index(request, response) {
       const {  id  } = request.body;
       console.log(id)

       const users = await connection('user')
       .where('id', id)
       .select(['*'])
       .first();

   if (!users) {
       return response.status(400).json({ error: 'Essa Conta não existe' });
   }    

   return response.json(users)
    }

}