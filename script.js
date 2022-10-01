

//const fruits = ['blackberry','fig']
//fruits.push('mango')

const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const fisrt = document.getElementById('first-verb');
const second = document.getElementById('second-verb');
const third = document.getElementById('third-verb');
const fourth = document.getElementById('fourth-verb');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allRightCounter = document.getElementById('all-right-counter');
const verbsContainer = document.getElementById('verbs-container');

//const numberOfVerbs = verbs.length;

//console.log(numberOfVerbs);

//Array de números al azar
let answerRoullete = [0,1,1,1];
let everyNumberOfVerbs = [];
let rightAnswer;
let allRightAnswers;

//Funcion para que el usuario escuche los audios. AddEvent"Escuchador"
next.addEventListener('click', function(){
    ponerVerbo();
    //next.style.display = 'none';  
    //alert('holis') 
});
//Funcion de poner el verbo
function ponerVerbo(){
    showVerb.innerHTML = "Deposita 200 bitcoins para jugar"
}