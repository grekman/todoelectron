import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {Icon, CollectionItem } from 'react-materialize';
import Timer from './Timer';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'


export default class Task extends Component{
  static propTypes = {
    todo: PropTypes.object.isRequired,
    completeTodo: PropTypes.func.isRequired
  };

  handleCompleteClick = () => {
    console.log(this.props);
    this.props.completeTodo(this.props.todo.id)
  }

  handleCloseClick = () => {
    this.props.deleteTodo(this.props.todo.id)
  }

  callback = (id) => {
    this.props.cb(id);
  }


  render() {
    const {todo} = this.props;

    console.log("Task component: ", todo);
    return (
      <CollectionItem className="valign-wrapper yellow lighten-2 " style={{padding:"0 10px", display: "flex", justifyContent : "space-between" }}>
        <div style={{float:"left"}}>
          <input type="checkbox" className="filled-in" id={todo.id} style={{display:"inline-block"}} onClick={this.handleCompleteClick} />
          <label htmlFor={todo.id} className={(todo.completed ? 'completed':'')}>
            {todo.text}
          </label>
        </div>
        <div className="valign-wrapper">
          <Timer
            id={todo.id}
            active={todo.active}
            activateSm={this.props.activeTodo}
            callback={this.callback}
            inactivateSm={this.props.inactiveTodo}/>
          <div className="p-icon" onClick={this.handleCloseClick} >
            <Icon  className="close material-icons hoverable">close</Icon>
          </div>
        </div>
      </CollectionItem>
    )
  }
}
