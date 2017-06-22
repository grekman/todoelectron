import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
  }

  render() {
    const { todos, actions} = this.props
     return (
      <section className="my-main">
        <ul className="my-todo-list">
          {todos.map(todo =>
            <Task key={todo.id} todo={todo} {...actions}/>
          )}
        </ul>
      </section>
    )
  }
}
