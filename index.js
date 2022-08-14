import express  from 'express';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';
import auth from './middleware/auth.js';
import cors from 'cors';
import { getAllUserProfiles } from './controllers/dataDbs.js';
import { handleSignin, handleSignup } from './controllers/userCURD.js';
import { DB_SETINGS, SERVER_SETTINGS } from './lib/CONSTANTS.js';
const app = express();

// body parser is to send proper request to the client and fetch bigger files as well
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(bodyParser.json());


// CAN SWITCH FROM LOCAL TO REMOTE
const LOCAL_DB = `${DB_SETINGS.ADDRESSES.LOCAL}${DB_SETINGS.NAME}`;
const CONNECTION_URL = DB_SETINGS.ADDRESSES.REMOTE;

const PORT = process.env.PORT || SERVER_SETTINGS.LISTENER.PORT;

// Connect to MongoDB database
try {
  mongoose.connect(CONNECTION_URL, { useNewUrlParser: true }).then(async() => {
    console.log("MongoDb is Connected...!"); 
  })
}catch(e) {
  console.log("MongoDb connection Error : ", e);
}

//  USER CRUDs are handled here, public routes
app.post( SERVER_SETTINGS.API_CALLS.USER_REQUESTS.SIGN_UP, async ( req, res ) => { await handleSignup( req, res ) } )
app.post( SERVER_SETTINGS.API_CALLS.USER_REQUESTS.SIGN_IN, async ( req, res ) => { await handleSignin( req, res ) } )
//  USER CRUDs end.

//  PROJECTs CRUDs are handled here, Authenticated route
app.post( SERVER_SETTINGS.API_CALLS.PROJECT_RESQUESTS.GET_ALL_PROFILES, auth, async ( req, res ) => {
  await getAllUserProfiles( req , res )
} )
//  PROJECTs CRUDs end.

app.post("/", (req, res) => {
    res.send("APP is running...");
  });
  
//  for testing dev-wajid
app.listen(PORT,()=>{console.log("APP is running on port ", PORT);})
