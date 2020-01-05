//declare variables
let minNum = 1;
let maxNum = 10;
let guessingNumber = 5;
let chancesLeft = 3;

//UI variables
const minNumber = document.querySelector('.min-num');
const maxNumber = document.querySelector('.max-num');
const inputNum = document.querySelector('#number-inp');
const message = document.querySelector('.message');
const submitBtn = document.querySelector('.btn');
const container = document.querySelector('.container');

//assaign UIvariables
minNumber.textContent = minNum;
maxNumber.textContent = maxNum;

//Listen for event
submitBtn.addEventListener('click', function() {

   //convert input value from str to int
   const inputValue = parseInt(inputNum.value);

   //validate
   if(isNaN(inputValue) || inputValue < minNum || inputValue > maxNum){
       //set message
      showMsg(`Please provide values between ${minNum} and ${maxNum}`, 'red');
      return;
   } 

   //correct guess
   if(inputValue === guessingNumber) {
       //set message
       showMsg(`YAY! You guessed it right, ${guessingNumber} is correct.`, 'green');
       inputNum.disabled = true;
       return;
   } else {
       //wrong guess
       chancesLeft -= 1;
       showMsg(`only ${chancesLeft} chances left`, 'red');
   }

   //GAME OVER
   if(chancesLeft === 0) {
     showMsg(` GAME OVER! ${guessingNumber} was the right answer!`, 'red');
     inputNum.disabled = true;
   }

});

//message
function showMsg(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  inputNum.style.borderColor = color;

  //clear message after few seconds 
  setTimeout(function(){
    message.textContent = '';
    message.style.color = '';
    inputNum.style.borderColor = '';  
  }, 3000);
}