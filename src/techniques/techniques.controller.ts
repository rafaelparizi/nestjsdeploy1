import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { TechniqueService } from './shared/technique.service';
import { Technique } from './shared/technique';

@Controller('techniques')
export class TechniquesController {
    constructor(
        private techniqueService: TechniqueService 
    ){}

    @Get()
    async getAll() : Promise<Technique[]>{
        return this.techniqueService.getAll();
    }

    //Pega o id e atribui pra o parametro id
    @Get(':id')
    async getById(@Param('id') id:string) : Promise<Technique>{
        return this.techniqueService.getById(id);
    }

    //conteudo vem pelo body e nao parametro
    @Post()
    async create(@Body() tech : Technique) : Promise<Technique>{
        return this.techniqueService.create(tech);
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() tech : Technique): Promise<Technique>{
        //tech.id = id;
        return this.techniqueService.update(id,tech);
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        return this.techniqueService.delete(id);
    }


}
