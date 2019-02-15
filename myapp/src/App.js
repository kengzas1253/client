import React, { Component } from 'react';
import './App.css';
import InputTask from './todo/inputTask'
import Tasklist from './todo/Tasklist'


class App extends Component {

 state = {
       tasks:  [{id: 1, task: 'Do homework'},
               {id: 2, task: 'Read book'}],
               id:3
   }

add = () => 
 {
   this.setState({count:this.state.count+1})
 }

minus = () => 
{
   this.setState({count:this.state.count-1})
}


   addTask = (task) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,task } ],
                id: this.state.id+1  })
   }

   render() {   


       return (

        <div>

        <div className="App-header">
        <h1>Counter</h1>
         {this.state.count} <br/>
        <button onClick={this.add}> Add</button>
        <button onClick={this.minus}> Minus</button>
       </div>
        
           
               <h1>Todo</h1>
               <Tasklist tasks={this.state.tasks}/>
               <InputTask addTask={this.addTask} id={this.state.id}/>
               <br/>
           
           </div>
       )}


 
}

export default App


