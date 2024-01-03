const database = require('../models')

class CargosService {
    async create(dto){
         const cargo = await database.cargos.findOne({
            where: {
                nome: dto.nome
            }
         })
         if(cargo){
             throw new Error('Cargo já existe');
         }
         
         try {
                const newCargo = await database.cargos.create({
                    nome: dto.nome,
                    descricao: dto.descricao
                })

                return newCargo;
         } catch (error) {
            throw new Error('Erro ao criar cargo');
         }
    }
    async getAll(){
        try {
            const cargos = await database.cargos.findAll();

            return cargos;
        } catch (error) {
            throw new Error('Erro ao buscar cargos');
        }
    }

    async getById(id){
        try {
            const cargo = await database.cargos.findOne({
                where: {
                    id: id
                }
            })

            return cargo;
        } catch (error) {
            throw new Error('Erro ao buscar cargo');
        }
    }

    async delete(id){
        try {
            await database.cargos.destroy({
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw new Error('Erro ao deletar cargo');
        }
    }

    async update(id, dto){
        try {
            await database.cargos.update({
                nome: dto.nome,
                descricao: dto.descricao
            },{
                where: {
                    id: id
                }
            })

            const cargo = await database.cargos.findOne({
                where: {
                    id: id
                }
            })

            return cargo;
        } catch (error) {
            throw new Error('Erro ao atualizar cargo');
        }
    }
    
}

module.exports = CargosService;