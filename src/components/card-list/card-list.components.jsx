import { Component } from 'react';
import CardCotainer from '../card-container/card-container.components';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    console.log('render from CardList');
    console.log(this.props.monsters);
    const { monsters } = this.props;
    console.log(this.props);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardCotainer monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
