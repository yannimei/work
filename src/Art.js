import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import sushi from './image/artImages/sushi.png';
import corn from './image/artImages/corn.png';
import forest from './image/artImages/forest.png';
import room from './image/artImages/room.png';
import rick from './image/artImages/rick.png';
import cactus from './image/artImages/cactus.png';


class Art extends React.Component{

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="container">
                <div className="body">
                    <section className="header">
                        <div className="navigation">
                            <div className="yanni">Yanni Mei </div>
                            <div className="selection main">
                                <Link to='/' ><div className="work">Work</div></Link>
                                <Link to='/art' className="active"><div className="art">3D_Creative</div></Link>
                                <Link to='/about'><div className="about ">About</div></Link>
                            </div>
                        </div>
                        <div className="navigation">
                            <div className="yanni">3D Artist</div>
                        </div>
                    </section>

                    <section className="art-intro">
                        <p>This is my personal learning, exploring and experimenting experience of 3D design and Blender.
                            I post my daily work on <a href="https://www.instagram.com/ymei_3dimension/">@ymei_3dimension</a> to record my exploration path. 
                            Below are some selected works I am fond of ;)
                     </p>
                    </section>
                </div>

                <section className="art-title">
                    3D Assets
                </section>

                <section className="showcase">
                    <div className="art-img-container"><img className="art-img" src={sushi} alt="sushi" /></div>
                    <div className="art-img-container"><img className="art-img" src={corn} alt="corn" /></div>
                    <div className="art-img-container"><img className="art-img" src={forest} alt="forest" /></div>
                    <div className="art-img-container"><img className="art-img" src={room} alt="room" /></div>
                    <div className="art-img-container"><img className="art-img" src={rick} alt="rick" /></div>
                    <div className="art-img-container"><img className="art-img" src={cactus} alt="cactus" /></div>
                </section>


            </div>

            
        );
    }
}

export default Art;