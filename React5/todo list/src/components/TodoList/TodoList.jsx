import { useState } from "react";
import Todo from "../Todo/todo";

function TodoList({list}) {

    
    return(
        <div> 
            {list.length > 0 && list.map(todo => <Todo key={todo.id} TodoData={todo.todoData} />)}
        </div>
    );
}


export default TodoList;