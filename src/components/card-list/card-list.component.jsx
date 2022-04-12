import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';
class CardList extends Component {
  render() {
    const { characters } = this.props;
    return (
      <div className='card-list'>
        {characters.map((char) => {
          return <Card char={char} key={char.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
