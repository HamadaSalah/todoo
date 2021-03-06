import React, {Component} from 'react';
import './App.css';
import ListItems from './ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      currentItem: {
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this); 
    this.addItem = this.addItem.bind(this); 
    this.deleteItem = this.deleteItem.bind(this); 
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems ,
        currentItem : {
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key) {
    const filterItems = this.state.items.filter( item => 
      item.key!==key );
    this.setState({items : filterItems});
  }
  render() {
    return(
      <div className='App'>
      <h1><center>TODO APP BY Hamada Salah</center></h1>
        <header>
          <form id='todoFrom' onSubmit={this.addItem}>
            <input type='text' placeholder='Write Here ...' onChange={this.handleInput} value={this.state.currentItem.text || ''} />
            <button>ADD</button>
          </form>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} />
        </header>
      </div>

    )
  }
}

export default App;
