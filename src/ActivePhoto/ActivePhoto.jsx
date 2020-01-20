import React from 'react';
import './ActivePhoto.css';


const ActivePhoto = (props) => {
    return (
        <div className= 'ActivePhoto'>
            <a href= {props.Active.deployment} rel="noopener noreferrer" target="_blank">
            <img src= {props.Active.photo} alt= {props.Active.title}/>
            </a>
        </div>
    )
}

export default ActivePhoto;