import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Task from './Task';


export default class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
  }

  state = {
    blet: 'aaa'
  }

  callback=(id)=> {
    this.props.actions.activeTodo(id);
    this.setState({blet: 'blet'})
  }

  render() {
    const { todos, actions} = this.props
    console.log( 'todos: ', todos);
     return (
      <section className="my-main">
        <ul className="my-todo-list">
          {todos.map(todo =>
            <Task key={todo.id} todo={todo} {...actions} cb={this.callback}/>
          )}
        </ul>
      </section>
    )
  }
}
