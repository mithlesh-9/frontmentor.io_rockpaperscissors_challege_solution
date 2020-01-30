import React from 'react';

import './modal.scss';


const Modal = (props) => {
    const {title,onClose, modal} = props
    if(modal) {
        return(
            <div className="modal">
            <div className="modal-content">
            <div className="title">{title}</div>
            <button className="close-btn" onClick={onClose}>&times;</button>
            {props.children}
            </div>
            </div>
        )
    } else {
        return null;
    }
    
}


export default Modal;