import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const propTypes = {}

const defaultProps = {}

class UltrasoundIndicators extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>B超单相关对应值：</h1>
            </div>
        )
    }
}

UltrasoundIndicators.propTypes = propTypes

UltrasoundIndicators.defaultProps = defaultProps

export default UltrasoundIndicators
