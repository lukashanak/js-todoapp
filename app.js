class TodoApp {
    constructor() {
        lastTaskId = 0;
        addTask= addTask;
    }
    addNewTask() {
        let self = 
         let value = addTask.value;
         if (addTask.value == "") { console.log("error, input is empty") }
         else {
         // creae a li element 
         let list = document.createElement("li");
         list.id= lastTaskId;
         list.className="task-classic task-not-finished";
         // create a span element for the task-name
         let spanForName = document.createElement("span");
         spanForName.className="task-name";
         spanForName.innerHTML=addTask.value;
         // create a span element for the task delete-icon
         let spanForDeleteIcon = document.createElement("span");
         spanForDeleteIcon.className="task-delete";
         spanForDeleteIcon.id="span-for-delete-icon-"+lastTaskId;
            // icon for the delete-icon
            let deleteIcon = document.createElement("i");
            deleteIcon.className="fa fa-trash-o delete-icon";
            deleteIcon.id="delete-"+lastTaskId;
        // inject pre-created elements into the real DOM
         document.getElementById("list-of-tasks").appendChild(list);
         document.getElementById(lastTaskId).appendChild(spanForName);
         document.getElementById(lastTaskId).appendChild(spanForDeleteIcon);
         document.getElementById(spanForDeleteIcon.id).appendChild(deleteIcon);
         // event listener for delete icon
         let x = lastTaskId;
         document.getElementById(deleteIcon.id).addEventListener("click", function(){
             self.removeTask(x);
         })

         // event listener for the li element for the done / undone task
         document.getElementById(lastTaskId).addEventListener("click", function () {
             self.markAsDoneOrUndone(x);
         })

         // others
         addTask.value="";
         lastTaskId+=1;
         console.log("task added");
        }
    }
    markAsDoneOrUndone(taskId){
        let task = document.getElementById(taskId);
        let isFinished = task.classList.contains("task-finished");
        if (isFinished === true) {
            task.classList.remove("task-finished");
            task.classList.add("task-not-finished");
        }
        else {
            task.classList.remove("task-not-finished");
            task.classList.add("task-finished");
        }
        console.log("task number " + taskId + " done / undone");
    }
    removeTask(taskId) {
        document.getElementById(taskId).remove();
        console.log((taskId) + " was removed");
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