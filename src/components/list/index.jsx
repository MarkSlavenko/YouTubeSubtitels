import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
//import "./style.css"


export function List ({url}) {
    return _.isEmpty(url) ? false : (<li>
            <a href={url}>{url}</a>
        </li>
    );
}

List.propTypes = {

};