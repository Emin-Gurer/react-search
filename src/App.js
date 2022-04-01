import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchString: '',
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/?format=json')
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        this.setState(
          () => {
            return { characters: results, filteredChars: results };
          },
          () => {
            console.log(results);
          }
        );
      });
  }
  onSearchChange = (event) => {
    this.setState(() => {
      return { searchString: event.target.value };
    });
  };

  render() {
    const { onSearchChange } = this;
    const { characters, searchString } = this.state;
    const filteredChars = characters.filter((char) => {
      return char.name.toLowerCase().includes(searchString.toLowerCase());
    });

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search characters'
          onChange={onSearchChange}
        />
        {filteredChars.map((char) => {
          return <h1 key={char.name}>{char.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
