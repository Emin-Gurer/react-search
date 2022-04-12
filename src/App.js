import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchString: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return { characters: data };
        });
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
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox
          className='characters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='Search characters'
        />
        <CardList characters={filteredChars} />
      </div>
    );
  }
}

export default App;
