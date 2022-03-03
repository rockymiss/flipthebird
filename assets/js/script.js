//execute JS code after page is loaded
document.addEventListener("DOMContentLoaded", function(){
});

const detailsContainer = document.getElementById('details-container');
const nameContainer = document.getElementById('name-container');
const gameSelect = document.getElementById('game-select-container')
const imagesQuiz = document.getElementById('quiz-container-images');



function getFormDetails(event) {
    event.preventDefault();
    // nameContainer.classList.add('hide');
    // gameSelect.classList.add('hide');
    let name = document.getElementById('user-name');
       
    document.getElementById('name-result').textContent = `Hello ${name.value} please choose an option below`;
   
}

let getUserDetails = document.getElementById('name-form');
getUserDetails.addEventListener('submit', getFormDetails);


//Game 
// variables to get parts of the document needed.
const section = document.querySelector('section');
let countLives = document.getElementById('flips');
let setLives = 8;

//Link flip lives variable to dom and set to setlives 
countLives.textContent = `${setLives} flips left`;



// //function to make the cards run randomingly
const randomCards = () => {
    const cardInfo = getImageData();
    cardInfo.sort(() => Math.random() - 0.5);
    return cardInfo;
};

//Place cards into the html

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
    //attach cards to section
    section.appendChild(cardElement);
    cardElement.appendChild(cardFace);
    cardElement.appendChild(cardBack);
    //click rotate cards    
    cardElement.addEventListener('click', (e) => {
        cardElement.classList.toggle("toggle-cards");
        matchCards(e);
    })
    });   
};

//function to check the cards match
// when clicked the event(e) will capture data
//and the target is the element that was clicked
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
                restartGame('try again');
            }
        }
    }  
   //if user wins game
   if(toggleCard.length === 16){
       restartGame('we won');
   } 
};

//Restart Game 
    const restartGame = (text) => {
        let cardInfo = randomCards();
        let cardFaces = document.querySelectorAll('.face-card')
        let cards = document.querySelectorAll('.card');
        section.style.pointerEvents = 'none';
        cardInfo.forEach((item,index) => {
            cards[index].classList.remove('toggle-cards');
          setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            cardFaces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);//sets name back too
            section.style.pointerEvents ='all';
          }, 1000)  
        });
        setLives = 8;
        countLives.textContent = setLives;
        setTimeout(() => window.alert(text), 100);
    }


cardGenerator();