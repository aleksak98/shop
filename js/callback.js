function ispisi1(){
    setTimeout(function(){console.log('1');},5000);
}
//ovde ulazi odmah u funkciju, pa onda ceka 5 sekundi da se izvrsi
function ispisi2(){
    console.log('2');
}

function ispisi3(){
    console.log('3');
}

function ispisi4(broj,callBack){
    console.log(broj);
    callBack();
}

function uzmiX(callBack){
    callBack();
}

function ispisX(){
    console.log('x');
}

// setTimeout(ispisi3,10000);
//ovde ne ulazi odma u funkciju, nego tek posle 10 sekundi

// ispisi1();
// ispisi2();
// ispisi4(4,function(){console.log('5');});
// uzmiX(ispisX);

//let i const, promise funkcija

// console.log('Proba');
//
// for (var i=0; i<5; i++) {
//     setTimeout( function() {
//         console.log(i);
//     }, 1000);
// }
//
// for (let i=0; i<5; i++) {
//     setTimeout( function() {
//         console.log(i);
//     }, 1000);
// }
//
// var x = "Pera";
// console.log(x);
// let g = "Marko";
// console.log(g);
// const z = "Jovica";
// console.log(z);

//Uncaught ReferenceError: l is not defined
// for (let l=0; l<5; l++) {
//
// }
// for (let l=0; l<5; l++) {
//     console.log(l);
// }
//
// for(let s = 0;s<5;s++){
//     console.log(s);
// }

// function asinhronaFunkcija() {
//     return new Promise(function () {
//
//     });
// }
// asinhronaFunkcija();

// function asinhronaFunkcija() {
//     return new Promise(function (resolve, reject) {
//         if (uspesno) {
//             resolve(value);
//         }
//         else {
//             reject(error);
//         }
//     });
// }
// asinhronaFunkcija();

// let firstResult = new Promise(function (resolve, reject) {
//     resolve("done");
// });
// console.log(firstResult);
//
// let secondResult = new Promise(function (resolve, reject) {
//     setTimeout(()=>resolve("Done"), 1000);
// });
// console.log(secondResult);
//
// // secondResult.then(
// //     result => alert(result)
// // );
//
// let thirdResult = new Promise(function (resolve, reject) {
//     resolve([1,2,3,4,5]);
// });
// console.log(thirdResult);
//
// function niz(value) {
//     console.log(value);
//     return value;
// }
// thirdResult.then(niz);
//
// // let thirdResult2 = new Promise(function(resolve, reject) {
// //     setTimeout(() => reject(new Error("Error")), 1000);
// // });
// // thirdResult2.catch(alert);
//
// let d= 5;
// let o = "Petar";
// let w = new Promise(function (resolve, reject) {
//     setTimeout(()=>resolve("skola"),3000);
// });
// Promise.all([d,o,w]).then(niz);
//
// let x2 = 6;
// let y2 = "Petar";
// let z2 = new Promise(function (resolve, reject) {
//     setTimeout(()=>resolve("skola"),3000);
// });
// let w2 = new Promise(function (resolve, reject) {
//     // reject( "Doslo je do prekida u komunikaciji. Nemamo sve podatke");
//     setTimeout(()=>resolve("vrtic"),10000);
// });
// Promise.all([x2,y2,z2,w2])
//     .then(niz)
//     .catch(reason => {console.log(reason);});
//
// //16.10.19.

function f11(){
    setTimeout(() => {console.log('Ispis1');},1500);
}

function f2(){
    console.log('Ispis2');
    f11();
    console.log('Ispis3');
}

f2();

async function f1() {
    return 4;
}

console.log(f1());

f1().then(result => console.log(result));

async function f3(){
    let y = new Promise(function(resolve,reject){
        setTimeout(()=>resolve('Evo mene'),1500);
    });

    let result = await y;
    alert(result);
}


async function f4() {
    let y = new Promise(function(resolve,reject){
        setTimeout(()=>resolve('Evo mene'),1500);
    });
    let k = new Promise(function(resolve,reject){
        setTimeout(()=>resolve('Evo mene k'),4500);
    });

    let result = await Promise.all([y,k]); //paralelizam, await ceka da se izvrsi promise all
    alert(result);
}

f4();

function ime(){
    return new Promise(resolve => {
        setTimeout(()=>resolve('Petar'),5500)
    });
}

function sta(){
    return new Promise(resolve => {
        setTimeout(()=>resolve('gleda'),1500)
    });
}

async function ispis() {
    const x = await ime();
    const y = await sta();
    console.log(x,y); //ceka obe informacije da dobije da bi ispisao x i y
}

ispis();

async function ispis2(){
    const[x,y] = await Promise.all([ime(),sta()]);
    console.log(x,y);
}

ispis2();

function f5(val){
    return new Promise((resolve, reject) => {
        resolve(val.toUpperCase());
    });
}

async function ispis3(x){
    try{
        const k = await f5(x);
        console.log(k);
    }catch (error) {
        console.log(error);
    }
}

ispis3('Petar');