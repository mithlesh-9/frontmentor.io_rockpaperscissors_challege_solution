import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.scss';


import ScoreBoard from './components/score-board/score-board';
import Home from './pages/home/home';
import Play from './pages/play/play';
import PrivacyPolicy from './pages/privacy-policy/privacy-policy';
import RulesBtn from './components/rules-btn/rules-btn';
import Modal from './components/modal/modal';

import Rules from './assets/images/image-rules.svg';


class App extends Component {
  state = {
    modal: false,
    player: ''

  }

   openModal = () => {
    this.setState({modal:true})
   }

  closeModal = () => {
   this.setState({modal:false})
  }

  render() {
    const {modal} =  this.state;
    const {score} = this.props;

  return (
    <div className="App">
    <ScoreBoard score={score} />
    <Switch>  
    <Route exact path="/game" component={Play} />
    <Route exact path="/" component={Home} />
    <Route exac path="/privacy-policy" component={PrivacyPolicy} />
    </Switch>
    <div className="btn-wrapper">
    <RulesBtn onClick={this.openModal}>Rules</RulesBtn>
    </div>
    <Modal modal={modal} title="RULES" onClose={this.closeModal}>
    <img src={Rules} alt="Rules" className="rule-img" />
    </Modal>

    </div>
  );
  }
}

const mapStateToProps = ({score,user}) => {
  return {
    score: score.score,
    user: user.user
  }
}



export default connect(mapStateToProps)(App);
