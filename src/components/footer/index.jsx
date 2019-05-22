import React from 'react'
import PropTypes from 'prop-types'
import "./style.css"

export function Footer () {
    return (
        <footer className="footer-style page-footer font-small ">

            <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="#"> YouTubeSub</a>
            </div>

        </footer>
    );
}

Footer.propTypes = {

};