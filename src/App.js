import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: '',
        },
      ],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    // console.log({ startingArray: this.state.monsters });
    const searchField = event.target.value.toLocaleLowerCase();

    // console.log(filteredMonsters);

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search Monsters"
          classname="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

// function App() {
//   return (

//   );
// }

export default App;
