import React from 'react';
import Background from './images/bckimg.jpg';
import Header from './Header';
import NewItem from './NewItem';
import ItemList from "./ItemList";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listItem: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/todos")
        .then(response => response.json())
        .then(data => this.setState({listItem: data}));
  }

  render(){
    const appCont = {
      margin: '0 auto',
      backgroundColor: 'grey',
      width: '500px',
      backgroundImage: "url(" + Background + ")",
      backgroundSize: 'cover',
      overflow: 'hidden',
      fontSize: '16px',
      padding: '5px',
      color: '#5d6161'
      }
    return (
        <div style={appCont}>
          <Header></Header>
          <NewItem onSubmit={this.addItem}/>
          <ItemList toogleComplete={this.toogleComplete} onDelete={this.deleteItem} listItem={this.state.listItem}/>
        </div>
    );
  }

  toogleComplete = (newItem) => {
    newItem.completed = !newItem.completed;
    fetch("http://localhost:8080/todos/update", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
        .then(res => res.json())
        .then(data => this.setState({listItem: [...this.state.listItem.map(item => {
          if(item.id === newItem.id){
            item = newItem;
          }
          return item;
          })
          ]}));
  }
  deleteItem = (id) => {
    fetch("http://localhost:8080/todos/delete/" + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.setState({listItem: [...this.state.listItem.filter(item =>
          item.id !== id)]
    });
  }
  addItem = (itemName) => {
    const item = {
      name: itemName,
      completed: false
    };
    fetch("http://localhost:8080/todos/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
        .then(res => res.json())
        .then(data => this.setState({listItem: [...this.state.listItem, data]}));
  }
}

export default App;
