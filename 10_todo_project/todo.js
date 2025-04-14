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


function todoTasks(){
    const inputTask = document.querySelector('.todoInput');
    const showTask  = document.querySelector('.todoTasks');
    
    const listTask  = inputTask.value;

    const htmlCode = `<p>${listTask}</p><button class="deleteTaskButton">Delete</button>`;
    showTask.innerHTML += htmlCode;
}

const task = ['make breakfast', 'eat lunch', 'drink dinner'];
const taskDiv = document.querySelector('.showTask');

for(let index = 0; index < 3; index++){
    const taskk = task[index];
    const html = `<p>${taskk}</p>`;
    //taskDiv.innerHTML += html;
}