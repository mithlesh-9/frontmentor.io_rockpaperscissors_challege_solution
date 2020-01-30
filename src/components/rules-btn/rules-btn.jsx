import React from 'react';
import './rules-btn.scss';


const RulesBtn = (props) => {
    return(        
        <button {...props} className="rules-btn">
            {props.children}
        </button>
    )
};


export default RulesBtn;

