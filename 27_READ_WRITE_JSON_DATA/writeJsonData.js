// for write data: absolute data
// for read data: relative path

import fs from 'fs';
import path  from 'path';

// file path creation. use comma(,) after folder name to join the path
const filePath = path.join(process.cwd(),'emp.json');

// read existing data
const data = fs.readFileSync(filePath,'utf-8');

// convert data from json to object
const users = JSON.parse(data);

// create a new user
const newUser={
    name:'abc',
    id:'109',
    org:'Enosis'
}
users.push(newUser);

// write new user into json file
fs.writeFileSync(filePath, JSON.stringify(users, null, 2))

console.log('updated successfully')
console.log(users)
