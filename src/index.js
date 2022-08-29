document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener('submit', addTask);
  function addTask(e){
    e.preventDefault()

    const getInput = document.getElementById('new-task-description').value;
     const lists = document.createElement('li');
     lists.appendChild(document.createTextNode(getInput));

     const deleteBtn = document.createElement('button');
     deleteBtn.className = 'remove'
     deleteBtn.appendChild(document.createTextNode('X'));
     lists.appendChild(deleteBtn);

     function removeTask(e){
      if(e.target.className.contains('remove')){
        lists.removeChild(li);
      }
     };

  }
});
