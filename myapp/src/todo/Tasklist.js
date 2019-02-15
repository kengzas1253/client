import React,{Component} from 'react'

class Tasklist extends Component{
render() {
       if ( this.props.tasks )
           return (<ul > {
                   this.props.tasks.map((item) => (
                       <li key={item.id}> {item.task} </li>
                   ))
               }
           </ul>)
   }

}
export default Tasklist