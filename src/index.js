import 'bootstrap'

import './scss/app.scss';

const taskContainer = document.querySelector('.tasks-list-section .list-group');
const fragment = document.createDocumentFragment();

const tl = [];

class TodoList {
  constructor(tasks) {
    this.tasks = tasks;
  }

  add(task) {
    this.tasks.push(task);
  }

  delete(id) {
    if(this.tasks.id == id) {
      delete this.tasks;
    }
  }
}

class Task {
  constructor(title, body) {
    this.id = Math.random();
    this.title = title;
    this.body = body;
  }
}

const todoList = new TodoList(tl); 

const form = document.forms['addTask'];
const inputTitle = form.elements['title'];
const inputBody = form.elements['body'];



const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const titleValue = inputTitle.value;
  const bodyValue = inputBody.value;

  if (!titleValue || !bodyValue) {
    alert("Пожалуйста введите Task title и Task body");
    return;
}

  const newTask = new Task(titleValue, bodyValue);
  todoList.add(newTask);

  addTasks(newTask);
  form.reset()

  localStorage.setItem('todoList', JSON.stringify(todoList));
  localStorage.getItem('newTask');

})

function addTasks(task) {

    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'flex-wrap', 'mt-2');
    li.setAttribute('data-task-id', task.id);

    const span = document.createElement('span');
    span.style.fontWeight = 'bold';
    span.textContent = task.title;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');

    const article = document.createElement('p');
    article.textContent = task.body;
    article.classList.add('mt-2', 'w-100');

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);

    fragment.appendChild(li);
    taskContainer.appendChild(fragment);
}

taskContainer.addEventListener('click', removeTask);

function removeTask (e) {
  if(e.target.classList.contains('delete-btn')) {
      const data = e.target.parentElement;
      const id = data.dataset.taskId;

      todoList.delete(id);
      data.remove();
  }
}

