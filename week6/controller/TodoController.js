import Todo from "../DOM/Todo.js"
import Complete from "../DOM/Complete.js";

class TodoController {
    constructor(todo) { //생성자
        this.complete = new Complete(todo); //매개변수 todo, 새 인스터스 생성
        this.newTodo = new Todo(todo);
        this.delBtnNode = this.newTodo.getDelBtn(); // 버튼 노드들
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();
        this.delBtnNodeComplete = this.complete.getDelBtn();
        this.notComBtnNode = this.complete.getNotComBtn();
        const allCompleteBtn = document.getElementById("all-complete");
        const allTodoBtn = document.getElementById("all-todo");

        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        });
        this.comBtnNode.addEventListener('click', () => {
            this.addComplete(todo);
        });
        this.notComBtnNode.addEventListener('click', () => {
            this.addTodo();
            this.delComplete();
        });
        this.delBtnNodeComplete.addEventListener('click', () => {
            this.delComplete();
        });
        allCompleteBtn.addEventListener('click',() => {
            this.allComplete();
        });
        allTodoBtn.addEventListener('click',() => {
            this.allTodo();
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
    addComplete() {
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(this.complete.addRow());
        this.delTodo();
    }
    delComplete(){
        const completeList = document.getElementById("complete-list");
        completeList.removeChild(this.complete.getRow());
    }
    allTodo(){
        this.addTodo();
        this.delComplete();
    }
    allComplete(){
        this.addComplete();
        this.delTodo();
    }
}

export default TodoController;