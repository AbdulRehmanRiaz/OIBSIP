

const taskInput = document.querySelector('#input-task');
const addTaskBtn = document.querySelector('#add-task');
const pendingTasksList = document.querySelector('#pending-tasks-list');
const completedTasksList = document.querySelector('#completed-tasks-list');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const date = new Date();

    const task = {
      text: taskText,

      date: `${date.getDate()}/
      ${date.getMonth() + 1}
      /${date.getFullYear()} 
      ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      completed: false,
    };

    const li = createTask(task);
    pendingTasksList.appendChild(li);
    taskInput.value = '';
  }
}

  function createTask(task) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btnDiv = document.createElement('div');
  const completeBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  span.textContent = `${task.text} (${task.date})`;
  completeBtn.textContent = 'Complete';
  editBtn.textContent = 'Edit';
  deleteBtn.textContent = 'Delete';

  btnDiv.appendChild(completeBtn);
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnDiv);

  if (task.completed) {
    li.classList.add('completed');
    completedTasksList.appendChild(li);
  } else {
    li.classList.remove('completed');
  }

  completeBtn.addEventListener('click', () => {
    task.completed = true;
    li.classList.add('completed');
    pendingTasksList.removeChild(li);
    completedTasksList.appendChild(li);
  });

  editBtn.addEventListener('click', () => {
    const editText = prompt('Edit task:', task.text);
    if (editText !== null && editText.trim() !== '') {
      task.text = editText.trim();
      span.textContent = `${task.text} (${task.date})`;
    }
  });

  deleteBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this task?')) {
      if (task.completed) {
        completedTasksList.removeChild(li);
      } else {
        pendingTasksList.removeChild(li);
      }
    }
  });

  return li;
}

addTaskBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addTask();
});

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask();
  }
});
