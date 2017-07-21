import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'react-materialize';
import moment from 'moment';
// import store from

class Timer extends Component {

  // static propTypes = {
  //   id: PropTypes.string.isRequired,
  //   activeTodo: PropTypes.func.isRequired
  // };
  constructor() {
    super();

    this.clicked = false;
  }

  state = {
    seconds: 0,
    timerActive: null,
    clicked: null
  }

  // componentDidMount = () => {
  //   // this.timer = setInterval(this.tick, 1000);
  //   this.setState({seconds : 0});
  // }

  tick = () => {
      this.setState({seconds: this.state.seconds + 1});
    // }

  }


  continue = () => {
    // clearTimeout(this.timer);
    // this.setState({
    //   seconds : this.state.seconds
    // });
    // this.timer = setTimeout(this.tick, 1000)
  }

  activate = () => {
    console.log('activate func', this.props);
    // console.log(this.state);
    // console.log(this.state);
    this.props.activateSm(this.props.id);
    // this.props.callback(this.props.id);

    // this.componentWillR/seceiveProps();

  }

  componentDidMount() {
    console.log('ComponentDidMount',this.props.active);
    console.log('timerActive before',this.state.timerActive);
    if(this.state.timerActive == null) {
      this.setState({timerActive: this.props.active});
      console.log('timerActive after',this.state.timerActive);
    }
  }

  shouldComponentUpdate() {
    this.clicked = true;
    console.log('!!! componentWillReceiveProps');
    console.log("!!! ACTIVE??", this.state.timerActive, this.clicked);
    if (this.state.timerActive != null && this.clicked == true) {
      console.log('YEEE~!');
      clearInterval(this.timer);
      this.setState({
        seconds : 0
      });
      this.timer = setInterval(this.tick, 1000);
      this.setState({timerActive: null, clicked: true});

      console.log(this.state.seconds);

    }
    else {
      return true;
    }
    // console.log(this.props.id)
    return true;
  }

  componentWillUnmount = () => {
    // console.log(this.props);
    this.setState({
      seconds: this.state.seconds
    });
    clearInterval(this.timer);
    this.props.inactivateSm(this.props.id)
  }

  render() {
    // this.yopta();
    console.log('timer component: ', this);
    return (
      <div className="valign-wrapper">
        <div className="p-icon valign-wrapper" onClick={this.activate}>
          <p style={{display:"inline-block"}}> total  {moment("1900-01-01 00:00:00").add(this.state.seconds, 'seconds').format("HH:mm:ss")}</p>
          <Icon className="start material-icons hoverable waves-effect" style={{display:"inline-block"}}>play_circle_outline</Icon>
        </div>
        <div className="p-icon valign-wrapper" onClick={this.componentWillUnmount}>
          <Icon className="pause material-icons hoverable waves-effect" style={{display:"inline-block"}}>pause_circle_outline</Icon>
        </div>
      </div>
    );
  }
}

export default Timer;
