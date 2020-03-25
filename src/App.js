import React from 'react';
import './App.css'
import List from './composition/List'

// function App(props) {
//   const store = props.store;
//   const lists = store.lists.map(list => {
//     return (
//       <List
//         key={list.id}
//         header={list.header}
//         cards={list.cardIds.map(cardId => {
//           return store.allCards[cardId];
//         })}
//       >
//       </List>
//     );
//   });

//   return (
//     <main className='App'>
//       <header className='App-header'>
//         <h1>Trelloyes!</h1>
//       </header>
//       <div className='App-list'>
//         {lists}
//       </div>
//     </main>
//   );
// }

class App extends React.Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  render() {
    const { store } = this.props;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(cardId => store.allCards[cardId])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
