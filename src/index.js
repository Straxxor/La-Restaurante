import './style/styles.css';
import clearPage from './jsloaders/clearpage.js';
import buildHome from './jsloaders/home.js';
import buildMenu from './jsloaders/menu.js';
import buildAbout from './jsloaders/about.js';

buildHome();

const homeButton = document.querySelector('#homebutton');
const foodButton = document.querySelector('#foodbutton');
const aboutButton = document.querySelector('#aboutbutton');


homeButton.addEventListener('click', () => {
    clearPage();
    buildHome();
});

foodButton.addEventListener('click', () => {
    clearPage();
    buildMenu();
});

aboutButton.addEventListener('click', () => {
    clearPage();
    buildAbout();
})





//const clearButton = document.querySelector('#menubutt');
//clearButton.addEventListener('click', () => {
//    clearPage();
//});


//alert("Ayo we loaded in!");

