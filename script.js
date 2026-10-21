// let strong=[40,10,5,20,30]
// let res=strong.sort((a,b)=> a-b)
// console.log(res)

// let number=[10,20,30,40]
// let res=number.reduce((total,num)=>{
//     return total+num;
// },0);
// console.log(res);

// let number=[10,20,30,40]
// let res=number.reduce((total,num)=>{
//     return total+num;
// });
// console.log(res);


// let number=[10,20,30,40,50]
// let a=number.slice(1,3);
// let b=number.splice(2,1);
// console.log(a)
// console.log(b);

// let number=[10,20,15,5]
// let result=number.some((n)=>{
//     return n<30  //return n>20
// });
// console.log(result);

// let number=[10,50,15,5]
// let result=number.every((n)=>{
//     return n<30  //return n>20
// });
// console.log(result);

// let fruits = ["Apple", "Mango", "Banana"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);

// const employee = {
//     name: "Arun",
//     salary:30000
// }

// console.log(employee.name);
// console.log(employee["salary"]); 

// employee.salary = 35000;
// console.log(employee.salary);

// employee.city = "chennai";
// delete employee.city;
// console.log(employee);

// const student={
//     name:"Priya",
//     age:21,
//     course:"React"
    
// };
// const { name, age,course } = student;
// console.log(name);
// console.log(age);
// console.log(course);


// console.log(0 || 100);
// console.log(0 ?? 100);
// console.log(false || true);
// console.log(false ?? true);
// console.log(""?? 18);
// console.log(city ?? "chennai");

// const username=null
// const age=0
// const city=undefined;
// console.log(username || "Guest");
// console.log(age || 18);
// console.log(city || "chennai");


// greet();
// function greet(){
//     console.log("print")
// };

//DAY 5...............................................//////////


// console.log(res);
// const res=greet()=>{
//     console.log("print");
// };

//CLOUSRE

//  function account(){
//     let balance=1000;
//     function deposit(amount){
//         balance=balance+amount
//         console.log("balanceamonut"+balance);
//     }
//     return deposit;

//  }
//  const myaccount=account();
//  myaccount(500);
//  myaccount(700);

const admission=new Promise((resolve,reject)=> {
    const marks=85;
    if(marks >=50){
        resolve("Admission approved");

    }else {
        reject(new Error("Admission rejected"));

    }
})

admission
.then((result)=> console.log(result))
.catch((error)=> console.log(error))