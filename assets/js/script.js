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