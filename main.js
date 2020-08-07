    var data = [

    ];

    var addTaskToDom = (name, id, isFinished) => {
        // create elements
        const list = document.getElementById("list");
        const li = document.createElement("li"); li.className = "item"; li.id = id; list.appendChild(li);
        let status = `
            finished-${isFinished}
        `;
        let markup = `
        <div class="w-80 ${status}">
        <span class="name" id="name-${id}">${name}</span></div><div class="w-20">
        <i class="icon fa fa-trash-o" id="icon-${id}"></i>
       </div>
`;
        li.innerHTML = markup;

        // add event listeners
        let deleteIcon = document.getElementById('icon-'+id);
        let nameSpan = document.getElementById('name-'+id);
        deleteIcon.parentElement.addEventListener("click", ()=> {
            removeTask(id);
        });
        nameSpan.parentElement.addEventListener("click", ()=> {
            changeStatus(id);
        })
    }

    // add new task into the data
    var addTaskToData = (name) => {
        data[data.length] = {
            task: name,
            finished: false,
            deleted: false
        }
        if (data.length == 1) {
            data[0].id = +0;
        } else {
            data[data.length - 1].id = data[data.length - 2].id + 1;
        }
        save();
    }

    // removes the task from the both -  the data && the dom
    var removeTask = (id) => {
        data[id].deleted=true; // "delete" from the data :D 
        let DOMtoDelete = document.getElementById(id);
        DOMtoDelete.remove();
        console.log(`task number ${id} was deleted successfully`);
        save();
    }

    // changes task from finished to not finished or the opposite
    var changeStatus = (id) => {
        let element = document.getElementById(id);
        if (data[id].finished === true) {
            data[id].finished = false;
            element.firstElementChild.classList.remove("finished-true");
            element.firstElementChild.classList.add("finished-false");
            console.log("a");
        } else {
            data[id].finished = true;
            element.firstElementChild.classList.remove("finished-false");
            element.firstElementChild.classList.add("finished-true");
            console.log("b");
        }
       console.log(`task number ${id} has different status now :)`);
       save();
    }

    // saves data to the local storage
    let save = () => {
        localStorage.setItem("data", JSON.stringify(data));
    }

        // load data from local storage
    var load = () => {
            data = JSON.parse(localStorage.getItem("data"));
            for (let i = 0; i < data.length; i++) {
                if(data[i].deleted === false) {
                addTaskToDom(data[i].task, data[i].id, data[i].finished);
                }
            }
        }

    const input = document.getElementById('input');
    input.addEventListener("keyup", (event) => {
        if (event.keyCode === 13 && input.value !== "") {
            addTaskToData(input.value);
            addTaskToDom(input.value, data[data.length - 1].id, false);
            input.value = "";
        }
    })


    window.onload = function runOnPageLoad() { 
        if (JSON.parse(localStorage.getItem("data") !== null)) {
       load();
        }
    } 