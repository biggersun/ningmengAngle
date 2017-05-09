import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const propTypes = {}

const defaultProps = {}

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
            </div>
        )
    }
}

Article.propTypes = propTypes

Article.defaultProps = defaultProps

export default Article
