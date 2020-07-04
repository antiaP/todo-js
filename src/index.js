
import './styles.css';
// es lo mismo que:
//import { Todo, TodoList } from './classes/index.js';
// ya busca el index.js automaticamente
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => {
//     crearTodoHtml(todo);
// });
// como se le pasa solo un argumento tambien se puede escribir como:
todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos);