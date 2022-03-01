const detailsContainer = document.getElementById('details-container');
const nameContainer = document.getElementById('name-container');
const gameSelect = document.getElementById('game-select-container')
const imagesQuiz = document.getElementById('quiz-container-images');
const musicQuiz = document.getElementById('quiz-container-music');
const shapesQuiz = document.getElementById('quiz-container-shapes');


function getFormDetails(event) {
    event.preventDefault();
    nameContainer.classList.toggle('hide');
    gameSelect.classList.toggle('hide');
    let name = document.getElementById('user-name');
       
    document.getElementById('name-result').textContent = `Hello ${name.value} please choose an option below`;
   
}

let getUserDetails = document.getElementById('name-form');
getUserDetails.addEventListener('submit', getFormDetails);
