const todoList = [];

function addtodoNotReal()
{
    const input = document.querySelector('.hideInput');
    const list  = input.value;
    todoList.push(list);

    console.log(todoList);
}