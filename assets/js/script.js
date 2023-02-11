// function getCount(num){
//     console.log(num)
//     getCount(num)

// }
// getCount(4)

// function getCount(num){
//     console.log(num);

//     let number = num-1;

//     if (number>0) {
//         getCount(num-1)
//     }
// }
// getCount(5)

// function getSumOfNumbers(num){
//     let sum=0;
//     for(let i=1;i<=num;i++){
//     sum+=i;
//     }
//     console.log(sum)
// }
// getSumOfNumbers(4)

// function getSumOfNumbers(num){
//     if(num==1){
//         return num;
//     }
//     else{
//         num+getSumOfNumbers(num-1)
//     }
// }
// console.log(getSumOfNumbers(4))


// function getFactorial(num){
//     if(num==1){
//         return num;
//     }
//     else{
//         return num*getFactorial(num-1)
//     }
// }
// getFactorial(3)


// let numbers=[1,2,3,5,6];

// numbers.forEach((element,index)=> {
//     numbers[index]=element*2
    
// });
// console.log(numbers)

// let num=[12,4,6,5,7]
// for (const item of num) {
//     console.log(item)
    
// }

// let user1={
//     name:"Gultaj",
//     surname:"Jafarova",
//     age:18
// }
// let user2={
//     name:"Lale",
//     surname:"Quliyeva",
//     age:25
// }

// let user3={
//     name:"Novreste",
//     surname:"Aslanzade",
//     age:25
// }

// let users=[user1,user2,user3]


// for (const item of users) {
//       if(item.age>20){
//         console.log('${item.name}')
//       }
    
// }

// for (const item of users) {
// for (const key in item) {
//  if(key=="surname"){
//     console.log(key+"/"+item[key])
//  }
//  }
// }

// users.forEach((element,index) => {
//     for (const key in user) {
//   console.log(element[key])
//  }
// });


///map

// let arr1=[1,2,3,4];

// let arr2=arr1;

// arr2[0]=100;

// console.log(arr1)


// let nums=[2,3,4,5,6,9];

// let copyArr=[...nums];
// console.log(copyArr);

// let stu={
//     name:"Anar",
//     surname:"Huseynov",
// }

// let objct={...stu}

// console.log(objct)

// let result=nums.map(m=>{
//   return m*2;
// })

// console.log(nums)
// console.log(result)

// function getNumbers(...arr){
//     for (const item of arr) {
//         console.log(item+"/"+n)
        
//     }
// }
// getNumbers(1,2,3,34,9)


//  let user1={
//      name:"Gultaj",
//      surname:"Jafarova",
//      age:18
// }
//  let user2={
//      name:"Lale",
//      surname:"Quliyeva",
//      age:25
//  }

//  let user3={
//      name:"Novreste",
//      surname:"Aslanzade",
//      age:25
//  }

//  let users=[user1,user2,user3]

//  const showAverageByAge=(arr)=>{
//     let sumofAge=0;
//     for (const item of arr) {
//         sumofAge+=item.age;

        
//     }
//     return sumofAge/arr.length;
  

//  }
// console.log( showAverageByAge(users))


// function sumOfOdd(arr){
//     let sum=0
//     for (const item of arr) {
//         if(item%2==1){
//             sum+=item

//         }
//     }
//     return sum;

// }

// function sumOfEven(arr){
//     let sum=0
//     for (const item of arr) {
//         if(item%2==0){
//             sum+=item

//         }
//     }
//     return sum;

// }


// function sumGreaterThanFive(arr){
//     let sum=0
//     for (const item of arr) {
//         if(item>5){
//             sum+=item

//         }
//     }
//     return sum;

// }

// let nums=[1,2,3,4,5,7,8,10]

// let result=sumGreaterThanFive(nums)
// console.log(result)


//callback


// const checkOdd=()=>{
//     return num%2==1
// }

// const checkEven=()=>{
//     return num%2!==1
// }



// function sumOfNumberByCondition(arr,callback1,callback2){
//         let sum1=0
//         let sum2=0
//         for (const item of arr) {
//             if(callback1(item)){
//                 sum1+=item;
    
//             }
//         }
//         for (const item of arr) {
//             if(callback2(item)){
//                 sum2+=item;
    
//             }
//         }
//         return sum1+sum2;
    

// }


// let result1=sumOfNumberByCondition(nums,checkOdd,checkEven)
// console.log(result1)

// let result2=sumOfNumberByCondition(nums,checkEven)
// console.log(result2)

// let user1={
//     name:"Gultaj",
//     surname:"Jafarova",
//      age:18,
//      email:"gultaj@mail.ru"
// }
// let user2={
//      name:"Lale",
//      surname:"Quliyeva",
//      age:25,
//      email:"lalaig@code.edu.az"
//  }

// let user3={
//     name:"Novreste",
//      surname:"Aslanzade",
//      age:18,
//      email:"Novreste@gmail.com"
// }


// function checkEmail(obj){
//     for(let i=0;i<obj.email.length;i++){
//         if(obj.email[i]=="t"){
//             return true;
//         }
//     }
//     return false

// }

//  let users=[user1,user2,user3]
// function checkAge(obj){
//     return obj.age>18;

// }

// function checkName(obj){
//     return obj.name=="Novreste"

// }
// function getdatasByFilter(users,callback){
//     for (const item of user) {
//         if(callback(item)){
//             console.log(item.name)
//         }
        
//     }

// }

// getdatasByFilter(users,checkAge)

// getdatasByFilter(users,m=>m.age>20)


// getdatasByFilter(users,checkName)

// getdatasByFilter(m=>m.name="novreste")

// // getdatasByFilter(users,checkEmail)


// let result=users.filter(m=>m.name="Novreste");
// function getSumOfNumbers(num){
//     let sum=0;
//     for(let i=1;i<=num;i++){
//     sum+=i;
//     }
//     console.log(sum)
// }
// getSumOfNumbers(4)

// function getSumOfNumbers(num){
//     if(num==1){
//         return num;
//     }
//     else{
//         num+getSumOfNumbers(num-1)
//     }
// }
// console.log(getSumOfNumbers(4))


// function getFactorial(num){
//     if(num==1){
//         return num;
//     }
//     else{
//         return num*getFactorial(num-1)
//     }
// }
// getFactorial(3)


// let numbers=[1,2,3,5,6];

// numbers.forEach((element,index)=> {
//     numbers[index]=element*2
    
// });
// console.log(numbers)

// let num=[12,4,6,5,7]
// for (const item of num) {
//     console.log(item)
    
// }

// let user1={
//     name:"Gultaj",
//     surname:"Jafarova",
//     age:18
// }
// let user2={
//     name:"Lale",
//     surname:"Quliyeva",
//     age:25
// }

// let user3={
//     name:"Novreste",
//     surname:"Aslanzade",
//     age:18
// }

// let users=[user1,user2,user3]


// for (const item of users) {
//       if(item.age>20){
//         console.log('${item.name}')
//       }
    
// }

// for (const item of users) {
// for (const key in item) {
//  if(key=="surname"){
//     console.log(key+"/"+item[key])
//  }
//  }
// }

// users.forEach((element,index) => {
//     for (const key in user) {
//   console.log(element[key])
//  }
// });


///map

// let arr1=[1,2,3,4];

// let arr2=arr1;

// arr2[0]=100;

// console.log(arr1)


// let nums=[2,3,4,5,6,9];

// let copyArr=[...nums];
// console.log(copyArr);

// let stu={
//     name:"Anar",
//     surname:"Huseynov",
// }

// let objct={...stu}

// console.log(objct)

// let result=nums.map(m=>{
//   return m*2;
// })

// console.log(nums)
// console.log(result)

// function getNumbers(...arr){
//     for (const item of arr) {
//         console.log(item+"/"+n)
        
//     }
// }
// getNumbers(1,2,3,34,9)



// let nums=[1,2,3,4,5,7,8,10]

// let result=sumGreaterThanFive(nums)
// console.log(result)


//callback


// const checkOdd=()=>{
//     return num%2==1
// }

// const checkEven=()=>{
//     return num%2!==1
// }



// function sumOfNumberByCondition(arr,callback1,callback2){
//         let sum1=0
//         let sum2=0
//         for (const item of arr) {
//             if(callback1(item)){
//                 sum1+=item;
    
//             }
//         }
//         for (const item of arr) {
//             if(callback2(item)){
//                 sum2+=item;
    
//             }
//         }
//         return sum1+sum2;
    

// }


// let result1=sumOfNumberByCondition(nums,checkOdd,checkEven)
// console.log(result1)

// let result2=sumOfNumberByCondition(nums,checkEven)
// console.log(result2)


//   let user1={
//      name:"Gultaj",
//      surname:"Jafarova",
//       age:18
//  }
//  let user2={
//       name:"Lale",
//       surname:"Quliyeva",
//       age:25
//   }

//  let user3={
//      name:"Novreste",
//       surname:"Aslanzade",
//       age:25
//  }

//   let users=[user1,user2,user3]




//  let users=[user1,user2,user3]
// function checkAge(obj){
//     return obj.age>18;

// }

// function checkName(obj){
//     return obj.name=="Novreste"

// }
// function getdatasByFilter(users,callback){
//     for (const item of user) {
//         if(callback(item)){
//             console.log(item.name)
//         }
        
//     }

// }

// getdatasByFilter(users,checkAge)

// getdatasByFilter(users,m=>m.age>20)


// getdatasByFilter(users,checkName)

// getdatasByFilter(m=>m.name="novreste")

// // getdatasByFilter(users,checkEmail)


// let result=users.filter(m=>m.name="Novreste");
