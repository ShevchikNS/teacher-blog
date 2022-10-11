import React from 'react';
import './PhotoGallery.css'
import Slider from "./Slider";

const PhotoGallery = () => {
    return (
        <div>
            <h1 className="PhotoGalleryHead">Фотогалерея</h1>
            <Slider/>
        </div>
    );
};

export default PhotoGallery;