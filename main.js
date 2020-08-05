    var data = [

    ];
    


// renders task to the dom, used for the function below and when rendering a page from local storage. I absolutelly hate this code.
var addTaskToDom = (value, id) => {
    // creae a li element 
    let list = document.createElement("li");
    list.id= id;
    list.className="task task-not-finished";
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
        console.log("delete button clicked");
        removeTask(id);
    })

    // event listener for the li element for the done / undone task
    document.getElementById(id).addEventListener("click", function () {
        console.log("element for the change status clicked");
        changeStatus(id);
    })
}


    // add new task into the data and dom
    var addTask = (name) => {
        data[data.length] = {
            task: name,
            finished: false,
        }
        if (data.length == 1) {
            data[0].id=+0;
        }
        else {
            data[data.length-1].id = data[data.length-2].id+1;
        }
        addTaskToDom(name, data[data.length-1].id); // function from the module

    }

    // removes the task from the data and the dom
    var removeTask = (id) => {
        let taskIndex = data.findIndex(x => x.id === id);
        data.splice(taskIndex, 1);
    }

    // changes task from finished to not finished or the opposite
    var changeStatus = (id) => {
       let element = document.getElementById(id);
       if (data[id].finished === true) {
           data[id].finished = false;
           console.log("a");
       }
       else {
        data[id].finished = true;
        console.log("b");
       }
    }

    // render todos from local storage
    let render =()=> {
        for (let i=0; i < data.length; i++) {

        }
    }

    // saves data to the local storage
    let save =()=> {

    }


// event listeners

const taskName = document.getElementById('taskName');

taskName.addEventListener("keyup", (event) =>{
    if (event.keyCode === 13 && taskName.value !== "") {
       addTask(taskName.value);
       taskName.value="";
    }
})