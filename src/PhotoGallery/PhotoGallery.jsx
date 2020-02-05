import React, { Component } from "react";
import './PhotoGallery.css';
import Photos from '../Photos/Photos'
import TextContentArea from "../TextContentArea/TextContentArea";
import Projects from '../data/data'
import ActivePhoto from "../ActivePhoto/ActivePhoto";

class PhotoGallery extends Component {
    state = {
        Projects: [...Projects],
        ActiveIndex: 0
    }

    renderPhotos = () => {
        const { Projects, ActiveIndex } = this.state;
        if (Projects.length) {
            return <ActivePhoto Active={Projects[ActiveIndex]} />
        }
    }

    renderTextContent = () =>{
        const { Projects, ActiveIndex } = this.state;
        if (Projects.length) {
            return <TextContentArea className= "col" Active={Projects[ActiveIndex]} />
        }
    }

    handleClick = (e) =>{
        const newActiveIndex = e.target.getAttribute('data-idx');
        this.setState({ActiveIndex: newActiveIndex});
    }

    render() {
        return (
            <div className='PhotoGallery'>
                <Photos
                    className= "col"
                    Projects={this.state.Projects}
                    renderPhotos={this.renderPhotos()}
                    handleClick = {this.handleClick}
                />
                {this.renderTextContent()}
            </div>
        )
    }
}

export default PhotoGallery;