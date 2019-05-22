import React from 'react'
import PropTypes from 'prop-types'
import "./style.css"
import logo from "../../images/youtube-logo.png";

export function Header () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt=""/>
                    YouTubeWorld
                </a>
                <span>Search video by words and phrases in it.</span>
            </div>
        </nav>
    );
}

Header.propTypes = {

};