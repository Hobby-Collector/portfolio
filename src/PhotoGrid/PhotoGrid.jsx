import React from 'react';
import "./PhotoGrid.css"
import Photo from "../Photo/Photo"

const PhotoGrid = (props) => {
    return (
        <div className="PhotoGrid">
            {props.Projects.map((Project,idx) =>
                <Photo key={idx} Project= {Project} idx = {idx} handleClick= {props.handleClick} />
            )}
        </div>
    )
}

export default PhotoGrid;