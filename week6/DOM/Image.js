import DOM from "./DOM.js";

class Image extends DOM{
    constructor (className){
        super('image','',className); //태그 이름, 텍스트 내용, 클래스 이름
    }
}

export default Image;