import { FaCross, FaPen, FaRegCircle} from 'react-icons/fa';
import { Card } from '../Card/Card';

function Icon( {name}) {

    if(name == 'circle') {
        
        return <FaRegCircle size={30} />
    }
    else if(name == 'cross') {
        return <FaCross size={30} />
    }
    else {
        return <FaPen size={30} />
    }





}


export {Icon}