
import './App.css'
import { Dogcard } from './components/Dogcard';

function App() {
    return(
        <>
            <Dogcard card="dog" image="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <br />

            <Dogcard card="tiger" image="https://images.pexels.com/photos/2541239/pexels-photo-2541239.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </>
    );
}

export default App
