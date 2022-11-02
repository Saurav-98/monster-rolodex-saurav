import CardCotainer from '../card-container/card-container.components';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardCotainer monster={monster} />;
    })}
  </div>
);

export default CardList;
