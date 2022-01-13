import React from 'react'
import './styles.css'

export const Popup = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button 
                    className='close-btn' 
                    onClick={() => props.setTrigger(!props.trigger)}
                    >
                        <i class="far fa-times-circle"></i>
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}


