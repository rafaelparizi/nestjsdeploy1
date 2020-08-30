import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechniquesModule } from './techniques/techniques.module';

import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rparizi:12345@clusterdttechniques.rjcjk.mongodb.net/helius?retryWrites=true&w=majority'),
    TechniquesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
