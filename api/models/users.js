const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('./db_conf');

const jwtSecret = 'iloveCasino';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const saltRounds = 10;


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
        lastname:userNameFound.last_name,
        firstname:userNameFound.first_name,
        yearBirthday:userNameFound.year_birth,
        mail:userNameFound.mail,
        chips:userNameFound.chips,
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
        lastname,
        firstname,
        yearBirthday,
        mail,
        chips: 1000,
        token,
      };
    
      return authenticatedUser;
}

async function createUser(username,lastname,firstname,mail,yearBirthday,password){
    const hashedPassword=await bcrypt.hash(password,saltRounds);
    
    const stmt = db.prepare('INSERT INTO user(username, last_name, first_name, mail, year_birth, password) VALUES (?, ?, ?, ?, ?, ?)');
    const info = stmt.run(username, lastname, firstname, mail, yearBirthday, hashedPassword);
   
    return info;
}


function readOneFromUserName(username){
    const stmt = db.prepare('SELECT * FROM user WHERE username = ?');
    const user = stmt.get(username);

    return user;
}

module.exports={login,register,readOneFromUserName}