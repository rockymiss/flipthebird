const detailsContainer = document.getElementById('details-container');
const nameContainer = document.getElementById('name-container');
const gameSelect = document.getElementById('game-select-container')
const imagesQuiz = document.getElementById('quiz-container-images');



function getFormDetails(event) {
    event.preventDefault();
    nameContainer.classList.toggle('hide');
    gameSelect.classList.toggle('hide');
    let name = document.getElementById('user-name');
       
    document.getElementById('name-result').textContent = `Hello ${name.value} please choose an option below`;
   
}

let getUserDetails = document.getElementById('name-form');
getUserDetails.addEventListener('submit', getFormDetails);


//Game 
// variables to get parts of the document needed.
const section = document.querySelector('section');
const countLives = document.getElementById('flips');
const setLives = 8;

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
    cardInfo.forEach(item => {
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
    //attach cards to section
    section.appendChild(cardElement);
    cardElement.appendChild(cardFace);
    cardElement.appendChild(cardBack);
    });   
};

cardGenerator();



