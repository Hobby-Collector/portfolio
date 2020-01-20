import React from "react";
import './Photos.css';
import PhotoGrid from "../PhotoGrid/PhotoGrid";

const Photos = (props) => {
    return (
        <div className='Photos'>
            {props.renderPhotos}
            <PhotoGrid
                handleClick={props.handleClick}
                Projects={props.Projects}
            />
        </div>
    )
}


export default Photos;