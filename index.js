//!typescript -->superset of js
//tsc -->file extension
//*data types
//nummber
var b;
b = 23;
//string
var c = "";
//boolean
var d = false;
//null
var e;
// e=45;
//undefined
var f;
//enum
//!any
// let b ;   value asign nagarda any hunxa datatype . yo js jastai vayo so avaoid this .
var x;
x = "any";
console.log(x.toUpperCase()); //erroro falxa runtime ma any le
//!unknown
var g;
g = 34;
g = "1";
// g=23;
// if(typeof g === "string"){
// console.log(g.charAt(2))    //compile time ma error falxa
// }
// if(typeof g === "string"){
// console.log(g.padStart(4,"0"))   
// }
//!variable declaration methods
//let const var
var a = 12;
console.log(a);
// a=""      --->cannt assign string 
//!array
// let numbers = ["",432,true]
// let numbers:number[]=[34,43,23,23]
// numbers.push(63)
// console.log(numbers)
var numbers = [34, 43, 23, 23];
// let users:number[]=[34,43,23,23]
//or talako generics use garera
var users = ["a", "b"]; //users:string
//!tuple -->fixed length array . paila infinite data halintheo aile limited . jati wota declare garyo tei wotai data huna parxa badi ghati huna vayena
// let user_tuple:[string,string,string]=["john","john@gmail.com","john123"]
// let user_tuple:[string,string,number]=["john","john@gmail.com",89]
//!enum
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["SUPER_ADMIN"] = "super admin";
})(Role || (Role = {}));
var user = {
    // name:"john",            yo nahalehi payo bcz name is an optional field
    email: "abc@gmail.com",
    pass: 3423
};
user.email = "abc2@gmail.com"; //yo milyo
// user.pass=374823                    //yo milena bcz pass is readonly 
var user2 = {
    name: "john",
    email: "abc@gmail.com",
    pass: 3423324,
    role: Role.ADMIN
};
//UTILITY TYPE
