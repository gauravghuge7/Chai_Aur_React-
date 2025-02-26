import { useState } from "react";

function List() {

    const [todo, setTodo] = useState(['todo1', 'todo2']);

    return(
        <>
            <ul>
                
                {todo.map((todo) => <li>{todo}</li>)}

                <button onClick={()=> setTodo([...todo, "another one "])}> click here </button>
            </ul>
        </>
    );
}


export {
    List
}


