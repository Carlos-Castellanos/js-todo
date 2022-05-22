let tasks = [];
let completed = [];
let count=0;
let _todoList=document.getElementById("taskList");
let newTask = document.getElementById("txtTask");

function registerTask() {
       
  if (true || newTask.value.length>0) {
        tasks.push(newTask.value);
        completed.push(false);
        console.log(tasks);
        printTask()
    }
    newTask.value="";

}

function printTask() {
    let list=
    `<tr id="task${count}">
    <td><div class="itemList">${tasks[count]}</div></td>
    <td><button class="btn" onclick = "deleteTask (this)">Delete</button></td>
    </tr>
    `;
    count++;
    console.log(list);
    _todoList.innerHTML += list;
}


function deleteTask(r) {
    let i=r.parentNode.parentNode.rowIndex;
    console.log(`Borrar a task${i}`);
    document.getElementById('myTable').deleteRow(i)
    tasks.splice(i-1, 1);
    console.log(tasks);
    }
    

