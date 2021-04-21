/*  An app to allow users to test their typing speed by specifying the number of seconds they can use to complete it
 Developer: shininglite2012@gmail.com/08148202358/Oluwakemi Omoyeni
 Date Created: 30/12/2020
 Date Modified: 02/01/2021
*/

const userText = document.getElementById('user-text')
let userTime = document.getElementById('user-time')
const startGame = document.getElementById('start-game')

const newGame = document.getElementById('new-game')
let timer;
let times;
const text = document.getElementById('text');
let time = document.getElementById('time');
const card = document.getElementById('card')
const typedText = document.getElementById('typing-text')

const congratMsg = document.getElementById('result')

const errorMsg = document.getElementById('error-msg')
startGame.addEventListener('click', ($event) =>{
    if (userText.value == '' && userTime.value == ''){
        $event.preventDefault();
        errorMsg.style.display = 'block';
        errorMsg.style.color = 'red';
    }
    else if(userText.value =='' || userTime.value == ''){
        errorMsg.textContent = 'One Field is empty!'
        errorMsg.style.display = 'block';
        errorMsg.style.color = 'red';
    }
    else{
        userText.style.display = 'none'
        userTime.style.display = 'none'
        startGame.style.display = 'none'
        errorMsg.style.display = 'none';
        card.style.display = 'block';

        typedText.value = ''
        newGame.style.display = 'none',
        congratMsg.style.display = 'none'
        text.textContent = 'You want to type ' +  userText.value;
        times = userTime.value
        time.textContent =  times
        timer = setInterval(countdown, 1000)
    }
})

const countdown = () =>{
    times--
    document.getElementById('time').innerHTML = times;
    if(times==0){
        clearInterval(timer);
        congratMsg.textContent = "Your time is up. Well done...."; 
        newGame.style.display = 'block'
        typedText.value = ''
    }
}

typedText.addEventListener('input',($event) =>{
    if ( $event.target.value == userText.value){
        congratMsg.style.display = 'block'
        congratMsg.style.color = 'green'
        congratMsg.textContent = 'Accurate'    
    }
    else{
        congratMsg.style.display = 'block'
        congratMsg.style.color = 'red'
       congratMsg.textContent = 'Word not accurate'
    }
})
newGame.addEventListener('click', () =>{
    userText.value = ''
    userTime.value = ''
    userText.style.display = 'block'
    userTime.style.display = 'block'
    startGame.style.display = 'block'
    errorMsg.style.display = 'none';
    card.style.display = 'none';
})
