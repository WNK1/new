
//прописываем цикл 
/*

while/for (условие){
    тело цикла / что он будет делать 
    какие операции выполнить 
}

*/
console.log("brrrrrrrrrr")
let ab = 0;
while (ab < 10) {
    console.log(ab);
    ab++;
   
}

//конструкция do ... while - нужна для того что бы итерация( выполнение цимкла ) выполнилось хотя бы 1 раз что бы цикл например начинал отсчет не 1 а с 0 
console.log("brrrrrrrrrr")
let abv = 0;
do {
    console.log(abv);
    abv++;
   
} while ( abv < 10 )

    console.log("rr")
/* 

Ситнаксик записи цикла For
for(1)Начало 2)условие 3)шаг++){
    //тело цикла
}

*/
/*let abvg=6;
for (; abvg < 16; abvg++){  //любая часть в цикле for может быть пропущена , например если бы в данном случае мы оперделили переменную заранее 
                            //если из условий (  ) ffor убрать все то у нас будет бесконечный цикл который бедет пререгружать кэш и сломает сраницу
    console.log(abvg);
}
console.log(`истинное число/последнее = ${abvg}`);
*/

console.log("efwfwhfwf")


let abvg=6;
for (; abvg < 16; abvg++){  
    if (abvg=10) break; //break может понадобиться нам для того что бы если желаемое значение уже было получено раньше до конца цикла , цикл не шел до конца а отсановился на нужном нам условии 
}
console.log(`истинное число/последнее = ${abvg}`);

//CONTINUE деректива отчасти схожа с break она останавливает цикл в нужном месте пропускает задданое условие и продолжает цикл до окончание

//let gg;
//Metka: for(gg=12;gg > 5;gg--){   // метки используются для того что бы в циклах останавливать один из циклов которые вложенны в коренной/саммый главный цикл 
//    if(gg==5) break; 
//}
//console.log(`истинна = ${gg}`)

//пример отсановки цикла с помощью метки 
let ggg;
let uff;
Metkas: for( ggg = 0;ggg < 2; ggg++){  
    for( uff = 0; uff < 3; uff++) {
        if( uff == 2) {   
            continue Metkas;
        }
        console.log( uff )
    }
}

console.log("DZ1")
let dz=0;
while (dz<6){
    console.log(dz);
    dz++;
}




let dz2=1;
do{
    console.log(dz2);
    dz2++;

}while(dz2<6) ;




console.log("dz3 write")

let dz3 = 1;
for(;dz3 < 5 ; dz3++){
    console.log(dz3);
    if(dz3==5) break;
    
}
console.log(`dz=${dz3}`)

console.log("DZ1 ВЫПОЛНЕННО")

let num=8;
while (num){
    console.log(num)
    num--;
    if(num==0) break;

}
console.log(num);
console.log("dz2 ВЫПОЛНЕННО");
/*
for(let num=0;num<3; num++){
    console.log(`Число: ${num}`);
}
    

let nums=1;
while(nums<3){
    console.log(`Число: ${nums}`);
    nums++;
    if(nums==3) break;
}
console.log(`Число: ${nums}`);

 */   
console.log("Last chapter")

Last:for ( let kk = 0; kk < 2; kk++ ){
    for(let size = 0 ; size < 3; size++ ){
        console.log(size);
        if(size==1) break Last;
    }

}

//СЛЕДУЮЩИЙ УРОК ФУНКЦИИ 

//сИНТАКСИС ФУНКЦИИ 
// function имя(параметры) { тело функции } 

//Функции колбэки 
function Omg(one,two,no,yes){
    const oneS=one+two;
    if(oneS>1000000){
        showYes();
    }
    else{
        showNo();
    }

}

    function showYes(){
    console.log('миллионер')
}

    function showNo(){
    console.log('чуть-чуть и миллмонер)')
}

    Omg(20,10000,showNo,showYes,)

//return возврат работы / вычислений и тд.

function calcsume(numma,numme){
    let obhsumm=numma+numme;
    return obhsumm;
    //после return фуннкция не выполняется / то что написано после ретерна не работает / значение возвращается в переменную

}
let uwu = calcsume( 2 , 5 );
console.log(uwu)