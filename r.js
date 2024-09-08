    console.log('я')
    console.log('стану')
    console.log('программистом')

    let UserEyeColor=('brown')
    console.log(UserEyeColor)

    const block = {
        UserName: 'Nik',
        Name : 'Nik'
    }
    console.log(block.Name)

   
    console.log("35" - '10')

    let userName = '' ;
    let userNikName = 'GG'
    let user = userName || userNikName || пусто ;
    console.log(user)
    

    let message = "Все верно";
    

    if (15>10){
        console.log(message);
    } else {                                                                //правильная запись if - else
     console.log("sorry , problems this server")
    }
    


// Условный оператор ? - может зменить привычную запись и сделать ее более короткой 

    let hi = "Здарова ";
    let vopros;
    if (43>46) {
        vopros = ("как сам ?")
    } else {
        vopros = (", Ты же додич ?)")
    }
    //вопрос почему у деда hi+=vopros
    console.log(hi+vopros)

    //более локоничная запись 
    // let hi = "Здарова ";
    // let vopros = 43<46 ? "как сам?" : "ты же додич ?"
    //где ? это if , а : - это else //ЭТО ВАРИАНТ БОЛЕЕ КОРОТКОЙ ЗАПИСИ // НО НАМНОГО ЛУЧШЕ ИСПОЛЬЗОВАТЬ КЛАСИИЧЕСКУЮ ЗАПИСЬ ОНА БОЛЕЕ ЧИТАБЕЛЬНА И ПОНЯТНА 


    //ЦИКЛЫ 
    //пример записи цикла 
    //while ( Условие ) {
//      тело цикла 
//      а тут сам код 
//      }
let numbers = 5 ;
while (numbers < 10) {
    console.log(numbers);
    numbers++;
}


//по мимо обычной конструкции while существует do while {  КОНСТРУКЦИЯ НУЖНА ДЛЯ ТОГО ЧТО БЫ ТЕЛО ЦИКЛА ВЫПОЛНИЛОСЬ ХОТЯ БЫ 1 РАЗ 
let ff = 4 ;
do {
    console.log(ff);
    ff++;
}
    while (ff < 10)


//ЦИКЛ FOR //////     1 - переменная / 2 условие / 3 шаг 
               /* for ( let num = 0 ; num < 5 ; num++) {
                    console.log(num);
                }
                */


//ДИРИКТИВА BREAK - ОСТАНАВЛИВАЕТ ЦИКЛ ТОГДА КОГДА НАМ ЭТО НУЖНО 
let glhf = 0 ;
    for ( ; glhf < 6 ; glhf++ )
     {
        console.log(glhf)
        if (glhf===2) break ;
    }
    console.log(`Работа окончена , glhf = ${glhf}`);

//Деректива continue - тело цикла прервется при услоивии которое мы задади , цикл пропустит его и продолжит работать со сдледующем значением 


//  условие 2 
/*
        0
        1
        3
        4
*/

/* так же мы можем создавать метки - припрывать цикл внутири род.цикла , и прирывать его не весь а только там где нам надо - при этом должны цикл как то  назвать 
firstFot : for ...

метки можем создавать с continue & break

*/

//  ОБЪЯВЛЯЕМ ФУНКЦИЮ ( FUNCTION DECLARATION)
// 1 function - объявлем функцию поле 2- даем ей имя 3- записываем парамертры 
/* 
    fuction имя(параметры) {
    тело функции
}

*/
    function calcsum(){
        console.log(63*4*5-(90+5))

    }

calcsum()  //что бы что то появилось или выполнилось в функции мы должны ее вызвать !


//функции колл-бэки 

function calcsumma(callOne,callTwo,more, less){
    numsumma = callOne + callTwo;
    if (numsumma>3){
        more();
    } 
    else {
        less()
    }

}

function ShowMore(){
    console.log("Сумма чисел больше чем 3")
}

function ShowLess() {
    console.log("Сумма чисел меньше чем 3")
}

calcsumma( 2, 6, ShowMore, ShowLess)


//Стрелочные функции 
//гораздо проще и быстрее записывать чем объявление функции и орпеделениия ее переменных 
let GetMessage = (text,names) => text + "," + names + " 0)"
    console.log(GetMessage('Привет' ,'Вася'))

const magic = '\nyou';
console.log(magic[1]);


const preob = parseFloat (-0.304)
console.log(preob)

const fruitsCount = -2309;
Math.abs(""); 
https://ru.hexlet.io/courses/js-basics/lessons/signature/theory_unit

