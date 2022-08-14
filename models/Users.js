import mongoose from 'mongoose';
import { DB_SETINGS } from '../lib/CONSTANTS.js';

const projectSchema = mongoose.Schema({
    email: String,
    password: String,
    date: String,
});

const Users = mongoose.model(DB_SETINGS.COLLECTIONS.USERS, projectSchema);


export default Users;