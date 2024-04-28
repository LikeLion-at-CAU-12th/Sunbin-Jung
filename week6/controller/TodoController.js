import Todo from "../DOM/Todo.js"
//app.js에서 안 쓰고 여기서 만들게 하는 것

class TodoController{
    constructor(todo){
        this.newTodo = new Todo(todo);
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click',()=>{
            this.delTodo();
        });
        this.comBtnNode.addEventListener('click',()=>{
            this.doneTodo();
        }); //드래그 옵션 쉬프트 아래화살표
    }
    addTodo(){
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');
        todoList.appendChild(this.newTodo.addRow());
        input.value = '';//매번 입력을 받아야되니까 밸류를 비워주는 거
    }
    delTodo(){
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow())//어펜드차일드의 반대 리무브차일드 getRow 로우전체 리턴
    }
    doneTodo(){
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
}

export default TodoController;