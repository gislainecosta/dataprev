const crypto = require("crypto");
const connection = require('../database/conection')

module.exports = {
    async index(request,response) {
        const { page = 1 } = request.query;

        const [count] = await connection('user').count();
        
        
        const users = await connection('user')
        .limit(5)
        .offset((Number(page) - 1) * 5)
        .select(['user.*']);

        response.header('X-Total-Count', count['count(*)'])


        return response.json(users);
       },

    async create(request, response) {
        const {  name, email, password, phone_number, plans, cpf,id} = request.body

        const recover_key = crypto.randomBytes(10).toString('HEX');
        const Rubins = 0;
        const Diamond = 0;


        
// Rubins Diamond
        try {
            await connection('user').insert({
                id,
                name,
                email,
                password,
                phone_number,
                cpf,
                recover_key,
                Rubins,
                Diamond
            })
            
            return response.json({
                'title': 'Registrado com sucesso',
                'mensagem': 'Recover_key gerada e email de confirmação'
            })
        } catch (error) {
            

            console.log(error)
        }
        
        
       


    },
    
    async delete(response, request) {
        const { id } = request.query;
        console.log(id)


      
      await connection('user').where('id', id).delete();

      return response.status(201).send();


    }
    
    
}