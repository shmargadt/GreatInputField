import React, { Component } from 'react';
import './App.css';
import DumpInput from './DumpInput';

class GreatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      new_input: '123'
    }
    this.onRenderNewInput = this.onRenderNewInput.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.changeAsteriskToBold = this.changeAsteriskToBold.bind(this);
  }

   onRenderNewInput = function () {
    this.setState({new_input: this.changeAsteriskToBold(this.state.input)});
    console.log(this.state.new_input);
  }

   onChangeInput = function (e) {
    this.state.input = e.target.value;
  }


  changeAsteriskToBold = function (text) {
    if (!text) { return; }
    var new_text = '';
    var res = '';
    var flag = false;
    new_text = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
    for (var i = 0; i < new_text.length; i++) {
      if (new_text[i] === '*') {
        if (flag === false) {
          res += '<b>';
          flag = true;
        } else {
          res += '</b>';
          flag = false;
        }
      } else {
        res += new_text[i];
      }
    }
    return res;
 } 


  
  render() {
    return (
      <div className="great-input-container">
        <input onChange={this.onChangeInput} id="" />
        <div onClick={this.onRenderNewInput}><b> Click to ender new input</b></div>
        <div> New Input: </div>
        <div dangerouslySetInnerHTML={{__html: this.state.new_input}}></div>
      </div>
    );
  }
}

export default GreatInput;