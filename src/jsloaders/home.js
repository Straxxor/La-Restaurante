
export default function buildHome() {

    const containerDiv = document.createElement('div');
    containerDiv.setAttribute('class', 'container');

    const contentSelector = document.querySelector('#content');
    contentSelector.appendChild(containerDiv);

    const headline = document.createElement('h1');
    headline.textContent = "Flavours of Minecraft.";
    containerDiv.appendChild(headline);

    const para1 = document.createElement('p');
    para1.textContent = "Discover the multitude of pixelized flavours!";
    containerDiv.appendChild(para1);

    const para2 = document.createElement('p');
    para2.textContent = "Spend less time hungry and more time adventuring!";
    containerDiv.appendChild(para2);

    const menuButton = document.createElement('button');
    menuButton.id = "menubutt";
    menuButton.textContent = "Order Now!";
    containerDiv.appendChild(menuButton);

}