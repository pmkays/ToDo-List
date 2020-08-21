import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

class App extends Component {

  state ={
    todos: [
      // {
      //   id: uuid(),
      //   title: 'Wash dishes',
      //   completed:false
      // },
      // {
      //   id:uuid(),
      //   title: 'Cry',
      //   completed:false
      // },
      // {
      //   id:uuid(),
      //   title: 'Lie awake at night',
      //   completed: false
      // }
    ]
  }

  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5').then(response =>{
      this.setState({todos: response.data})
    }).catch(error => {
      console.log(error);
    })
  }

  markComplete =(id) =>{
    this.setState({
      todos: this.state.todos.map((item) => {
        if(item.id === id){
          item.completed = !item.completed;
        }
        return item;
      })
    });
  }

  delete = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response =>{
      this.setState({
        todos: [...this.state.todos.filter(item => item.id !== id)]
      })
    })
  }

  addTodo = (title) => {
    // const newTodo ={
    //   id:uuid(),
    //   title: title,
    //   completed: false
    // }
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    }).then(response => {
      this.setState({todos: [...this.state.todos, response.data]})
    });
    
  }

  render () { 
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} 
                markComplete={this.markComplete} 
                delete ={this.delete}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component ={About}/>
          </div>
        </div>
      </Router> 
    );
  }
}

export default App;
