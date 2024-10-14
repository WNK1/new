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

  console.log('повтор перебора значений объекта forr ... in')
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
      console.log(`возраст объекта ${this.age} лет , его имя ${this.names},место проживания в формате / страна / город  - ${metod["what the homeplace"].Country}/ ${metod["what the homeplace"].city}`);
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


