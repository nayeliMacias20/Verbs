

//const fruits = ['blackberry','fig']
//fruits.push('mango')

const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const first = document.getElementById('first-verb');
const second = document.getElementById('second-verb');
const third = document.getElementById('third-verb');
const fourth = document.getElementById('fourth-verb');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allRightCounter = document.getElementById('all-right-counter');
const verbsContainer = document.getElementById('verbs-container');

const numberOfVerbs = verbs.length;

console.log(numberOfVerbs);

//Array de números al azar
let answerRoullete = [0,1,1,1];
let everyNumberOfVerbs = [];
//Variable que maneja la respuesta correcta
let rightAnswer;
//Variable que maneja la respuesta correcta
let rightAnswerCounter=0;

//Funcion para que el usuario escuche los audios. AddEvent"Escuchador"
//responde con el verbo
next.addEventListener('click', function(){
    ponerVerbo();
    next.style.display = 'none';  
    //alert('holis') 
});
//Funcion para generar los verbos random
makeRandomList();

//guarda la ultima posición
let lastPosition = everyNumberOfVerbs = length - 1;
//Funcion para guardar la ultima posición
function makeRandomList(){
    for(var i=0;i<numberOfVerbs;i++){
        everyNumberOfVerbs.push(i);
    }
    //Sort es para ordenar para enviarle un núm aleatorios.
    everyNumberOfVerbs = everyNumberOfVerbs.sort(()=>Math.random()-0.5);
}
//Funcion del efecto de cambio de botón 
function buttonEffect(itsRight, button){
    if(itsRight){
        //classList remove se utiliza para cambiar la clase y para agregar es add
        button.classList.add('rightAnswer');
        setTimeout(function(){
            button.classList.remove('rightAnswer');
        },1000);
        //Sumamos en el contador de la rspuesta correcta
        rightAnswerCounter = rightAnswer + 1;
    }else{
        //classList remove se utiliza para cambiar la clase y para agregar es add
        button.classList.add('wrongAnswer');
        setTimeout(function(){
            button.classList.remove('wrongAnswer');
        },1000);
    }
//Funcion de poner el verbo
    setTimeout(function(){
        ponerVerbo();
    },1000);
}

first.addEventListener('click', function(){
    buttonEffect(isItRight_(first.innerHTML),this);
});
second.addEventListener('click', function(){
    buttonEffect(isItRight_(second.innerHTML),this);
});
third.addEventListener('click', function(){
    buttonEffect(isItRight_(third.innerHTML),this);
});
fourth.addEventListener('click', function(){
    buttonEffect(isItRight_(fourth.innerHTML),this);
});

function shuffleAnswer(array){
    let numberOfAnswerButtons = array.length;
    let randomIndex;

    while(numberOfAnswerButtons !=0){
        randomIndex = Math.floor(Math.random()*numberOfAnswerButtons);
        //Intercambiar valores 
        [array[numberOfAnswerButtons],array[randomIndex]] = [array[randomIndex],array[numberOfAnswerButtons]];
    }
    test.innerHTML += array[0]+''+array[1]+''+array[2]+''+array[1]
}





//Funcion de poner el verbo
//function ponerVerbo(){
//showVerb.innerHTML = "Deposita 200 bitcoins para jugar"
//}