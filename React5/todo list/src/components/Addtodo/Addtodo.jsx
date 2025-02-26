import { useState } from "react";

function Addtodo({updateList}) {
    const [inputText, setInputText] = useState('');
    return(
        <div>
            <input
                type="text"
                value={inputText}
                placeholder="Enter a todo list "
                onChange={e => setInputText(e.target.value)}

            />
            <button onClick={() => updateList(inputText)} >Add Todo</button>
        </div>
    );
} 

export default Addtodo