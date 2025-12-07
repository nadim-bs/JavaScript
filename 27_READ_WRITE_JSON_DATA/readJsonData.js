// 1st way
// import {readFileSync} from 'fs';
// const emp = JSON.parse(readFileSync('./emp.json', 'utf-8'))

// // print imported json data
// console.log(`name: ${emp[0].name}, id: ${emp[0].id}, org: ${emp[0].org}`);


// 2nd way
// this will work when project uses ES modules ("type": "module" in package.json)
import empD from './emp.json' assert {type : 'json'};
console.log(`name: ${empD[0].name}, id: ${empD[0].id}, org: ${empD[0].org}`);