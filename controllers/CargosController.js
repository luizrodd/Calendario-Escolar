const CargoService = require('../services/CargosService');
const cargoService = new CargoService();

class CargoController{
    static async create(req,res){
        const {nome, descricao} = req.body;

        try {
            const cargo = await cargoService.create({nome, descricao});

            res.status(201).send(cargo);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    static async getAll(req,res){
        try {
            const cargos = await cargoService.getAll();

            res.status(200).send(cargos);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async getById(req,res){
        const {id} = req.params;

        try {
            const cargo = await cargoService.getById(id);

            res.status(200).send(cargo);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async delete(req,res){
        const {id} = req.params;

        try {
            await cargoService.delete(id);

            res.status(200).send({message: 'Cargo deletado com sucesso'});
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async update(req,res){
        const {id} = req.params;
        const {nome, descricao} = req.body;

        try {
            const cargo = await cargoService.update(id, {nome, descricao});

            res.status(200).send(cargo);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    
}

module.exports = CargoController;