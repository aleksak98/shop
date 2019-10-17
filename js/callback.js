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

setTimeout(ispisi3,10000);
//ovde ne ulazi odma u funkciju, nego tek posle 10 sekundi

ispisi1();
ispisi2();
ispisi4(4,function(){console.log('5');});
uzmiX(ispisX);