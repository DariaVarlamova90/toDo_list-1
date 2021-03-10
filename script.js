document.querySelector('.input__btn').addEventListener('click', function(){
    let taskDiv = document.createEvent('div');
    taskDiv.className = 'task__wrapper';
    taskDiv.innerHTML = 'DIV task__wrapper';
    document.querySelector('.tasks__wrapper').appendChild(taskDiv);
})