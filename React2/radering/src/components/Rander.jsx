import { useState } from "react";


 function Rander() {

    const [isEditing, setIsediting] = useState();


    return (
        <>

            {
                (isEditing) ? <input /> : <p> some todos</p>
            }

            <button onClick={()=> setIsediting(!isEditing)}> click here </button>

        </>
    );

}



export {
    Rander
}