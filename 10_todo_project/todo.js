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
    console.log(inputTask);
    const listTask  = inputTask.value;
    console.log(listTask);

    const htmlCode = `<p>${listTask}</p>`;
    console.log(htmlCode);
    inputTask.innerHTML += htmlCode;
}

const task = ['make breakfast', 'eat lunch', 'drink dinner'];
const taskDiv = document.querySelector('.showTask');

for(let index = 0; index < 3; index++){
    const taskk = task[index];
    const html = `<p>${taskk}</p>`;
    //taskDiv.innerHTML += html;
}