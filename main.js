
import { addTaskToDom } from './addTaskToDom.module.js';

    var data = [

    ];
    
    // add new task into the data and dom
    function addTask(name) {
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
    function removeTask(id) {
        let taskIndex = data.findIndex(x => x.id === id);
        data.splice(taskIndex, 1);
    }

    // changes task from finished to not finished or the opposite
    function changeStatus(id){
        // add or remove class of task-finished / task-not-finished
    }

    // render todos from local storage
    function render() {
        for (let i=0; i < data.length; i++) {

        }
    }

    // saves data to the local storage
    function save() {

    }


// event listeners

const taskName = document.getElementById('taskName');

taskName.addEventListener("keyup", function(event){
    if (event.keyCode === 13 && taskName.value !== "") {
       addTask(taskName.value);
       taskName.value="";
    }
})