import React, { Component } from 'react';
import {Icon} from 'react-materialize';
import moment from 'moment';

class Timer extends Component {

  state = {
    seconds: 0
  }

  componentDidMount = () => {
    this.timer = setInterval(this.tick, 50);
  }

  tick = () => {
    this.setState({seconds: this.state.seconds + 1});
    console.log(moment("1900-01-01 00:00:00").add(this.state.seconds, 'seconds').format("HH:mm:ss"));

  }

  restart = () => {
    clearInterval(this.timer);
    this.setState({seconds : 0});
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount = () => {
    this.setState({
      seconds: this.state.seconds });
      clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {/* <p className="valign-wrapper" style={{marginLeft:"auto"}}>Total time is: 00:00:00 </p>
        <div className="p-icon">
          <Icon className="start material-icons">play_circle_outline</Icon>
        </div>  */}
        {/* <div className="timer valign-wrapper" style={{marginLeft:"auto"}}>
          <p>Прошло {this.state.seconds} секунд</p>
          <button onClick={this.restart} >RESTART</button><button onClick={this.componentWillUnmount}>STOP</button>
        </div> */}
        <div className="p-icon valign-wrapper" onClick={this.restart}>
          <p style={{display:"inline-block"}}> time elapsed  {moment("1900-01-01 00:00:00").add(this.state.seconds, 'seconds').format("HH:mm:ss")}</p>
          <Icon className="start material-icons" style={{display:"inline-block"}}>play_circle_outline</Icon>
        </div>
      </div>
    );
  }
}

export default Timer;
