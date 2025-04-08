const todoList = [];

function addtodoNotReal()
{
    const input = document.querySelector('.hideInput');
    const list  = input.value;
    todoList.push(list);

    console.log(todoList);

    input.value = '';
}

const task = ['make breakfast', 'eat lunch', 'drink dinner'];
console.log(task);
const taskDiv = document.querySelector('.showTask');
console.log(taskDiv);

for(let index = 0; index < 3; index++){
    const taskk = task[index];
    console.log(taskk);
    const html = `<p>${taskk}</p>`;
    console.log(html);
}