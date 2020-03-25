import React from 'react';
import './App.css'
import List from './composition/List'

function App(props) {
  const store = props.store;
  const lists = store.lists.map(list => {
    return (
      <List
        key={list.id}
        header={list.header}
        cards={list.cardIds.map(cardId => {
          return store.allCards[cardId];
        })}
      >
      </List>
    );
  });

  return (
    <main className='App'>
      <header className='App-header'>
        <h2>Trelloyes!</h2>
      </header>
      <div className='App-list'>
        {lists}
      </div>
    </main>
  );
}

export default App;
