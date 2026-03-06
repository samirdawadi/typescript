//!typescript -->superset of js
//.ts -->file extension
//npm i -g typescript  -->for installing typescript
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

let b: number;
b = 23;

//string

let c: string = "";

//boolean

let d: boolean = false;

//null
let e: null;
// e=45;

//undefined
let f: undefined;

//enum

//!any

// let b ;   value asign nagarda any hunxa datatype . yo js jastai vayo so avaoid this .

let x: any;
x = "any";
console.log(x.toUpperCase()); //erroro falxa runtime ma any le

//!unknown

let g: unknown;
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

let a = 12;
console.log(a);
// a=""      --->cannt assign string

//!array

// let numbers = ["",432,true]
// let numbers:number[]=[34,43,23,23]
// numbers.push(63)
// console.log(numbers)

let numbers: number[] = [34, 43, 23, 23];
// let users:number[]=[34,43,23,23]
//or talako generics use garera
let users: Array<string> = ["a", "b"]; //users:string

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

enum Role {
  ADMIN = "admin",
  USER = "user",
  SUPER_ADMIN = "super admin",
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

//yesma harek user ko lagi type declare garerakhna paryo tara yeslai sajilo tarika le garna help garxa interface le

//!interface--->obj ko shape define garna help garca

/*
    Interface भनेको
    👉 Object को structure define गर्ने template हो।

    यसले object मा कस्तो key र type हुन्छ भनेर describe गर्छ।

    Interface ले code safe, readable र maintainable बनाउँछ।
 */

// interface IUser {               //sab field req huna parxa . yedi ? symbol ayo vani tesma chai data haleni payo nahale ni payo i.e optional field
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

interface IUser {
  //sab field req hunca parxa . yedi ? symbol ayo vani tesma chai data haleni payo nahale ni payo i.e optional field
  name?: string; //optional
  email: string;
  readonly pass: number; //cannot edit/change pass field
}

interface IUser2 extends IUser {
  role: Role;
}

// let user:IUser= {
// name:"john",            yo nahalehi payo bcz name is an optional field
//     email:"abc@gmail.com",
//     pass:3423
// }

// user.email="abc2@gmail.com"         //yo milyo
// user.pass=374823                    //yo milena bcz pass is readonly

let user2: IUser2 = {
  name: "john",
  email: "abc@gmail.com",
  pass: 3423324,
  role: Role.ADMIN,
};

//!2nd class of ts

//?UTILITY TYPE

//required
//pick

//function types

// const add  = (a,b)=>{
//     return a+b
// }

// add(12,45)
// add("a","b")

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(12, 45));
// add("a","b")

//?void --->no return type

// const greet = (name:string)=>{
//     console.log("hello",name)
// }

// console.log(greet("john"))

//?never--->func ko body bata kunai kura throw gariraxa vani teslai never vaninxa

// const neverFunc = () : never=>{
//     console.log("hello");               yo auxa output ani talako le error faldinxa
//     throw "hello";
// }

//! Important Difference in Code Flow

// function test(): never {
//   throw new Error("Error");
// }

// console.log("Before");
// test();
// console.log("After"); // ❌ यो line कहिल्यै run हुँदैन

// But:

// function test2(): void {
//   console.log("Hello");
// }

// console.log("Before");
// test2();
// console.log("After"); // ✅ यो run हुन्छ

// interface user{
//     name:string,
//     email:string
// }

// const gg= (name:string,email:string):user =>{
//    return {name, email}
// }
// console.log(gg("ram","ram@gmail.com"))

//?union[ | ] and intersection [ & ]

//!union

/**
   Union type le vancha — value yo type ya tyo type hun sakcha.

👉 Symbol: |
👉 Meaning: OR

   */

// let id:string;
// id="1"

//!type alias
/**
 Type Alias भनेको existing type लाई नयाँ नाम दिने process हो।

👉 type keyword use गरेर बनाइन्छ।
👉 Long ya complex type लाई short name दिन use हुन्छ।
 */

// type ID=string | number
// let id:ID;
// let user: ID

// id="1"
// id=63724

//custom type:

type STATUS = "error" | "success";
let resStatus: STATUS;
resStatus = "error";
resStatus = "success";

//object type
// type UserType ={
//     name:string,
//     email:string,
//     pass:number,
//     phone?:string,
// }

// const u:UserType = {
//     email:'',
//     name:'',
//     pass:
// };

//!intersection

/**
 Intersection type le vancha — value ma duita type ko sabai properties hunuparcha.

👉 Symbol: &
👉 Meaning: AND

 */

type A = {
  a: string;
};

type B = {
  b: string;
};

let a_and_b: A & B = {
  a: "",
  b: "",
};

let a_or_b: A | B = {
  //kita type A kita B yeauta chai include huna parxa
  a: "",
  b: "",
};

interface IA {
  A: string;
}

interface IA {
  B: string;
}

let ia: IA = {
  //yesma duitai mathiko interfce include huna parxa i.e A ra B nai natra error auxa.interface multiple time same name definr garyo vani teslai comnine gardinxa ani duitai lai use garnai parxa tara type ma testo hudaina
  A: "",
  B: "",
};

//funtion type

type FunctionType = (x: number, y: number) => number;

const sub: FunctionType = (a, b) => {
  return a - b;
};

type FunctionType1 = (x: number, y: number) => void;

const subb: FunctionType1 = (a, b) => {
  // return a-b
  console.log(a, b);
};

//class

// interface IPerson {
//     name: string,
//     email: string,
//     password: string,
//     getPassword:  () => string,
//     getEmail: () => string
// }

// class Person implements IPerson
// {
//     public name: string;
//     protected email: string;
//     private password: string;

//     constructor(name: string, email: string, password: string) {
//         this.email = email;
//         this.name = name;
//         this.password = password;
//     }

//     getEmail(){
//         return this.email
//     }
//     getPassword(){
//         return this.password
//     }
// }

//!generic type
//Generic = "Write once, use for many types"
//Generic type भन्नाले type लाई flexible बनाउने concept हो।
//यसले same code लाई different data types सँग safely प्रयोग गर्न दिन्छ।
//Generic = type लाई parameter जस्तै pass गर्ने system

interface IBox<T> {
  value: T;
}

let str_Box: IBox<string> = {
  value: "str",
};

let box: IBox<{ x: number; y: number }> = {
  value: {
    x: 1,
    y: 1,
  },
};

console.log(str_Box);
console.log(box);

const getFirstEl = <T>(arr: T[]): T => {
  return arr[0];
};

console.log(getFirstEl<number>([323, 234, 432, 23]));
console.log(getFirstEl<string>(["dfs", "3422", "jahsdgfjs"]));
