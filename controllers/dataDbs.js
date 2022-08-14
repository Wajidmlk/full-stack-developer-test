
import UserProfiles from '../models/UserProfiles.js';

/**
 *  getAllUserProfiles(...)
 *    
 *    sends all users Profiles requests 
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * @returns {data} array of userProfiles
 * 
 */
 export const getAllUserProfiles = async ( _, res ) => {
  const profiles = await UserProfiles.find();
  return profiles && profiles.length > 0 ? res.json(profiles) : res.json([]);
}
