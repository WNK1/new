window.addEventListener("load", () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 4500);
  });
  

  firstOBJ = {
    user : 1,
    what:"это число",
    whats:'2',
    mmok:'а это уже строка',
  }

  console.log(firstOBJ);
  firstOBJ.global="вопрос ??";

  console.log(firstOBJ);
  delete firstOBJ.global;
  console.log(firstOBJ);

  const logi=firstOBJ;
  console.log(logi)
  logi.whats=5;
  console.log(logi)

  console.log(firstOBJ) // так как это именно копирование данный изменяюся и в основном массиве 


  //дублирование - абсолютно новый объект без связи с оригиналом 
  //назначение переменной в которое это будет копироваться 
  let Dublitovanie = Object.assign({},logi)
  Dublitovanie.prvet = 30;
  Dublitovanie["ты кто?"]=' who is you?';
  console.log(Dublitovanie)
  //так же можно добавлять свойства прямо строчкой с ипс 
  Object.assign(Dublitovanie,{bunny:"кролик",whoisBunny:{['its animal?']:'yes',huge:"no"}})
  console.log(Dublitovanie)


  console.log(`старый объект без использования дублирования / он создан на копирование`)
  console.log(logi)

  if(Dublitovanie.prvet11){
    console.log(`объект сущетвует , а именно объект со значением ${Dublitovanie.prvet}`);//проваерка на существование 
  }else{
    console.log(`к сожелению такого объекта нет`)
  }

  //проверка методом опциональной цепочки 
  console.log(Dublitovanie?.whoisBunny?.huge);

  console.log('повтор перебора значений объекта for ... in')
  for(const poluchenieDannie in Dublitovanie){
    console.log(poluchenieDannie);
    console.log(Dublitovanie[poluchenieDannie])
  };

  console.log(Math.random());

  //функция объекта 
  const fun = {
  age : 35,
  names : "Aleksandr",
  ['what the homeplace'] :{
    Country:"China",
    city:'中国城.',
  },





  showAllString(){  
    let showString = () =>{ 
      console.log(`возраст объекта ${this.age} лет , его имя ${this.names},место проживания в формате / страна / город  - ${names["what the homeplace"].Country}/ ${names["what the homeplace"].city}`);
      showString();}
      }
  }
  fun.showAllString();

//Функция конструктор // используется для создания - показа однотипных  переменных 
function showNo(HomePlace,city,){
  this.HomePlace = HomePlace,
  this.city = city,
  this.CurrentPositionInCompany ="Midle-drontend-developer";
}

console.log(new showNo ('Russia','Moskow'));
console.log(new showNo ('kazachstan','Almaty')); //данные функции это некий шаблон в переменные которых  мы уже в выводе добавляем нужные нам значения 
 
//тип данных String toString
const sys = 222 ;
console.log(sys.toString(32));
console.log(sys.toString(16));
//представление данных в системах  исчисления 32 бита / 16 бит / и тд
console.log(sys.toString(8));
console.log(sys.toString(2));

//спам до полного загрузки хеша 
//function xechBroken() {
  
 // console.log(Math.random())
//}
//setInterval(xechBroken,0)


//массивы 
let massiv = [
  gadzishka = 5 ,
  ['1','2','3'],
  [4,5,6],
  {
    ja:3,
    ha:5,
  },
  function obj (){
    console.log('repeat pls');
  },
  [1,23,5],
];

console.log(massiv[2]);//вывод переменной которая находится в массиве на 2 позиции 
console.log(massiv[3].array);//вывод объекта в массиве 
massiv[4]() //если в массиве есть функция то вывести ее результат можно так 
console.log(massiv[2][1]);//уонкретная позиция в переменной на 2 позиции в массиве 

console.log(massiv.length); //узнаем длинну массива 2 способами 

function dlinna() {
  return massiv.length;
};

console.log(`длинна массива состовляет ${dlinna()}`);

//меняем элемент массива 
massiv[1]=[1,2,3];
console.log(massiv);

const doc = document.querySelectorAll('.crypto-card')
console.log(doc);


const sborsol =document.querySelectorAll('h3, .cryptocurrencies');
console.log(sborsol);

const list = document.querySelectorAll('.uls > li');
console.log(list)

const pozition= document.querySelectorAll('li');
console.log(pozition[1]);

//переюераем колекции с помощью for ... of 
/*for(const perebranieZnachenia of pozition);
console.log(perebranieZnachenia);
*/

const vObj = document.querySelectorAll('.footer');
const poluchaem = vObj[0].querySelectorAll('.div');
console.log(poluchaem);

//childNodes - с помощьюданной функции получаем всех детей родительского элемента 
const as = document.body
const sa = as.childNodes;
console.log(sa)

// что бы проверить дочерние - вложенные элементы существует фыункция hasChildNodes
//прописывается точно так же как и предыдущяя  
//она вернет нам либо true / false 


const eptk = document.body
const cktleozz = eptk.nextSibling // следущий элемент который на таком же уровне вложенности 
const ghtlsleobq = eptk.previousSibling // предыдущий элемент 
const hjlbnmtkm = eptk.parentNode // получение  родительского элемента 

console.log('Практика перемещения между элементами ')
console.log(cktleozz)
console.log(ghtlsleobq)
console.log(hjlbnmtkm)

//если мы хотим премещаться только между элементами не беря во внимание #text и какие либо другие символы 
//то существет функция Children 
const ltnb = document.querySelector('.uls')
const chi = ltnb.children
console.log(chi)

//если хотим перемещаться между вложенными элементами просто применяем к ним те же свойства но с Element 
console.log('Перемещение между вложенными элементами')
const elem = document.querySelector('.crypto-card__1')
const next = elem.nextElementSibling;
const previous = elem.previousElementSibling;
const parent = elem.parentElement;

console.log(next);
console.log(previous);
console.log(parent);

//перебор колекций 
console.log('преберем все теги li и выведем их в отдельную коллекцию')
const collectioP = document.querySelectorAll('li')
for(const result of collectioP){
  console.log(result);
}


//getElement s! ByTagName - поиск по тегу 
const cgbcjr= document.getElementsByTagName('li')
console.log(cgbcjr)

//метод closet будет искать и запищет в колекцию всю цепочку из родительских элементов до того
//пока не будет найден нужный нам родительский элемент или же если такогого не будет выведет null

const rodElem = document.querySelector('.under__2')
const wtgm = rodElem.closest('.uls')
console.log(wtgm) 
//часто используется для проверки на существование того или иного родителя или изминенея того или иного родителя элемента 

//проверка существования с помощью matches 
//выводит либо что прописано или же true/false 

const matchesS = document.querySelectorAll('.crypto-cards')
for(const znach of matchesS){
  if(znach.matches('[class$="crypto-card__1"]')){
    console.log('элемент сущетвует');
  } else{
    console.log('Элемент не найден - синтаксическая ошибка')
  };


}

function lastTime(){
  console.log("last time vidios D.O.M = 32:52");
  setInterval(lastTime, 600,);
};

lastTime();
