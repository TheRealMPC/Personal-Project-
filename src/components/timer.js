import React, { Component } from 'react';
import TimeAgo from 'react-timeago';



class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag: false,
      date: null
    }
    this.showTime = this.showTime.bind(this);
  }

  initialState () {
    let initial =  JSON.parse(localStorage.getItem(this.props.objId)) || null;
    return initial ? initial : false;
  }

  componentDidMount(){
    if(this.initialState()){this.setState({date: this.initialState(), flag: true});}
    console.log("componentDidMount");
  }

  createDate() {
    let date = new Date().toString();
    localStorage.setItem(this.props.objId, JSON.stringify(date))
    return date;
  }

  showTime(e) {
    e.preventDefault();
    let date = this.createDate();
    this.setState({date : date,
       flag: true}, () => {
        console.log(this.state.date);
    });
    console.log(this.state);
  }

  render() {
         return (
             <div>
                <button className="btn btn-primary btn-lg" onClick={this.showTime}>Time now</button>
                {this.state.flag && <div><TimeAgo date={this.state.date} /></div>}
             </div>
         );
     }
 }

export default Timer;
