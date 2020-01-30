import React,{ Component } from 'react';
import './home.scss';
import {connect} from 'react-redux';
import HandShape from '../../components/hand-shape/hand-shape';

import Triangle from '../../assets/images/bg-triangle.svg'

import {selectUser} from '../../redux/user/user-actions.js'

const styles = {
  background: `url(${Triangle})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize:'70%',
  backgroundPosition: '62px 70px'
}



class Home extends Component  {
  chooseShape = shape => {
    this.props.selectUser(`${shape}`)
    this.props.history.push('/game');

  }

  displayShapes = () => {
    let shapes = ['rock','paper','scissors'];
    return shapes.map((shape,i) => (
      <HandShape key={i} onClick={()=>this.chooseShape(shape)} shape={shape}/>
    ))
  }

 
  render() {
    return (
    <div className="choices" style={styles}>
      {this.displayShapes()}
      </div>
  )}
}

const mapDispatchToProps = dispatch => ({
  selectUser: (user) => dispatch(selectUser(user))
})

export default connect(null,mapDispatchToProps)(Home);
