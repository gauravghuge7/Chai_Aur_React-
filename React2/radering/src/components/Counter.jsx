import { useState } from "react";


function Counter() {

    const [x, setX] = useState(0);
    return(
        <>
            Count: {x} is {(x%2==0)?'even':'odd'}

            <button onClick={()=> setX(x+1)}> increment</button>
            <button onClick={()=> setX(x-1)}>decrement</button>


        </>
    );
}

export {Counter}