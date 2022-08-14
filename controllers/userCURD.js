
import Users from '../models/Users.js';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import UserProfiles from '../models/UserProfiles.js';

/**
 *  handleSignin(...)
 *    
 *    handles incoming singin requests 
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * @returns {message} string
 * 
 */
 export const handleSignin = async( req, res ) => {
  if( req?.body !== null && Object.keys( req.body ).length > 0  ) {
    const {email, password} = req.body;
    const user = await Users.findOne({email, password});
    if(!user) return res.status( 404 ).json( { message: "user not found" } );
    if(user.id) {
      // Create and set token
      const token = await jwt.sign(
        { user_id: user.id, email }, process.env.TOKEN_KEY, { expiresIn: "12h" }
      );      
      return res.json({...user, token});
    }
    return res.status( 500 ).json( { message: "error" } );
  }
  //  Email or password is not set, sending unsuccessful
  return res.status( 400 ).json( { message: "incomplete request" } );
}


/**
 *  handleSignup(...)
 *    
 *    handles incoming singup requests 
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 * @returns {message} string
 * 
 */
export const handleSignup = async( req, res ) => {
	if(  req.body !== null && Object.keys( req.body ).length > 0  ) {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { email, password, firstName, lastName } = req.body;
    const user = await Users.findOne({email});
    if(user) return res.status(404).json({message: "email already exists"});
    const [insertedUser] = await Users.insertMany([{email, password, date: new Date()}]);
    const userId = insertedUser?.id ? insertedUser.id : ""; 
    console.log('SD: ', userId);
    if(userId) {
      const userProfile = await UserProfiles.findOne({userId});
      const profileData = {email, firstName, lastName, userId};
      if(userProfile?.email) await UserProfiles.updateOne(profileData);
      else await UserProfiles.insertMany([profileData]);
      session.commitTransaction();
      return res.json({message: "success"});
    }
    return res.status( 500 ).json( { message: "error" } );
  }
  //  Email or password is not set, sending unsuccessful
  return res.status( 400 ).json( { message: "incomplete Request" } );
}