import './styles.scss';
import { hasBuzzword } from './buzzwords';

// Helpers

const validateTextField = (textFieldEl) => {
  const text = textFieldEl.value;

  hasBuzzword(text)
    ? textFieldEl.classList.add('buzzword')
    : textFieldEl.classList.remove('buzzword');
};

// const isValidInput = (text) => text && !hasBuzzword(text);

const addTodo = (todoListEl, textFieldEl) => {
  const text = textFieldEl.value;

  // if (!isValidInput(text)) return;

  // check if text is null
  if (!text) {
    console.log('no input given');
    return;
  }

  // check if text has buzzword
  if (hasBuzzword(text)) {
    console.log('read a normal book please');
    return;
  }

  const newTodo = document.createElement('li');
  newTodo.innerText = text;
  newTodo.addEventListener('click', () => {
    toggleTodo(todoListEl, newTodo);
  });

  todoListEl.insertBefore(newTodo, todoListEl.children[0]);
  textFieldEl.value = '';
};

const toggleTodo = (todoListEl, todoEl) => {
  todoListEl.removeChild(todoEl);

  todoEl.classList.contains('done')
    ? todoEl.classList.remove('done')
    : todoEl.classList.add('done');

  const insertBeforeEl = findInsertBeforeEl(todoListEl);
  todoListEl.insertBefore(todoEl, insertBeforeEl);
};

const findInsertBeforeEl = (todoListEl) => {
  const todos = Array.from(todoListEl.children);
  let index = todos.findIndex((el) => el.classList.contains('done'));
  index = index >= 0 ? index : todos.length;
  return todos[index];
};

const onEnter = (fun) => (event) => {
  if (event.key === 'Enter') {
    fun();
  }
};

// Main

const App = (appEl) => {
  const headingEl = document.createElement('h2');
  headingEl.innerText = 'My Todos';

  appEl.innerText = '';
  appEl.appendChild(headingEl);

  const textField = document.createElement('input');
  const submitButton = document.createElement('button');
  submitButton.innerText = 'Add Todo';
  const todoList = document.createElement('ul');

  appEl.appendChild(textField);
  appEl.appendChild(submitButton);
  appEl.appendChild(todoList);

  // jules's solution
  // const submitHandler = () => addTodo(todoList, textField);
  // submitButton.addEventListener('click', submitHandler);
  // submitButton.addEventListener('keydown', onEnter(submitHandler));

  submitButton.addEventListener('click', () => {
    addTodo(todoList, textField);
  });

  textField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTodo(todoList, textField);
    }
  });

  textField.addEventListener('keyup', () => {
    validateTextField(textField);
  });
};

App(document.querySelector('div.app'));

//console.log('🚀 todo app started. welcome!', { appEl });
