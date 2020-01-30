import React from 'react';
import  './hand-shape.scss';

import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';





const HandShape = (props) => {
    const {shape,iswinner = false} = props
    const className = `outer-circle ${shape} ${iswinner && 'winner'}`;
    return(
    <div {...props} className={className}>
        <div className="inner-circle">
        <img src={shape === 'paper' ? paper : shape === 'rock' ? rock : scissors} alt="hand-shape" />
        </div>
    </div>

    )
}

export default HandShape;