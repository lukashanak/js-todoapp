
export var addTaskToDom = (value, id) => {
    // creae a li element 
    let list = document.createElement("li");
    list.id= id;
    list.className="task-classic task-not-finished";
    // create a span element for the task-name
    let spanForName = document.createElement("span");
    spanForName.className="task-name";
    spanForName.innerHTML=value;
    // create a span element for the task delete-icon
    let spanForDeleteIcon = document.createElement("span");
    spanForDeleteIcon.className="task-delete";
    spanForDeleteIcon.id="span-for-delete-icon-"+id;
       // icon for the delete-icon
       let deleteIcon = document.createElement("i");
       deleteIcon.className="fa fa-trash-o delete-icon";
       deleteIcon.id="delete-"+id;
   // inject pre-created elements into the real DOM
    document.getElementById("list-of-tasks").appendChild(list);
    document.getElementById(id).appendChild(spanForName);
    document.getElementById(id).appendChild(spanForDeleteIcon);
    document.getElementById(spanForDeleteIcon.id).appendChild(deleteIcon);
    // event listener for delete icon
    document.getElementById(deleteIcon.id).addEventListener("click", function(){
        removeTask(id);
    })

    // event listener for the li element for the done / undone task
    document.getElementById(id).addEventListener("click", function () {
        changeStatus(id);
    })
}
