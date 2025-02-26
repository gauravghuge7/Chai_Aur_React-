import { Image } from './Image';
import { Name } from './Name';

function Dogcard(props) {

    const title = ' this is the dogcard';
    return(
        <>

            <h1>{title}</h1>

            <Name> 
                <h1>{props.card}</h1>
                
            </Name>

            <Image src={props.image}/>

        </>
    );
}

export { Dogcard}