import React from 'react'
import PropTypes from 'prop-types'
import SearchBlock from "../../components/searchBlock";
import {List} from "../../components/list";

class Content extends React.Component {
    render() {

        return (
            <div>
                <SearchBlock/>
                <List/>
            </div>
        )
    }
}

Content.propTypes = {

}

export { Content }