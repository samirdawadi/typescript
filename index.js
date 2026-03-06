//!typescript -->superset of js
//.ts -->file extension
//npm i -g typescript  -->for iinstalling typescript
// tsc -v     --->to check version
//tsc filename.ts  ---> yesle same file with filename.js file banaidinxa which helps to compile the ts file bcz nodejs donot understand typescript
/*
 👉 TypeScript browser ले सिधै बुझ्दैन।
     Browser ले JavaScript मात्र बुझ्छ।
     TypeScript लाई JavaScript मा बदल्न (compile गर्न) यो command प्रयोग गरिन्छ।
*/
/*
 यी सबै TypeScript-only feature हुन्:
enum
interface
type
Type annotation (: string, : number)
Access modifier (public, private)
 */
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
/*  Tuple भनेको
👉 Fixed type र fixed order भएको special array हो। */
// let user_tuple:[string,string,string]=["john","john@gmail.com","john123"]
// let user_tuple:[string,string,number]=["john","john@gmail.com",89]
// const student: { name: string; roll: number } = {
//   name: "samir",
//   roll: 7632
// };
//!enum  -->yo pani dataype jasto behave garxa . constant value haru store garxa
// enum Role{
//     A=100,      //YESMA =100 DIYENA VANI 0 DEKHI DEFAULT VALUE SET HUNXA AGADI KO KEY PAXADI KO VALUE
//     U,
//     S
// }
// console.log(Role.A)  --> 101
// console.log(Role.U)  --> 102
// console.log(Role.S)  --> 103
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["SUPER_ADMIN"] = "super admin";
})(Role || (Role = {}));
// let user:IUser= {
// name:"john",            yo nahalehi payo bcz name is an optional field
//     email:"abc@gmail.com",
//     pass:3423
// }
// user.email="abc2@gmail.com"         //yo milyo
// user.pass=374823                    //yo milena bcz pass is readonly 
var user2 = {
    name: "john",
    email: "abc@gmail.com",
    pass: 3423324,
    role: Role.ADMIN
};
//?UTILITY TYPE
//required
//pick
//function types
// const add  = (a,b)=>{
//     return a+b
// }
// add(12,45)
// add("a","b")
var add = function (a, b) {
    return a + b;
};
console.log(add(12, 45));
var resStatus;
resStatus = "error";
resStatus = "success";
var a_and_b = {
    a: '',
    b: ''
};
var a_or_b = {
    a: '',
    b: ''
};
var ia = {
    A: '',
    B: ""
};
var sub = function (a, b) {
    return a - b;
};
var subb = function (a, b) {
    // return a-b
    console.log(a, b);
};
var str_Box = {
    value: "str"
};
var box = {
    value: {
        x: 1,
        y: 1
    }
};
console.log(str_Box);
console.log(box);
var getFirstEl = function (arr) {
    return arr[0];
};
console.log(getFirstEl([323, 234, 432, 23]));
console.log(getFirstEl(["dfs", "3422", "jahsdgfjs"]));
