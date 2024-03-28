
export default function clearPage() {
    const contentHolder = document.querySelector('#content');

    while(contentHolder.children.length > 0){
        contentHolder.children[0].remove();
    }
}