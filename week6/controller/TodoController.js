import Todo from "../DOM/Todo.js"
import CompleteController from "./CompleteController.js";

class TodoController {
    constructor(todo) {
        this.newTodo = new Todo(todo);
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        });
        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo();
        });
    }
    addTodo() {
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');
        todoList.appendChild(this.newTodo.addRow());
        input.value = '';
    }
    delTodo() {
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow());
    }
    doneTodo() {
        this.innerNode.classList.toggle('done-text');
        this.comBtnNode.classList.toggle('done-btn');
        if (this.innerNode.classList.contains('done-text')) {
            this.completeController.addComplete(this.newComplete.getRow());
        } else {
            const completeList = document.getElementById("complete-list");
            completeList.removeChild(this.newTodo.getRow());
        }
    }
    /*
    doneTodo(){
        addComplete();
        completeList.appendChild(this.newComplete.addRow());
        this.innerNode.classList.toggle('done-text');
        this.comBtnNode.classList.toggle('done-btn');
        if(this.comBtnNode.innerText === "미완"){
            this.comBtnNode.innerText = "완료";
            // this.innerNode.classList.remove('done-text');
            // this.comBtnNode.classList.remove('done-btn');
        }else{
            this.comBtnNode.innerText="미완";
            // this.innerNode.classList.add('done-text');
            // this.comBtnNode.classList.add('done-btn');
        }//토글이 해주는 거
    }
    */
}

export default TodoController;