document.querySelector('.input__btn').addEventListener('click', function(){
    let taskDiv = document.createElement('div');
    let taskText = document.querySelector('.input__text').value;
    taskDiv.className = 'task__wrapper';
    taskDiv.innerHTML = `<div class = 'task__wrapper'>${taskText.value}</div>`;
    document.querySelector('.tasks__wrapper').appendChild(taskDiv);
})