import { Injectable } from '@nestjs/common';
import { Technique } from './technique';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TechniqueService {
    // //simulando o BD
    // techniques: Technique[] = [
    // {id:1, name:'tech1', description:'technique 1',isEvaluated:false},
    // {id:2, name:'tech2', description:'technique 2',isEvaluated:false},
    // {id:3, name:'tech3', description:'technique 3',isEvaluated:true},
    // ];


    constructor(@InjectModel('Technique') private readonly techniqueModel: Model<Technique>){}

    async getAll(){
        return await this.techniqueModel.find().exec();
        //return this.techniques;
    }
    
    async getById(id: string){
        return await this.techniqueModel.findById(id).exec();
    }

    async create(tech: Technique){
        const createdTechnique = new this.techniqueModel(tech);
        return await createdTechnique.save();
    }

    async update(id: string, tech: Technique){
        await this.techniqueModel.updateOne({ _id: id}, tech).exec();
        //para pegar quem foi atualizado
        return this.getById(id);
    }

    async delete(id:string){
        return await this.techniqueModel.deleteOne({ _id: id }).exec();
    }
    
}


