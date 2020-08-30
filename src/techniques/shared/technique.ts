import { Document } from 'mongoose';
export class Technique extends Document{
    //id: number;
    name: string;
    description: string;
    isEvaluated: boolean;
}


