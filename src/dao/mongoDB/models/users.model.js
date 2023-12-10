import { Schema, model } from 'mongoose';

const schema = new Schema({
    firstname: { type: String, required: true, max: 100 },
    lastname: { type: String, required: true, max: 100 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, max: 100 },
    role: { type: String, default: 'user' }
});

export const UserModel = model('users', schema);