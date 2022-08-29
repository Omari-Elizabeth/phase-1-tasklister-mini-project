document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener('submit', addTask);
  function addTask(e){
    e.preventDefault()

    const getInput = document.getElementById('new-task-description').value;
    const lists = document.createElement('li');
    lists.appendChild(document.createTextNode(getInput));

    document.querySelector('#tasks').appendChild(lists)

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'remove'
    deleteBtn.appendChild(document.createTextNode('X'));
    lists.appendChild(deleteBtn);

    let removeButtons = document.querySelectorAll('.remove')

    removeButtons.forEach(x => x.addEventListener('click', removeTask));

    function removeTask(e){
      // if(e.target.className.contains('remove')){
      //   lists.removeChild(li);
      // }
      this.parentNode.remove();
     };

  }
});
