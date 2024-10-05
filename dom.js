//метод поиска по селекторам класса querySelectorAll{ }


//поиск по селектору класса 
const one = document.querySelectorAll('.animation__first');
console.log(one);

//поиск по селектору тега 
const two = document.querySelectorAll('li');
console.log(two);

//поиск по селектору тега и класса 
const tegClass = document.querySelectorAll('div.main__animation'); //сначала прописывваем тег который нам нужен а потом в каком классе он значится 
console.log(tegClass);

//поиск по тегу первого уровня вложенности 
const vlogzenie = document.querySelectorAll('.navigation__ul>li');
console.log(vlogzenie);

//поиск по нескольким классам 
const classi = document.querySelectorAll('.h1 , .main__animation');//перечесляем классы которые мы хотим найти через запятую 
console.log(classi)

//поиск по id 
/*const idishka = document.querySelectorAll('#1');
console.log(idishka);*/

//queryselectotAll - это статичнаяф колекция 
//если мы хотим получить конкретный элемент объекта то мы можем найти его так :
const konkret = document.querySelectorAll('li');
console.log(konkret[2])//элемент позиции 2 





    console.log(`метод преребора коллекции`)
    //для перебора все так же можем использовать функцию for ... of 
    /*for (const perebor of konkret){
        console.group(perebor);
    }
    */



//хоть это и не массивы мы все так жеможем использовать метод перебора forEach{} 
konkret.forEach(forEachMetod =>{
    console.log(forEachMetod);
}
);

//искать можно не только в document но так же и внутри какого то объекта / константы 
const gg1 = document.querySelectorAll('.main__animation')//получаем колдлекцию объектов в main__animation
const poluchennoeGG = gg1[0].querySelectorAll('div')//в main__animation ищем все div которые есть в этом классе 
console.log(poluchennoeGG)









console.log(`Обзор метода quarySelector, отличие от ALL `);
//quarySelector ищет первый попавщийся селектор и возращает его а не как ALL преедает в коллекцию все элементы которые есть если не указывать в нем позициию объекта 
        /*const firstElement = document.querySelectorAll('.navigation__ul')[0];*/
//данную запись при нужном получении первого селектора мы можем заменить на ...
const firstElement = document.querySelector('.navigation__ul');

console.log(firstElement)




//хоть у quarySelector очень множество приемущест и используется в основном он 
//но есть и другие методы 
//например getElementByID ('имя id без решетки так как метод уже определен'.) - ищет по уникальному id на странице и поиск производиться только внутри document

//getElementsByTagName - возрвщает целую коллекцию элементов которые подходят заданному свойству 
//getElementsByClassName - точно так же как quarySelector возвращает коллекцию по заданному классу - здесь точку писать не нужно - получаем живую коллекцию 
/*!!!!!!! Основное и главное отличие метода getElementBy ... от quarySelector в том что quarySelector это статичная коллекция которая налету если было изминение в дереве возвратит старую информацию 
а getElementBy - она динамичная , возвращает нам актуальную коллекцию с измененым деревом элементов если эти изминенея были */

//метод closet - возвращает найденного родителя селектора или null если такого не сущетвует 
const closetPoisk = document.querySelector('.animation__first');
const closetClose = closetPoisk.closest('.main__container');
console.log(closetClose);


//проверка matches - метод только делает проверку существует ли элемент и возвращяет есть ли удволетворяющий объект или нет
//выводит true /false
console.log(`treu/false`)
const proverkaS = document.querySelectorAll('.navigation__ul')
for(const yes of proverkaS){
    if(yes.matches('[class$="navigation__ul_1"]')){ //что бы проверка matches былы проведенна селектор класса стоит прописать как - navigation__ul  navigation__ul_1 - где второе значение так скажем название подкласса род элемента 
        console.log(`элемент существует`);
    } else if(yes.matches('[class$="main__animation__animation__second"')){
        console.log(`элемент номер 2 существует`);
    }
}


//ко всем элементам найденым с помощью поиска мы можем применять методы навигации / то есть премещаться между этими объектами 
const perexod = document.querySelector('.header')
const nextPerexod = perexod.nextElementSibling; //следующий элемент от родительского 
console.log(nextPerexod)


















//изминение html - innerHTML
//1 получаем объкт 
/*const poluchenie = document.querySelector('.h1')
const poluchenieNewObj = poluchenie.innerHTML;//получаем содержимое как оно прописанно в html , весь код html тегами 
console.log(poluchenieNewObj)

//что бы изменить содержимое мы должны:
poluchenie.innerHTML = `D.O.M - document object module`; //в данном случае мы перписываем содержимое того тега кому присвоет класс h1 
//значение оригинальной константы осталось таким же , мы просто как бы дополнили запись тогг что у нас было 

//дописываем содержимое объекта 
poluchenie.innerHTML = ` <h1>${poluchenieNewObj} learning processing<h1>`;
console.log(poluchenie.innerHTML); // в данном случае мы просто прибавляем какое то содержимое к изначальной информации в объекте / инфо нам в html нигде не доступна 









//изминение содержимого целиком outerHTML 
const vesObj = poluchenie.outerHTML; //в данном случае мы получаем весь оъект целиком , в прошлом мы просто получали содержимое и теги которые к нему применены 
console.log(vesObj); //здесь же мы получаем весь объектс именнем класа тегами и содержимым - полностью все что создавали для блока так скажем 

poluchenie.outerHTML = `<h1> learning D.O.M - document object module </h1>`
console.log(poluchenie.outerHTML)//если мы выведем константу в консоль то все так же получем старую запись / она все так же нам будет доступна , хоть она уже изменена на другую 
//!!!!!!!!!!!!!!!! ДЛЯ ЧЕГО ЭТО СДЕЛАННО ???????????
*/
        

//textContent 
const textContentOrig = document.querySelector('.h1')
const textNoOrig = textContentOrig.textContent;
console.log(textNoOrig) //текст контент это один из способов безопасного ввода текста то есть пример что мы получаем данные от пользователя , а он твписывает кучу html тегов в полек ввода которые могут что то сломать 
//и что бы от этого быть защещеным мы может испоьзовать данный метод // он не годиться для изменения так как в него попадут и теги которые мы прописываем для отображения /
//это просто текстовый просмотр содержимого


//получение содержимое текстого узла/коментария с помщью .data
const sledComments = document.querySelector('.h1')
const sled = sledComments.nextSibling;
console.log(sled)//мы получаем коллекцию с данными объекта 
//а что бы нам как в данном случаеп просто получить текст комментария пропишем следущее 
console.log(sled.data)

/////////////////////////////// ошибка , СПРОСИТЬ!!!!!!!!!!!!!!
//так же можем изменить наш текстовый узел / комментарий и тд
sled.data = 'не коммент';
console.log(sled.data)  ////////////////////////!!!!!!!!!!!!!111 ПОЧЕМУ ПОЯВЛЯЕТСЯ НА СТРАНИЦЕ КАК ВИДИМЫЙ ЭЛЕМЕНТ 


//Создание новых элементов / тегов 
//Для этого будем использовать Метод createElement('div/p/ и тд)
const news = document.createElement('div');
console.log(news);
//вписываем данный в новосозданный элемент 
news.innerHTML = `Это Новосозданный элемент с помощью JS кода и тегов .createElement а так же заполнен с помощью тега .innerHTML`;
console.log(news);