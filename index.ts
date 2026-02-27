//!typescript -->superset of js
//tsc -->file extension

//*data types

//nummber

let b :number;
b=23

//string

let c :string=""

//boolean

let d :boolean = false;

//null
let e :null;
// e=45;

//undefined
let f :undefined ;

//enum

//!any

// let b ;   value asign nagarda any hunxa datatype . yo js jastai vayo so avaoid this .

let x:any;
x="any"
console.log(x.toUpperCase());  //erroro falxa runtime ma any le

//!unknown

let g:unknown ;
g=34
g="1"
// g=23;

// if(typeof g === "string"){
// console.log(g.charAt(2))    //compile time ma error falxa
// }

// if(typeof g === "string"){
// console.log(g.padStart(4,"0"))   
// }



//!variable declaration methods

//let const var

let a = 12;
console.log(a)
// a=""      --->cannt assign string 


 

//!array

// let numbers = ["",432,true]
// let numbers:number[]=[34,43,23,23]
// numbers.push(63)
// console.log(numbers)


let numbers:number[]=[34,43,23,23]
// let users:number[]=[34,43,23,23]
      //or talako generics use garera
let users : Array<string>=["a","b"] //users:string


//!tuple -->fixed length array . paila infinite data halintheo aile limited . jati wota declare garyo tei wotai data huna parxa badi ghati huna vayena
// let user_tuple:[string,string,string]=["john","john@gmail.com","john123"]
// let user_tuple:[string,string,number]=["john","john@gmail.com",89]



//!enum

enum Role{
    ADMIN="admin",
    USER="user",
    SUPER_ADMIN="super admin",
}

// console.log(Role.ADMIN)
// console.log(Role.USER)
// console.log(Role.SUPER_ADMIN)


// let user_tuple:[string,string,Role]=["john","john@gmail.com",Role.ADMIN]
// console.log(user_tuple)


//!object type pass garni tarika

// let user:{name:string ; email:string} = {
//     name:"john",
//     email:"abc@gmail.com",
// }



// let user2:{name:string ; email:string} = {
//     name:"john",
//     email:"abc@gmail.com",
// }


//!interface--->obj ko shape define garna help garca


// interface IUser {               //sab field req hunca parxa . yedi ? symbol ayo vani tesma chai data haleni payo nahale ni payo i.e optional field
//     name?:string,               //optional
//     email:string,
//     readonly pass:number        //cannot edit/change pass field
// }

// let user:IUser= {
//     // name:"john",            yo nahalehi payo bcz name is an optional field
//     email:"abc@gmail.com",
//     pass:3423
// }


// user.email="abc2@gmail.com"         //yo milyo
// // user.pass=374823                    //yo milena bcz pass is readonly 

// let user2:IUser= {
//     name:"john",
//     email:"abc@gmail.com",
//     pass:3423324

// }





interface IUser {               //sab field req hunca parxa . yedi ? symbol ayo vani tesma chai data haleni payo nahale ni payo i.e optional field
    name?:string,               //optional
    email:string,
    readonly pass:number        //cannot edit/change pass field
}

interface IUser2 extends IUser{
    role:Role;
}

let user:IUser= {
    // name:"john",            yo nahalehi payo bcz name is an optional field
    email:"abc@gmail.com",
    pass:3423
}


user.email="abc2@gmail.com"         //yo milyo
// user.pass=374823                    //yo milena bcz pass is readonly 

let user2:IUser2= {
    name:"john",
    email:"abc@gmail.com",
    pass:3423324,
    role:Role.ADMIN
}



//UTILITY TYPE




