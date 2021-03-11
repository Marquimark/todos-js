import { Todo } from "./";

export class TodoList {

    constructor( ){

        // this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
       
    }

    elimiarTodo( id ){

        this.todos = this.todos.filter( todo => todo.id != id ) 
        this.guardarLocalStorage();

    }

    marcarCompletado( id ){

        for( const todo of this.todos ) {

            if ( todo.id === parseInt( id )  ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;        
            }

        }

    }

    elimiarCompletados() {

        this.todos = this.todos.filter( todo => !todo.commpletado )        
        this.guardarLocalStorage();
    }    

    guardarLocalStorage() {

        localStorage.setItem('Todo', JSON.stringify( this.todos)  );

    };

    cargarLocalStorage() {
        // console.log( 'Hola....', this.todos );
        // if( localStorage.getItem('todo') ) {
        //     this.todos = JSON.parse( localStorage.getItem('todo') );
        //     console.log('cargarLocal: ', this.todos );
        //     console.log( typeof this.todos );
        // } else {
        //     this.todos = [];
        // }

        this.todos  =   ( localStorage.getItem('Todo') ) 
                    ?   JSON.parse( localStorage.getItem('Todo') )
                    :   [];

        this.todos = this.todos.map( obj => Todo.fromJason( obj ) );

    }

}