function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Stop page refresh

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  document.getElementById('taskList').innerHTML = '';

  alert('Form submitted successfully!');
});
