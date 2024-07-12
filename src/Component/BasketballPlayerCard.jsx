
import './BasketballPlayerCard.css'
const BasketballPlayerCard = ({ name, image, position, stats }) => {
   
    return (
        <div className='card'>
      <img src={image} alt={name} />
          <h1>Name: {name}</h1>
      <h2>Position: {position}</h2>
      <div>
        <p>Points per Game: {stats.pointsPerGame}</p>
        <p>Assists per Game: {stats.assistsPerGame}</p>
        <p>Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
            
        </div>
    );
};

export default BasketballPlayerCard;