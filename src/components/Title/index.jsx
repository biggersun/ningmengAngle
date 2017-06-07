import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { hashHistory, } from 'react-router'
import './index.scss'

const propTypes = {
    title: PropTypes.string.isRequired,
}

const defaultProps = {
    title: '檬宝宝孕育',
}

class Title extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { title, } = this.props
        return (
            <div className="page-title">
                <div className="back-btn" onClick={() => hashHistory.goBack()} />
                <h1>{title}</h1>
                <div />
            </div>
        )
    }
}

Title.propTypes = propTypes

Title.defaultProps = defaultProps

export default Title
