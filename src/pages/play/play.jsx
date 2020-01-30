import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './play.scss';

import HandShape from '../../components/hand-shape/hand-shape';

import {increment,decrement} from '../../redux/score/score-actions.js';
import { resetUser } from '../../redux/user/user-actions.js';


class Play extends Component {
    state = {
        isLoading: true,
        user: this.props.user,
        house:'',
        isWinner:false,
        winner:'',
        isDraw: false
    }

    componentDidMount() {
        const {user,history} = this.props
        if(!user) {
            history.push('/');
        }
        this.pickForHouse()
    }

    
    componentWillUnmount() {
        this.props.resetUser();
    }
    

    pickForHouse = () => {
        const options = ['rock','paper','scissors'];
        const randomNo = Math.floor(Math.random()*3);
        this.setState({house:options[randomNo]});
        setTimeout(()=>{
            this.setState({isLoading:false});
            this.displayWinner()
        },2000)
    }

    displayWinner = () => {
        const {user, house} = this.state;
        if(user && house) {
            this.compareShape(user,house);
        }

    }

    compareShape = (user,house) => {
      if(user === house) {
          this.setState({isDraw:true,isWinner:true});
      } else if(user === 'rock') {
          if(house === 'paper') {
            this.hasWon(house,false);
          } else {
            this.hasWon(user);
          }
      } else if(user === 'paper') {
        if(house === 'rock') {
            this.hasWon(user);
        } else {
            this.hasWon(house,false);
        }
    } else if(user === 'scissors') {
        if(house === 'paper') {
            this.hasWon(user);
        } else {
            this.hasWon(house,false);
        }
    }


    }

    hasWon = (winner,won = true) => {
        const {increment,decrement} = this.props
        if(won) {
            increment();
        } else {
            decrement();
        }     
        this.setState({winner,isWinner:true});
    }

    
    render() {
        const { isLoading, house, user, isWinner, winner, isDraw } = this.state
        return (
                <div className="alignment">
                <div className="hand-wrapper">
                <div className="txt">You Picked</div>
                <HandShape shape={user} iswinner={winner === user} />
                </div>
                {
                    isWinner && (
                        <div className="info">
                        <div className="text">
                        {
                            winner === user
                            ? 'You Won!'
                            : isDraw ? 'Draw' : 'You Lose!'
                        }
                        </div>
                        <Link to="/">
                        <button className="btn" >PLAY AGAIN</button>
                        </Link>
                        </div>
                    )
                }
                
                <div className="hand-wrapper">
                <div className="txt">The House Picked</div>
                {
                    isLoading 
                    ? (
                    <div className="house-loading"/>
                    )
                    : (              
                    <HandShape shape={house} iswinner={winner === house} />
                    )
                }
                </div>
                

                </div>
        )
    }
}

const mapStateToProps = ({user}) => ({
    user:user.user
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    resetUser: () => dispatch(resetUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(Play);