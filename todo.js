let tasks = [];


function addTask() {
  //  let newTask = prompt("New task");
    let newTask=document.getElementById("txtTask").value;
    tasks.push(newTask);
    console.log(tasks);
    printTask()

}

function accion(pos) {
    let option = confirm(`The task: ${tasks[pos]}. will be deleted`);
    if (option == true) {
        tasks.splice(pos, 1);
        printTask();
    }
}


function printTask() {
    let list = "";

    for (i = 0; i < tasks.length; i++) {
        list += `<input type="checkbox" class="itemList"> <label onclick="accion(${i})"> ${tasks[i]}</label><br>`;

    };

    console.log(list);
    document.getElementById("taskList").innerHTML = list;
}

/**
function printTask()
{document.getElementById("taskList").innerHTML=`
<h2>ToDo List</h2>
<ol>
`;
    tasks.forEach(element => {
        document.getElementById("taskList").innerHTML+=`<li>${element}</li>`;
    });
document.getElementById("taskList").innerHTML+=`</ol>`;  
}
 */