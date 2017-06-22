import React, { Component} from 'react';
import PropTypes from 'prop-types';

export default class NewTodo extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({text: ''})
      }
    }
  }
  
  handleChange = e => {
    this.setState({text: e.target.value})
  }

  render() {
    return(
      <div className="input-field">
        <input
          id="addItem"
          type="text"
          placeholder={this.props.placeholder}
          autoFocus="true"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
          className="validate" />
        <label htmlFor="addItem" >What should be done?</label>
      </div>
    )
  }

}
