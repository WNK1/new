window.addEventListener("load", () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 2500);
  });

//размеры окна в браузере 
//свойство clientWidth clientHieght - доступная ширина и высота экрана  
const html = document.documentElement // в константу мы получаем documentElement - фактически мы обращаемся ко всему html 
const elementWidth = html.clientWidth;//узнаем доступную ширину 
const elementHigth = html.clientHeight;//высоту

console.log(elementWidth)
console.log(elementHigth)

//так же существуют свойства innerWidth и innerHeight - они включают в себя ширину и высоту но уже с полосами прокрутки а не как прошлые свойства 
const innerH = window.innerWidth; //применяются с тегом window который обозначает область экрана / в данном методе его использовать обязательно
const innerW = window.innerHeight;

console.log(` размерыы экрана вместе с полосой прокрутки `)
console.log(innerH)
console.log(innerW)

//если нам нужно получить колическо прокрученых пиксилей то используем методы :
const y = window.scrollY;
const x = window.scrollX;
console.log(`узнаем сколько пикселей было прокручино по оси y и x`)
console.log(y)
console.log(x)

//методы прокрутки страницы , при задании какого то события 
//scrollBy scrollTo+опиции 
//метод scrollBy - каждый раз при ивенте будет прокручивать страницу на кординаты которые мы зададим 
function bottom (){
    const gg = window.scrollY;
    window.scrollBy(0,50) //данный метод прокручивает страницу каждый раз на 50px , то есть сначала он прокрутит и страница уйдет 
    console.log(gg)       //на 50px вниз а если еще раз сделать данное действие то страница еще раз опуститься / но еще на 50px суммрно на 100px
                            

}

function bottom (){
    const gg = window.scrollY;
    window.scrollTo(0,50)  //данный меод прокручивает страницу отностительно ее начальных кординат и только 1 раз 
    console.log(gg)

}

//что бы применить опции к scrollTo нужно немного изменить синтаксис 
function bottom (){
    const gg = window.scrollY;
        //(и тут взаместо значений созадем объект в котором и перечисляем свойства ) 
    window.scrollTo({
        top:120,
        left:0,
        behavior:"smooth", //или instant //данные свойства отвечают за плавность или резкость прокрутки с помощью данного тега
    }
    )
    console.log(gg)

}

//scrollInterviwe - данная функция прокручивает уже не на какое то расстояние , а к определенному элементу 
function cruptocurencies(top){
    const block = document.querySelector('.cryptocurrencies') //поределяем объект к которому хотим что бы происходил скролл 
    //далее прописываем переменную в которой определили объект и сам scrollInterview
    block.scrollIntoView(top)
} //данная функция принимает 2 значения либо true - прокрутит до объекта так что сам объект будет вверху окна браузера
  // или же false что сам объект будет снизу 

  //так же как и к scroll мы моежм применить доп параметры / синтаксис будет как в прошлый раз 
  function cruptocurencies(top){
    const block = document.querySelector('.cryptocurrencies') //поределяем объект к которому хотим что бы происходил скролл 
    //далее прописываем переменную в которой определили объект и сам scrollInterview
    block.scrollIntoView({
        block:"center", // прокрутка по вертикали 
        inline:"center", // может принимать значения start centre end & nearist по умолчанию-centre //прокрутка по горизонтали
        behavior:"smooth", // анимация прокрутки плавная или резкая 

    })
  }


  //метрики объектов - размеры определенных отступов , и всех доп css свойств которые могут быть в элементе  
  //для начала определяем объект в котором хотим узнать метрики 
  const mericks = document.querySelector('.cryptocurrencies')

  //далее мы создаем константу в которую передаем занчения offsetPasrent - offsetTop , offsetLeft 
  // это на сколько пискселей удален элемент от ближайшего родительского элемента

  const offsetParent = mericks.offsetParent;
  console.log(offsetParent) //покажет относительно какого родителя позиционирует наш элемент