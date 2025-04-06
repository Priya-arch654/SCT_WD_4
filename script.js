function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() === '') return;
  
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `${taskInput.value} (Due: ${taskDate.value})`;
  
    const controls = document.createElement('div');
    controls.className = 'task-controls';
  
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.onclick = () => {
      span.classList.toggle('completed');
    };
  
    const editBtn = document.createElement('button');
    editBtn.textContent = '✎';
    editBtn.onclick = () => {
      const newTask = prompt('Edit task:', taskInput.value);
      const newDate = prompt('Edit date (YYYY-MM-DDTHH:MM):', taskDate.value);
      if (newTask && newDate) {
        span.textContent = `${newTask} (Due: ${newDate})`;
      }
    };
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = () => {
      taskList.removeChild(li);
    };
  
    controls.appendChild(completeBtn);
    controls.appendChild(editBtn);
    controls.appendChild(deleteBtn);
  
    li.appendChild(span);
    li.appendChild(controls);
    taskList.appendChild(li);
  
    taskInput.value = '';
    taskDate.value = '';
  }
  