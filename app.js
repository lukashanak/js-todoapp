class TodoApp {
    constructor() {
        this.lastTaskId = 0;
        this.addTask= addTask;
    }
    addNewTask() {
         let value = this.addTask.value;
         if (addTask.value == "") { console.log("error, input is empty") }
         else {
         // creae a li element 
         let list = document.createElement("li");
         list.id= this.lastTaskId;
         list.className="task-classic task-not-finished";
         // create a span element for the task-name
         let spanForName = document.createElement("span");
         spanForName.className="task-name";
         spanForName.innerHTML=addTask.value;
         // create a span element for the task delete-icon
         let spanForDeleteIcon = document.createElement("span");
         spanForDeleteIcon.className="task-delete";
            // icon for the delete-icon
            let deleteIcon = document.createElement("i");
            deleteIcon.className="fa fa-trash-o delete-icon";
        // inject pre-created elements into the real DOM
         document.getElementById("list-of-tasks").appendChild(list);
         document.getElementById(this.lastTaskId).appendChild(spanForName);
         document.getElementById(this.lastTaskId).appendChild(spanForDeleteIcon);
        // spanForDeleteIcon.appendChild(deleteIcon);
         // others
         this.lastTaskId+=1;
         console.log("task added"\);
        }
    }
    markAsFinished(taskId){

    }
    removeTask(taskId) {

    }
    markAsUnfinished(taskId) {

    }
}

// DOM
const addTask = document.getElementById('add-task');

const todoApp = new TodoApp;

addTask.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        todoApp.addNewTask();
    }
})