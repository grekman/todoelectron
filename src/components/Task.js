import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {Icon, CollectionItem } from 'react-materialize'
import Timer from './Timer'

export default class Task extends Component{
  static propTypes = {
    todo: PropTypes.object.isRequired,
    completeTodo: PropTypes.func.isRequired
  };

  handleCompleteClick = () => {
    this.props.completeTodo(this.props.todo.id)
  }

  handleCloseClick = () => {
    this.props.deleteTodo(this.props.todo.id)
  }

  render() {
    const {todo} = this.props;
    return (
      <CollectionItem className="valign-wrapper yellow lighten-2" style={{padding:"0 10px"}}>
        <input type="checkbox" className="filled-in" id={todo.id} style={{display:"inline-block"}} onClick={this.handleCompleteClick} />
        <label htmlFor={todo.id} className={(todo.completed ? 'completed':'')}>
          {todo.text}
        </label>
          <Timer />
        <div className="p-icon" onClick={this.handleCloseClick} >
          <Icon  className="close material-icons">close</Icon>
        </div>
      </CollectionItem>
    )
  }
}
