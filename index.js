console.log("Hello World");
function sayHello() {
    console.log("Hello from sayHello function");
}
sayHello();
console.log("This is a simple JavaScript program");

console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("Hello World");
},5000);
console.log("three");
console.log("four");

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,ds){
    ds(a,b);
}

calculator(5,10,sum);

calculator(5,10,(a,b)=>{
    console.log(a+b);
});

console.log("one");
console.log("two");
const hello = ()=>{
    console.log("Hello World");
}
setTimeout(hello, 5000);
console.log("three");
console.log("four");

for(let i = 0; i < 5; i++)
{
    let str="";
    for(let j = 0; j < 5; j++)
    {
        str += j;
    }

    console.log(i,str);
}

function getData(dataid){
    setTimeout(()=>{
        console.log("Fetching data for id:", dataid);
    }, 5000);
}
getData(1);
getData(2);
getData(3);

function getData(dataid, getnextdata) {
    setTimeout(()=> {
        console.log("Fetching data for id:", dataid);
        if (getnextdata) {
            getnextdata();
        }
    }, 2000);
}

getData(1,()=>{
    console.log("getting data 2.....")
    getData(2,()=>{
        console.log("gettijg data 3.....")
        getData(3);
    });
});


const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const success  = true;
        if (success) {
            resolve("Data fetched successfully");
        } else {
            reject("Error fetching data");
        }
    }, 2000);
});

myPromise
.then((data) => {
    console.log("Promise resoloved with data:", data);
})
.catch((error) => {
    console.error("Promise rejected with error:", error);
});

let promise= new Promise((resolve, reject)=>{
    console.log("i am a promise");
    if(1<0){
        resolve(123);
    }
    reject("Something went wrong");
})


function getData(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data for id:", dataid);
            resolve("success");
        }, 2000);
    });
}
let result=getData(123);
result;

let result=getData(123);
result;
getData(101)
.then(result => {
    console.log("First fetch:", result);
})

.then(result => {
    console.log("Second fetch:", result);
    return getData(103)
})


function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data for id:", id);
            resolve( id);
        }, 1000);
    });
}

async function fetchData() {
    try {
        const data1 = await getData(101);
        console.log("First fetch:", data1);
        const data2 = await getData(102);
        console.log("Second fetch:", data2);
        const data3 = await getData(103);
        console.log("Third fetch:", data3);
    } catch (error) {
        console.error("Error occured:", error);
    }
}
fetchData();

async function getnextData() {
    console.log("getting data 1....");
    await getData(1);
     console.log("getting data 2....");
    await getData(2);
     console.log("getting data 3....");
    await getData(3);
}
getnextData();

