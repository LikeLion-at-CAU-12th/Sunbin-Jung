import Complete from "../DOM/Complete.js"

class CompleteController {
    constructor() {
        this.delBtnNode = null; // 수정되지 않았으므로 null로 초기화
        this.notcomBtnNode = null; // 수정되지 않았으므로 null로 초기화
        this.innerNode = null; // 수정되지 않았으므로 null로 초기화
    }
    addComplete(todo) {
        const completeList = document.getElementById("complete-list");
        const todoList = document.getElementById("to-do-list");
        const todoItem = document.querySelector('.text-box').textContent;
        completeList.appendChild(newComplete.addRow());
        todoList.removeChild(document.querySelector('.row'));
    }
    delComplete() {
        const completeList = document.getElementById("complete-list");
        completeList.removeChild(this.newComplete.getRow());
    }

    /*
    notDoneComplete() {
        this.innerNode.classList.toggle('done-text');
        this.notcomBtnNode.classList.toggle('done-btn');
        const todoList = document.getElementById("to-do-list");
        if (this.innerNode.classList.contains('done-text')) {
            todoList.appendChild(this.newComplete.getRow());
        } else {
            const row = this.newComplete.getRow();
            todoList.removeChild(row);
            const completeList = document.getElementById("complete-list");
            completeList.appendChild(row);
        }
    }
    */
}

export default CompleteController;
