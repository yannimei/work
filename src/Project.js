import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';



export function Project({ src, name, caption, challenge,link, width }) {
  
    const [classN, setClassN] = useState('work-frame frameInactive');
    const [image, setImage] = useState('imageInactive');
    const [overlay, setOverlay] = useState('work-challenge');

    const handleEnter =() =>{
        setClassN('work-frame frameActive');
        setOverlay('work-challenge overlay');
        setImage('imageActive');
    };

    const handleLeave = () => {
        setClassN('work-frame frameInactive');
        setOverlay('work-challenge');
        setImage('imageInactive');
    };

    return (
        <Link to={link} style={{ textDecoration:'none' }}>
        <div className={classN} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className="work-image">
                    <div className={`work-image-container ${image}`}><img src={src} width={width}/></div>
                <div className={overlay}>
                    <div className="hmw">{challenge}</div>
                </div>
            </div>
            <div className="work-text">
                <div className="work-name">{name}</div>
                <div className="work-caption">{caption}</div>
            </div>
            </div>
        </Link>
    );
}

