import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TechniquesController } from './techniques.controller';
import { TechniqueService } from './shared/technique.service';

import { TechniqueSchema } from './schemas/technique.schema';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'Technique', schema: TechniqueSchema}])
    ],
    controllers:[TechniquesController],
    providers: [TechniqueService]
})
export class TechniquesModule {}
