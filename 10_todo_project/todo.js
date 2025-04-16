const todoList = [];

function addtodoNotReal()
{
    const input = document.querySelector('.hideInput');
    const list  = input.value;
    todoList.push(list);

    console.log(todoList);

    input.value = '';
}

function addTasks(){
    const inputTask = document.querySelector('.liveInput');
    const showTask  = document.querySelector('.showTask');
    
    const listTask  = inputTask.value;

    const htmlCode = `<p>${listTask}</p>`;
    showTask.innerHTML += htmlCode;
}


function todoTasks() {  
    const inputTask = document.querySelector('.todoInput');  
    const inputDate = document.querySelector('.todoDate');  
    const showTask  = document.querySelector('.todoTasks');  

    const listTask  = inputTask.value;  
    const dateTask  = inputDate.value;  

    // Create a new task item  
    const taskItem = document.createElement('div');  
    taskItem.classList.add('taskItem');  

    // Create the HTML structure for the task  
    taskItem.innerHTML = `  
        <p>${listTask}${dateTask ? `, ${dateTask}` : ''}</p>  
        <button class="deleteTaskButton" onclick="deleteTaskFunction(this)">Delete</button>  
    `;  

    // Append the task item to the showTask container  
    showTask.appendChild(taskItem);  

    // Clear inputs after adding a task  
    inputTask.value = '';  
    inputDate.value = '';  
}  

function deleteTaskFunction(button) {  
    // Get the parent element of the button, which is the task item  
    const taskItem = button.parentElement;  
    
    // Remove the task item from the DOM  
    taskItem.remove();  
}  

const task = ['make breakfast', 'eat lunch', 'drink dinner'];
const taskDiv = document.querySelector('.showTask');

for(let index = 0; index < 3; index++){
    const taskk = task[index];
    const html = `<p>${taskk}</p>`;
    //taskDiv.innerHTML += html;
}