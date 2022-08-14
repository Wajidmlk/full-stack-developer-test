import mongoose from 'mongoose';
import { DB_SETINGS } from '../lib/CONSTANTS.js';

const projectSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  userId: String,
});

const UserProfiles = mongoose.model(DB_SETINGS.COLLECTIONS.USER_PROFILES, projectSchema);

export default UserProfiles;