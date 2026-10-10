








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

// interface User{
    //     name:string,
    //     greet(message:string):string
    // }
    // let user:User={
        //     name:"mohammadreza",
        //     greet(message){
            //         return `my cousin is : ${message}`
            //     }
            // }
            // console.log(user.greet('alireza'))
            
            

/////////////////////////////////////////////////////////// function ///////////////////

// function add(a:number, b: number): number {
//     return a+b
// }

// console.log(add(10,10))

/////////////////////////////////////////////////////////// Function Type ///////////////////
// type AddFunction = (a:number,b:number)=>number
// const add :AddFunction=(a,b)=>{
//     return a+b
// }

// console.log(add(10,10))



///////////////////////////////////////////FUNCTION TYPES IN INTERFACE///////////////////////

// interface Calculator{
    //     add(a:number,b:number):number
//     multiple(a:number,b:number):number

// }


// let calculator:Calculator={
    //     add(a,b){
//         return a+b
//     },
//     multiple(a, b) {
    //         return a*b
    
//     },
// }
// console.log(calculator.add(10,10))
// console.log(calculator.multiple(10,10))

///////////////////////////////////////////FUNCTIONS WITH REST PARAMETERS///////////////////////
// function sum(...numbers:number[]):number{
//     return numbers.reduce((total,number)=>total+number,0)/numbers.length


// }
// console.log(sum(19,19,19,100))


/////////////////////////////////////////// FUNCTION WITH CALLBACK ///////////////////////////////

// type Operation = (a:number,b:number) => number
// function Calculate(a:number,b:number,operation:Operation):number{
    //     return operation(a,b)
    // }
    // let add : Operation=(a,b)=>a+b;
    // let subtract : Operation=(a,b)=>a-b;
    // let multiple : Operation=(a,b)=>a*b;
    // let divide : Operation=(a,b)=>a/b;
    // console.log(Calculate(10,10,add))
    // console.log(Calculate(10,10,subtract))
    // console.log(Calculate(10,10,multiple))
    // console.log(Calculate(10,10,divide))
    
/////////////////////////////////////////// FUNCTION WITH CALLBACK with interface///////////////////////////////

// interface Calculate{
    //     add(a:number,b:number):number
//     multiply(a:number,b:number):number
// }
// const calculate:Calculate={
//     add(a:number,b:number){
//         return a+b
//     },
//     multiply(a:number,b:number){
    //         return a*b
    //     }
    // }
    
// console.log(calculate.add(10,10))
// console.log(calculate.multiply(10,10))

/////////////////////////////////////////// Intersection Types (&) ///////////////////////////////

// type User = {
    //     name : string
    //     age:number

    // }
    // type Admin  = {
        //     permissions : string[]
        // }
        // type UserAdmin  = User&Admin
        
        // const admin : UserAdmin={
            //     name : "mohammadreza",
            //     age:22,
            //     permissions : ['staff']
            // }
            // console.log(admin)
            
/////////////////////////////////////////// Generics ///////////////////////////////

// function getValue<T>(value:T):T{
//     return value

// }

// const result1 = getValue<string>('hello')
// const result2 = getValue<number>(1)
// const result3 = getValue<boolean>(true)
// console.log(result1)
// console.log(result2)
// console.log(result3)

// //////////////////////////////////////////////////////WITHOUT EXTENDS
// function FirstItem<T>(list: T[]):T|undefined{
    //     return list[0]
    // }
    // const result1 = FirstItem<string>(['item1','item2'])
// const result2 = FirstItem<number>([1,10])
// const result3 = FirstItem<boolean>([false,true])
// console.log(result1)
// console.log(result2)
// console.log(result3)

////////////////////////////////////////////////////////WITH EXTENDS

// function GetLength <T extends {length:number}>(value:T):number{
    //     return value.length
    // }
    // console.log(GetLength("mohammadreza"))
    // console.log(GetLength([10,100,500,600]))



/////////////////////////////////////////////////////////////GENERIC INTERFACE


// interface Api<T>{
//         success :boolean
//         data:T
//     message:string

// }
// const response :Api<unknown> ={
//     success : true,
//     data:{"data":"mohammadreza"},
//     message:"ok"

// }

/////////////////////////////////////////////////////////////GENERIC INTERFACE INCLUDE TYPES

type User={
    id:number
    name:string
    
}
interface Api<T> {
    success : boolean
    data : T

}
let response :Api<User>={
    success:true,
    data:{id:1,name:"mohanammadreza"}

}
console.log(response)