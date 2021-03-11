import './styles.css';

// import { Todo } from './classes/todo.class';
// import { TodoList  } from './classes/todo-list.class';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList( );
// todoList.todos.forEach( todo => crearTodoHtml( todo ))
todoList.todos.forEach( crearTodoHtml ); // este solo funciona bien si es solo un argumento, reemplaza al de arriba.

// todoList.todos[0].imprimirClase();

console.log( todoList.todos );
// const tarea = new Todo( 'Aprender Javascript!!!' );
// todoList.nuevoTodo( tarea );
// tarea.completado = true;

// console.log( todoList );
// crearTodoHtml( tarea );

// localStorage.setItem('miKey', 'ABC1234');
// sesionStorage.setItem('miKey', 'ABC1235');

// setTimeout( () => {

//     localStorage.removeItem('miKey');

// }, 1500 );