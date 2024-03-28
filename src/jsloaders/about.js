import mcmap from '../pics/mcmapwebbed.webp'

export default function buildAbout() {
    
    //Main container

    const containerDiv = document.createElement('div');
    containerDiv.setAttribute('class', 'containermap');

    const contentSelector = document.querySelector('#content');
    contentSelector.appendChild(containerDiv);

    //Text Container

    const textContainer = document.createElement('div');
    textContainer.setAttribute('class', 'textcontainer');
    containerDiv.appendChild(textContainer);

    const locationText = document.createElement('p');
    locationText.textContent = "We are a humble little jungle village with our main attraction being our restaurant 'Flavours of Minecraft'!";
    textContainer.appendChild(locationText);
    
    const locationText2 = document.createElement('p');
    locationText2.textContent = "You can find us here if you can figure out the map!"
    textContainer.appendChild(locationText2);

    //Image that is a sibling of text container

    const locationMap = new Image();
    locationMap.src = mcmap;
    locationMap.setAttribute('class', 'locationimage')
    containerDiv.appendChild(locationMap);
}