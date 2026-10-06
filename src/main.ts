/////////////////////////Document

// ////////////////////////////////////Explicit Typing

// let age : number = 22
// let name : string='mohammadreza'
// let IsDeveloper:boolean=true
// let result:null=null
// let value : undefined=undefined

// console.log(name)
// console.log(age)
// console.log(IsDeveloper)
// console.log(result)
// console.log(value)

// //////////////////////////////Type Inference

// let name = 'mohammadreza'
// let age = 22
// let isDevelooper = true
// let reuslt = null
// let value = undefined

// name = 20
// console.log(name)
// console.log(age)
// console.log(isDevelooper)
// console.log(reuslt)
// console.log(value)

///////////////////////////////// ANY and UNKNOWN type///////////////////////
// let value : any= 20
// console.log(value)

// value = []
// console.log(value)

// value={}
// console.log(value)

// value='mohammadreza'
// console.log(value)

// value=undefined
// console.log(value)

// value=null
// console.log(value)

// let value2 : unknown='unknown type'
// if(typeof value2=='string'){
//     console.log(value2.toUpperCase())
// }

///////////////////////////////////////////Type Narrowing or multi type

// let value : string | number;
// value = 'mohammadreza'
// console.log(value)
// value = 22
// console.log(value)

// function test(value:string|number){
// if (typeof value==='string'){
//     console.log(value.toUpperCase())
// }else{
//     console.log(value.toFixed(2))

// }

// }

// test("hello world")
// test(4)

///////////////////////////////////////Union Type/////////////////////////////
// type Role = "admin" | "user" | "moderator";

// let role: Role = "admin";
// console.log(role)

// function handleStatus(status: "loading" | "success" | "error") {
//     if(status==='loading'){
//         console.log("process is loading")
//     }else if(status==='success'){
//         console.log("process is success")

//     }else if(status==='error'){
//         console.log("process is error")

//     }

// }
// handleStatus('loading')

////////////////////////////////////////////Object Types////////////////////

// const users:{id:number,name:string,role:'admin'|'user'|'guest'

// }={
//     id: 1,
//     name: 'mohammadreza',
//     role: 'admin'
// }

// //////////////////////////////////////////Interface/////////////////////
// interface User{
//     name:string
//     age:number
//     city:string

// }

// const user1:User={
//     name:"mohammadreza",
//     age:22,
//     city:"new york",

// }
// interface Product{
//     title:string
//     product_name:string
//     price:number
//     stock:number
// }
// let product1:Product={
//     title:"phone",
//     product_name:"iphone 18 pro max",
//     price:1300,
//     stock:6,

// }
// console.log(user1)
// console.log(product1)

// /////////////////////interface extends to another interface ////////////////////
// interface User{
//     name:string
//     age:number
//     city:string

// }

// interface Admin extends User{
//     permissions:string[]
// }
// let admin1:Admin = {
//     name:"alireza",
//     age:26,
//     city:"mashhad",
//     permissions : ['staff','active']
// }
// console.log(admin1)

////////////////////////interface with Optional Properties ////////////////////

// interface User {
    //   name: string;
//   age: number;
//   city?: string;
// }
// let user_one: User = {
    //   name: "mohammadreza",
//   age: 22,
//   // city:"new york"        this property is optional
// };
// console.log(user_one);
// if (user_one.city) {
    //   console.log("city is include ");
    // } else {
//   console.log("city is not available ");
// }

////////////////////////interface with readonly Properties ////////////////////

// interface User{
    //     readonly id :number //readonly property
//     name:string
//     age:number
//     city?:string //optional property

// }
// let user_one:User={
//     id:1,
//     name:"mohammadreza",
//     age:22,
//     city:"new york"
// }
// console.log(user_one)


// user_one.name = "alireza"
// // user_one.id = 5 //error => because of the readonly property cant be change after get a value 

// console.log(user_one)


////////////////////////interface with add method that means when you use a type which has a function you should use a function in your variable ////////////////////

// interface User{
//     name:string
//     greet():void
// }

// let user:User={
//     name:"mohammadreza",
//     greet(){
//         console.log("interface with method")
//     }
// }
// console.log(user)
// user.greet()

///////////////////////////////////////// with parameter

interface User{
    name:string,
    greet(message:string):string
}
let user:User={
    name:"mohammadreza",
    greet(message){
        return `my cousin is : ${message}`
    }
}
console.log(user.greet('alireza'))