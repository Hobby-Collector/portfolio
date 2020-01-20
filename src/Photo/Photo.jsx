import React from 'react';
import "./Photo.css"

const Photo = (props) => {
    return (
        <div className='Photo'>
            <img
                src={props.Project.photo}
                alt={props.Project.name}
                data-idx= {props.idx}
                onClick={ props.handleClick}
                className= "zoom"
            />
        </div>
    )
}

export default Photo;