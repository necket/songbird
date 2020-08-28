import React from 'react';

import data from './data'

import Header from './components/header'
import Player from './components/player'
import Birds from './components/birds'
import Info from './components/info'
import Next from './components/next'
import Over from './components/over'

let lvl = 0;

class App extends React.Component {

  state = { 
    birds: data[lvl],
    answer: data[lvl][Math.floor(Math.random()*data[lvl].length)],
    choose: null,
    complete: false,
    score: 0, 
    over: false
  }

  chooseBird = (id) => {
    this.setState({
      choose: this.state.birds[id - 1]
    });
    if(!this.state.complete) {
      document.querySelector(`#li-${id}`).classList.remove('unused');
      if(id === this.state.answer.id){ // если ответ правильный
        document.querySelector(`#li-${id}`).style.background= '#0f0';
        document.querySelector('audio').pause();
        playSound(1);
        this.setState({
          complete: true,
          score: this.state.score + [...document.querySelectorAll('.unused')].length
        });
      }else{ // если ответ неправильный
        document.querySelector(`#li-${id}`).style.background= '#f00';
        playSound();
      }
    }
  }

  next = () => {
    if(data.length === lvl + 1) {
      this.setState({
        over: true
      });
    }else{
      lvl++;
      [...document.querySelectorAll('.li-btn')].forEach(el => {
        el.style.background = '#444';
        el.classList.add('unused');
      });
      this.setState({
        birds: data[lvl],
        answer: data[lvl][Math.floor(Math.random()*data[lvl].length)],
        choose: null,
        complete: false
      });
    }
  }

  render(){

    let content = !this.state.over ?  
    <>
      <Player bird={this.state.answer} complete={this.state.complete}/>
      <div className="row">
        <Birds birds={this.state.birds} chooseBird={this.chooseBird}/>
        <Info choose={this.state.choose}/>
      </div>
      <Next btn={this.state.complete} next={this.next}/>
    </> :
    <Over score={this.state.score}/>

    return (<>
      <div className="container">
        <Header lvl={lvl} score={this.state.score}/>
        {content}
      </div>
      <audio src={require('./sound/win.mp3')} id="winSound"></audio>
      <audio src={require('./sound/error.mp3')} id="errorSound"></audio>
    </>);
  }
  
}

export default App;


function playSound(win) {
  if(win) {
    let sound =  document.querySelector('#winSound');
    sound.pause();
    sound.currentTime = 0.0;
    sound.play();
  }else{
    let sound =  document.querySelector('#errorSound');
    sound.pause();
    sound.currentTime = 0.0;
    sound.play();
  }
}