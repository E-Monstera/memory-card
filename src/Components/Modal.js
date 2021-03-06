import '../styles/modal.css'
import React from 'react';

const Modal = (props) => {

    // Displays the 'pop-up' for when the player loses or wins
    return (
        <div className='modal'>
            <div className='modal-main'>
                <button onClick={props.hideModal}>X</button>
                <h1>{props.message}</h1>

            </div>
        </div>
    )
}


export default Modal