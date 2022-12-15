const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('node:path');
const { parse, serialize } = require('../utils/json');
const db = require('./db_conf');

const jwtSecret = 'iloveCasino';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const saltRounds = 10;

const jsonDbPath = path.join(__dirname, '/../data/users.json');

const defaultUser=[
{
    id:0,
    username:'default',
    name:'default',
    firstname:'default',
    mail:'default',
    yearBirthday:'default',
    password:'default',
    isAdmin:0,

},

];

async function login(username,password){
    const userNameFound = readOneFromUserName(username);
    if(!userNameFound) return undefined;
   
    const comparatorPassword = await bcrypt.compare(password,userNameFound.password)

    if(!comparatorPassword) return undefined;
  
    const token = jwt.sign(
        { username }, 
        jwtSecret, 
        { expiresIn: lifetimeJwt }, 
      );
    
      const authenticatedUser = {
        username:userNameFound.username,
        mail: userNameFound.mail,
        chips: userNameFound.chips,
        token,
      };
   
      return authenticatedUser;

}

async function register(username,lastname,firstname,mail,yearBirthday,password){
    const userNameFound = readOneFromUserName(username);
    if(userNameFound) return undefined;
    await createUser(username,lastname,firstname,mail,yearBirthday,password);

    const token = jwt.sign(
        { username }, 
        jwtSecret, 
        { expiresIn: lifetimeJwt }, 
      );
    
      const authenticatedUser = {
        username,
        mail,
        chips: 0,
        token,
      };
    
      return authenticatedUser;
}

async function createUser(username,lastname,firstname,mail,yearBirthday,password){
    // const users=parse(jsonDbPath,defaultUser)
    const hashedPassword=await bcrypt.hash(password,saltRounds);
    /*
    const newUser={
        id:getNextId(),
        username,
        name,
        firstname,
        mail,
        yearBithday,
        password:hashedPassword,
        isAdmin:0
    }
    */
    const stmt = db.prepare('INSERT INTO user(username, last_name, first_name, mail, year_birth, password) VALUES (?, ?, ?, ?, ?, ?)');
    const info = stmt.run(username, lastname, firstname, mail, yearBirthday, hashedPassword);
    // users.push(newUser);
    // serialize(jsonDbPath,users)
    return info;
}

function getNextId() {
    const users = parse(jsonDbPath, defaultUser);
    const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = users[lastItemIndex]?.id;
    const nextId = lastId + 1;
    return nextId;
  }

function readOneFromUserName(username){
    // const users=parse(jsonDbPath,defaultUser);
    // const indexUserFound=users.findIndex((user)=>user.username===username);

    const stmt = db.prepare('SELECT * FROM user WHERE username = ?');
    const user = stmt.get(username);

    return user;
}

module.exports={login,register,readOneFromUserName}