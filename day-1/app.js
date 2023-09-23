// Asynchronous javascript

// fetching data from api and printing the name
// await always comes with async
const users = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    return userData;
}
const fetchData = async()=>{
    try{
        const data = await users();
        data.forEach((user)=>{
            console.log(user.name);
        });
    }
    catch(err){
        console.log("Something went wrong: " + err);
    }
}
fetchData();


/* // fetch and promise
const users = fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    return data.json();
})
.then((data)=>{
    console.log(data);
    return data;
})
.then((data)=>{
    data.forEach(element => {
        console.log(element.name);
    });
})
.catch((err)=>{
    console.log(err);
})
console.log("i will print before promise i'm not your waiter");
 */

/* // promise
const myPromise = new Promise((resolve,reject)=>{
        const error = true;
        if(!error){
            resolve("Promise Resolved");
        }
        else{
            reject("Promise Rejected");
        }
    })
.then((prom)=>{
    console.log(prom);
    return prom;
})
.catch((prom)=>{
    console.log(prom);
    return prom;
})
.then((prom)=>{
    console.log("this will work anyway "+prom)
})


 */