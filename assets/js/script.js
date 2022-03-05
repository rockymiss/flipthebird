/* jshint esversion: 8, jquery: true */

//execute JS code after page is loaded
document.addEventListener("DOMContentLoaded", function(){
});
//variables
const detailsContainer = document.getElementById('details-container');
const welcomeContainer = document.getElementById('welcome-container');
const gameSelect = document.getElementById('game-select-container');
const imagesQuiz = document.getElementById('quiz-container-images');
const section = document.querySelector('section');
let countLives = document.getElementById('flips');
let setLives = 8;
const getUserDetails = document.getElementById('name-form');
const playBirdGame = document.getElementById('bird-btn');
const playAudioGame = document.getElementById('sound-btn');
const playFeatherGame = document.getElementById('feather-btn');
const choiceReturn = document.getElementById('game-choice');
const playGameAgain = document.getElementById('play-again');
const congratsContainer = document.getElementById('congrats');
let startTime = 30;



//Event Listeners
getUserDetails.addEventListener('submit', getFormDetails);
playBirdGame.addEventListener('click', startBirdGame);
playAudioGame.addEventListener('click', startBirdGame);
playFeatherGame.addEventListener('click', startBirdGame);
choiceReturn.addEventListener('click', returnToChoice);
playGameAgain.addEventListener('click', playAgain);


//Link flip lives variable to dom and set to setlives 
countLives.textContent = `${setLives} flips left`;

function showCongrats () {
    section.classList.add('hide');
    congratsContainer.classList.remove('hide');
    document.getElementById('result').textContent = `Congratulations you won!`;
    restartGame();
}

function showHardLuck () {
    section.classList.add('hide');
    congratsContainer.classList.remove('hide');
    document.getElementById('result').textContent = `Sorry you lost!`;
    restartGame();
    
}

function returnToChoice () {
    congratsContainer.classList.add('hide');
    gameSelect.classList.remove('hide');
}

function playAgain () {
    congratsContainer.classList.add('hide');
    section.classList.remove('hide');
}

/**
 * 
 * Function to get username, hide input and 
 * display game choices 
 */
 function getFormDetails(event) {
    event.preventDefault();//prevents the page from reloading after submit
    let name = document.getElementById('user-name');
    welcomeContainer.classList.add('hide');   
    gameSelect.classList.remove('hide');  
    detailsContainer.classList.add('hide');
    document.getElementById('name-result').textContent = `Hello ${name.value} please choose an option below`;
}

/**
 * 
 * Function to close game selection and start game
 */


 function startBirdGame(event) {
    event.preventDefault();
    gameSelect.classList.add('hide');
    section.classList.remove('hide');
    detailsContainer.classList.remove('hide');    
}

/**
 * 
 * function to make the cards run randomingly
 */
 const randomCards = () => {
    const cardInfo = getImageData();
    cardInfo.sort(() => Math.random() - 0.5);
    return cardInfo;
};

/**
 * Place cards into the html
 */

 const cardGenerator = () => {
    const cardInfo = randomCards();
    //generate 16 cards
   
    cardInfo.forEach((item) => {
        //get html
    const cardElement = document.createElement('div');
    const cardFace = document.createElement('img');
    const cardBack = document.createElement('div');
    //add class to cards
    cardElement.classList = 'card';
    cardFace.classList = 'face-card';
    cardBack.classList = 'back-card';
    //attach face to card 
    cardFace.src = item.imgSrc;
    //give card a name attribute to match cards
    cardElement.setAttribute('name', item.name);
    cardFace.setAttribute('alt', item.name);
    //attach cards to section
    section.appendChild(cardElement);
    cardElement.appendChild(cardFace);
    cardElement.appendChild(cardBack);
    //click rotate cards    
    cardElement.addEventListener('click', (e) => {
        cardElement.classList.toggle("toggle-cards");
        matchCards(e);
    });
    });   
};

/**
 * function to check the cards match when clicked the event(e) will
 * capture data
 * and the target is the element that was clicked 
 */
const matchCards = (e) => {
    const cardClicked = e.target;
    cardClicked.classList.add('flipped-card');
    
    const flippedCards = document.querySelectorAll('.flipped-card');
    const toggleCard = document.querySelectorAll('.toggle-cards');
        if (flippedCards.length === 2) {
        if(
            flippedCards[0].getAttribute('name') === 
            flippedCards[1].getAttribute('name')
        ) {
            console.log('match');
            //match
                flippedCards.forEach((card) => {
                card.classList.remove('flipped-card');
                card.style.pointerEvents = "none";
            });
        } else {
            console.log('wrong');
            // wrong
                flippedCards.forEach((card) => {
                card.classList.remove('flipped-card');
                setTimeout(() => card.classList.remove('toggle-cards'), 1000);
            });
            //player lives
            setLives--;
            countLives.textContent = setLives;
            if(setLives === 0) {
                
                showHardLuck();
            }
        }
    }  
   //if user wins game
   if(toggleCard.length === 16){
       setTimeout(() => {
           showCongrats();
       }, 1000);
   } 
};

/**
 * Restarts Game 
 */ 
    const restartGame = (text) => {
        let cardInfo = randomCards();
        let cardFaces = document.querySelectorAll('.face-card');
        let cards = document.querySelectorAll('.card');
        section.style.pointerEvents = 'none';
        cardInfo.forEach((item,index) => {
            cards[index].classList.remove('toggle-cards');
          setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            cardFaces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);//sets name back too
            section.style.pointerEvents ='all';
          }, 1000);  
        });
        setLives = 8;
        countLives.textContent = setLives;
        setTimeout(() => window.alert(text), 1000);
    };


cardGenerator();