const connection = require('../database/conection')

module.exports = {
    async index(request,response) {
        const { page } = request.query;

        const [count] = await connection('translation').count();


        
        const transaltions = await connection('translation')
            .offset((Number(page) - 1) * 5)
            .limit(5)
            .select('*');

            response.header('X-Total-Count', count['count(*)'])

        return response.json(transaltions);
       },

    async create(request, response) {
        
        
        
        const { title, email, id_user, translation_value } = request.body

        try {
            await connection('translation').insert({
                title,
                email,
                id_user,
                translation_value
            })

             response.json({
                "Mensagem": "Registrado com sucesso",
                
            })
        

            console.log()
        } catch (error) {
            response.json({ 
                'title': 'Falha ao cadastrar',
                'mensagem': 'Dados Incorretos'
                   
            })
            
            
            
            console.log(error)
        }
        
       



        // title email id_user translation_value
    }
    
    
    
}