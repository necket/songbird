import React from 'react';

import data from './data'

import Header from './components/header'
import Player from './components/player'
import Birds from './components/birds'
import Info from './components/info'

let lvl = 0;

class App extends React.Component {

  state = {
    birds: data[lvl],
    answer: data[lvl][Math.floor(Math.random()*data[lvl].length)],
    choose: null,
    complete: false
  }

  chooseBird = (id) => {
    this.setState({
      choose: this.state.birds[id - 1]
    });
  }

  render(){
    return (
      <div className="container">
        <Header lvl={lvl}/>
        <Player bird={this.state.answer} complete={this.state.complete}/>
        <div className="row">
          <Birds birds={this.state.birds} chooseBird={this.chooseBird}/>
          <Info choose={this.state.choose}/>
        </div>
      </div>
    );
  }
  
}

export default App;
