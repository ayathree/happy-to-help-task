

import './App.css'
import BasketballPlayerCard from './Component/BasketballPlayerCard';

function App() {
  
  return (
    <>
   <BasketballPlayerCard
        name="LeBron James"
        image="https://media.istockphoto.com/id/525345961/photo/afro-american-male-basketball-player-with-a-ball.jpg?s=612x612&w=0&k=20&c=3l1n8l-PSNoLdQVy3toKCzG1jgoN6jGhM6vgoHrE6nU="
        position="Forward"
        stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
      />
     
    </>
  )
}

export default App
