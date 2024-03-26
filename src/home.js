
export default function buildHome() {
    const containerDiv = document.createElement('div');
    const headline = document.createElement('h1');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const menuButton = document.createElement('button');

    const contentSelector = document.querySelector('#content')

    

    menuButton.id = "menubutt";
    containerDiv.classList.add('container');

    headline.textContent = "Flavours of Minecraft.";
    para1.textContent = "Discover the multitude of pixelized flavours!";
    para2.textContent = "Spend less time hungry and more time adventuring!";
    menuButton.textContent = "Order Now!"

    contentSelector.appendChild(containerDiv);
    containerDiv.appendChild(headline);
    containerDiv.appendChild(para1);
    containerDiv.appendChild(para2);
    containerDiv.appendChild(menuButton);


}