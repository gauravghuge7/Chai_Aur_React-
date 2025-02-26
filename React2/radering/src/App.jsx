
import { Counter } from './components/Counter'
import { Rander } from './components/Rander'
import { List } from './components/List'
import { Avatar } from './components/Avatar'

function App() {


  return (
    <>
      {/* <Rander />
      <List /> */}
      
      <Avatar
      
        src="https://images.pexels.com/photos/17617625/pexels-photo-17617625/free-photo-of-pink-chrysanthemum-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

        height="500px"

        width="500px"
      />

      <Avatar>
        
        <span>
          this is span tag 
        </span>
      </Avatar>


    </>
  )
}

export default App
