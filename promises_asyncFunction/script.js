function asyncFunc(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data1");
        resolve("Success");
      }, 4000);
    });
};
console.log("Fetching data1....");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
});

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success");
        },3000);
    });
};

//Promise Chain

getData(1)
.then((res) => {
    return getData(2);
})
.then((res) => {
    console.log(res);
});


// Async-await
// we use it so we can access data only when we have to access like- access first data then second and then third
// async function always returns a promise
async function hello() {
 console.log("hello");
}
function api () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Weather Data");
        resolve(200);
        }, 2000)
    });
}
async function getWeatherData (){
    await api(); // 1st call
    await api(); //2nd call
}
