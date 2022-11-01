import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    console.log('1 Contructor');
    super();

    this.state = {
      monsters: [
        {
          name: 'Saurav',
          id: '001',
        },
      ],
      searchField: '',
    };
  }

  componentDidMount() {
    console.log('3 Component DiD Mount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    console.log({ startingArray: this.state.monsters });
    const searchField = event.target.value.toLocaleLowerCase();

    // console.log(filteredMonsters);

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('2 Render Function');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          className="search-input"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

// function App() {
//   return (

//   );
// }

export default App;
