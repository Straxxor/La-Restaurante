import './styles.css';
import buildHome from './home.js';
import clearPage from './clearpage.js';

buildHome();

const homeButton = document.querySelector('#homebutton');
homeButton.addEventListener('click', () => {
    clearPage();
    buildHome();
});

//const clearButton = document.querySelector('#menubutt');
//clearButton.addEventListener('click', () => {
//    clearPage();
//});


//alert("Ayo we loaded in!");

