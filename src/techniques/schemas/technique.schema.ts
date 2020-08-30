import * as mongoose from 'mongoose';

export const TechniqueSchema = new mongoose.Schema({
    name: String,
    description: String,
    isEvaluated: Boolean
})
