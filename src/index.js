import './styles.scss';

const appEl = document.querySelector('div.app');
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

const addTodo = () => {
  let input = textField.value;
  if (input) {
    const newTodo = document.createElement('li');
    newTodo.innerText = input;
    newTodo.addEventListener('click', () => {
      toggleTodo(newTodo);
    });

    todoList.insertBefore(newTodo, todoList.children[0]);
    textField.value = '';
  } else {
    console.log('no input given');
  }
};

submitButton.addEventListener('click', addTodo);
textField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

// const findFirstDone = () => {
//   const todos = Array.from(todoList.children);
//   const index = todos.findIndex((el) => el.classList.contains('done'));

//   console.log('findFirstDone', {
//     index,
//     'todos.length': todos.length,
//     'todoList.length': todoList.length,
//   });

//   return index >= 0 ? index : todos.length;
// };

const findInsertBeforeEl = () => {
  const todos = Array.from(todoList.children);
  let index = todos.findIndex((el) => el.classList.contains('done'));
  index = index >= 0 ? index : todos.length;
  return todos[index];
};

const toggleTodo = (todoEl) => {
  todoList.removeChild(todoEl);

  todoEl.classList.contains('done')
    ? todoEl.classList.remove('done')
    : todoEl.classList.add('done');

  const insertBeforeEl = findInsertBeforeEl();
  todoList.insertBefore(todoEl, insertBeforeEl);

  // if (todoEl.classList.contains('done')) {
  //   todoEl.classList.remove('done');

  //   const index = findFirstDone();
  //   const insertBeforeEl = todoList.children[index];
  //   console.log({ index, insertBeforeEl });

  //   todoList.insertBefore(todoEl, insertBeforeEl);
  // } else {
  //   todoEl.classList.add('done');

  //   const index = findFirstDone();
  //   const insertBeforeEl = todoList.children[index];

  //   // const index2 = index - todoList.length;
  //   // const insertBeforeEl = todoList.children[index2];
  //   // console.log({ index, index2, insertBeforeEl });

  //   todoList.insertBefore(todoEl, insertBeforeEl);
  // }
};

console.log('🚀 todo app started. welcome!', { appEl });
