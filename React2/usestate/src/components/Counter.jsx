import {useState} from 'react';

function Counter() {

        let [x, setX] = useState(0);
        let [y, setY] = useState(14);
    return(
        <>
            Count : {x}

            <button onClick={() => setX(x+1)}>increment</button>
            <button onClick={() => setX(x-1)}> decrement</button>
            
            <br />
            
            Count : {y}
            <button onClick={()=> setY(y+1)}> increment</button>
            <button onClick={()=> setY(y-1)}> decrement</button>
            
        </>
    );
}

export {
    Counter
}