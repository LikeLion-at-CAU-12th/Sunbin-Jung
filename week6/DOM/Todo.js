import Div from "./Div.js";
import Image from "./Image.js";

class Todo{//상속은 안 받음
    constructor(todo){
        this.row = new Div('','row').node; //innerText를 비워둔 것임
        this.textBox = new Div(todo,'text-box'); //인자를 todo로 받음
        this.completeBtn = new Image('complete-btn');
        this.delBtn = new Image('del-btn');
        //this.completeBtn = new Button('완료','complete-btn');
        //this.delBtn = new Button('삭제','del-btn');
    }
    addRow(){
        [this.textBox, this.completeBtn,this.delBtn].forEach((dom)=>{
            this.row.appendChild(dom.node);//자식노드를 붙인다는 뜻 폴이치가 각각을 돌아가면서 어펜드차일드
        })//forEach는 메서드
        return this.row;
    }
    getRow(){
        return this.row;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    }
}

export default Todo;