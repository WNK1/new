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
//???????????? почему нужно что бы коментраий вставал на одну строчку с закрытием придыдушего тега а не начинался с новой строки ????
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
//Если нужно полноценное создание нового текстового узла то делаем это с помощью метода createTextNode
const newYzel = document.createTextNode('Новый узел');
console.log(newYzel);

//на данный момент наши данные не вставлениы в html документ , для того что бы они заняли свои места там сущестуют методы 
//перед объектом 
//sledComments.before(news);

// вставить наш текст объкт и тд после селектора который мы искали , мы используем after
//sledComments.after(news)

//если мы хотим вставить содеримое во внутрь селектора и что бы он был перед определенным текстом например то исп метод prepend
//sledComments.prepend(news)
//если хотим появления внутри , но уже после оределенного текста то метод append
sledComments.append(news);


//метод вставки наглядный пример 
/*
                    --after 
<ul class="dfs">

            --prepend
    <li></li>
    <li></li>
    <li></li>
            --append

</ul>
                    --before
*/

//так же с помощью этих методов можно делать всавки сразу нескольких объектов просто перечисляя их через запятую 
// .append(newElemen,"hi")




//Метод вставки текста  insertAdjacentElement()
const textElement = document.querySelector('.h1')
//теперь вставляем текст который мы хотим что бы появился 
//textElement.insertAdjacentElement(
    'afterend', //метод или же свойтво куда именно вставляется элемент
    `<p>Новая вставка с помощью <span>insertAdjacentElement()</span></p>`

//)

/* 
мотоды вставок и куда элементы поместятся 


beforebegin-вставка теста непосредственно перед h1
afterbegin-после h1
beforeend-вставка во внутрь в конец textElement
afterend - в конец textElement


    --beforebegin
<div> 

            --afterbegin
 <p> здесь текст</p>
            --beforeend

</div>
    --afterend
*/


//ПЕРЕНОС ЭЛЕМЕНТА 
/* мы можем вставлять не только новый узлы 
но и переносить старые так как они автоматически удаляются со старых мест 
*/

//получаем по традиции объект 
const perenos = document.querySelector('.h1') //класс или что либо другое где находиться то что нужно перенести 
//получаем объект 
const h3 = document.querySelector('h3');//то что нам нужно перенести 
//выполеняем сам перенос 
perenos.prepend('h3');


//если нам нужно не переноситть объект а например сделать его клон то нужно воспользоваться методом cloneNode()
const clone= document.querySelector('.h1');
const newClone = clone.cloneNode(true); //данное клонирование происходит без элементов - теста и другой информации / мы просто копируем клас константу и тд без ее содержиого 
//а если же енам нужно полностью клонировать элемент со всем его содержимым то нужно исп глубокое клонировани 
//просто внутри скобок метода прописать true 
const kuda = document.querySelector('.main__animation');
kuda.prepend(newClone);


//если нужно удалитьобъект то просто использем метод .remove()
//определяем объект 
const removing = document.querySelector('.h1')
removing.remove();

const removings = document.querySelector('.h1')
removings.remove();















//Управление классами и стилями классов 
//свойства className & classList 

//className 
//получаем объект с неким классом 
const polClass = document.querySelector('.animation__first')
//получаем именна классов 
const namesClass = polClass.className;
console.log(namesClass);

//далее перезаписываем имя класса 
//polClass.className= 'red';
//НО ЭТОТ СПОСОБ ПЕРЕЗАПИШЕТ ВСЕ КЛАССЫ И ИЗМЕНИТ СТРУКТУРУ А ЭТО НАМ НЕ НУЖНО ТАК ЧТО ...

//ПРИМЕНЯЕМ classList -это специальный объект сос твоими методами и свойтвами / для добавления или удаления одного класса 
//1 получаем элемент 
const prh = document.querySelector('.animation__first');

//методы 
/*
//добавление класса 
prh.classList.add('что то')

//удаление класса 
prh.classList.remove('что то')

//добавить класс если его нет , если же он есть удалить его 
prh.classList.toggle('что то')

//проверка наличия класса - возврат true/false
prh.classList.contains('что то ')
*/
//практика 
const newIzmenenie = document.querySelector('.animation__first') //получение элемента у которого будет что то деалть с классами 
newIzmenenie.classList.add('new_classes')

if (newIzmenenie.classList.contains('new_classes')){  //функцией проверяем и выводим есть ли у нас такой класс 
    console.log(`Добавлен новый класс`)
} else {
    console.log(`ошибка , класс не найден`)
};


/*const mi = document.querySelector('.main__animation')
//classList это перебераемое значение так что мы можем перебрать все классы того или иного объекта 
for ( const vseClassi of mi ){
    console.log(vseClassi);
}; //ошибка its not iterable 

*/

//так же через js мы можем управлять стилями элементов 
//опять же определяем объект 
const styles = document.querySelector('.animation__first')
//обращаемся к константе и прописываем свойсто .style а дальше то что хотим изменить как css
styles.style.color = "whitesmoke";
styles.style.fontSize = "16px"; //если свойство состоит из 2х и более слов то стоит его прописыватьв lowerCamelCase как в данном примере 

// если мы хотим узнать какое значение принимает то или инное свойство нам достаточно к нему обратиться 
console.log(styles.style.fontSize);

//если нам нужно сбросить то или инное свойсто по какой то причине то ему просто надо присвоить пустую строку 
styles.style.marginBottom = ""; //сброс силей данного свойства 







//получение стилей / вычисление с помощью метода getComputedStyle(element.css - свойсво)
//применимо когда свойсто записано только в css(всегда) а в html его нет

//1 определение переменной 
const computed= document.querySelector('.navigation__ul')
//после чего выводим в консоль свойство которое хотим узнать вместе с методом
const finishedComputed = getComputedStyle(computed);
console.log(finishedComputed.display);

//точно так же можно получать и стиле псевлоэлемента объекта например before и тд
const finishedComputedS = getComputedStyle(computed,'::before'); //пример такого получения 
console.log(finishedComputedS.color);


//если нам нужно скрыть свойство - элемент то мы можем использовать метод .hidden 
//1 определяем элемент 
const hiddenTitle2= document.querySelector('.header__container')
console.log(h3)
h3.hidden = true;//присваеваем элементу значение true и тогда элемент будет скрыт со сраницы 
console.log(h3.hidden)

