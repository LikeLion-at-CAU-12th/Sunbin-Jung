import TodoController from "./controller/TodoController.js";

const addBtn = document.getElementById("input");
const input = document.querySelector('input');

addBtn.addEventListener('click',() => {
    const todoController = new TodoController(input.value);
    todoController.addTodo();
}); //fuction(){} 는 ()=>{}랑 동일함
