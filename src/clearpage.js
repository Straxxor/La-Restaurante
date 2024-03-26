
export default function clearPage() {
    const elementContainer = document.querySelector('.container');
    const elementNodeList = elementContainer.childNodes;

    elementContainer.remove();
}