class DOM{
    constructor(tagName,innerText,className){
        this.node = document.createElement(tagName);
        this.node.innerText = innerText;
        if (className) this.node.classList.add(className); //추가해주는거
    }
}

export default DOM;