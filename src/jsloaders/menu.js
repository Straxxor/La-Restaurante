import item1 from '../pics/Beef_Stew.webp'
import item2 from '../pics/Nether_Salad.webp'
import item3 from '../pics/Vegetable_Soup.webp'
import item4 from '../pics/Honey_Cookie.webp'

export default function buildMenu() {

    const containerDiv = document.createElement('div');
    containerDiv.setAttribute('class', 'container');

    const contentSelector = document.querySelector('#content');
    contentSelector.appendChild(containerDiv);

    const menuHeadline = document.createElement('h1');
    menuHeadline.textContent = "Our delectable offerings:";
    containerDiv.appendChild(menuHeadline);

    const menuGrid = document.createElement('div');
    menuGrid.setAttribute('class', 'menugrid');
    containerDiv.appendChild(menuGrid);

    //Beef Stew

    const menuItem1 = document.createElement('div');
    menuItem1.setAttribute('class', 'menuitem');
    menuGrid.appendChild(menuItem1);

    const item1pic = new Image();
    item1pic.src = item1;
    item1pic.setAttribute('class', 'itempic');
    menuItem1.appendChild(item1pic);

    const item1desc = document.createElement('p');
    item1desc.textContent = "Beef Stew";
    menuItem1.appendChild(item1desc);

    //Nether Salad

    const menuItem2 = document.createElement('div');
    menuItem2.setAttribute('class', 'menuitem');
    menuGrid.appendChild(menuItem2);

    const item2pic = new Image();
    item2pic.src = item2;
    item2pic.setAttribute('class', 'itempic');
    menuItem2.appendChild(item2pic);

    const item2desc = document.createElement('p');
    item2desc.textContent = "Nether Salad";
    menuItem2.appendChild(item2desc);

    //Vegetable Soup

    const menuItem3 = document.createElement('div');
    menuItem3.setAttribute('class', 'menuitem');
    menuGrid.appendChild(menuItem3);

    const item3pic = new Image();
    item3pic.src = item3;
    item3pic.setAttribute('class', 'itempic');
    menuItem3.appendChild(item3pic);

    const item3desc = document.createElement('p');
    item3desc.textContent = "Vegetable Soup";
    menuItem3.appendChild(item3desc);

    //Honey Cookie

    const menuItem4 = document.createElement('div');
    menuItem4.setAttribute('class', 'menuitem');
    menuGrid.appendChild(menuItem4);

    const item4pic = new Image();
    item4pic.src = item4;
    item4pic.setAttribute('class', 'itempic');
    menuItem4.appendChild(item4pic);

    const item4desc = document.createElement('p');
    item4desc.textContent = "Honey Cookie";
    menuItem4.appendChild(item4desc);

    
}