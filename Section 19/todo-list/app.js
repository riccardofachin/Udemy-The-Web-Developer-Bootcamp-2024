const toDoList = [];

let command = prompt('Hello! What do you want to do?');

while (command !== 'quit') {
    if (command === 'new') {
        command = prompt('Which chore you wanna add?');

        toDoList.push(command);
    }

    if (command === 'list') {
        for (const toDo of toDoList) {
            console.log(toDo);
        }
    }

    if (command === 'delete') {
        const num = prompt('Which chore you wanna delete?');

        if (!Number.isNaN(parseInt(num))) {
            toDoList.splice(command - 1, 1);
        } else {
            console.log('Not a number..');
        }
    }

    command = prompt('What do you want to do now?');
}

console.log('Leaving the list..');