import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'
import './index.scss'

const propTypes = {
    title: PropTypes.string.isRequired,
    backToIndex: PropTypes.bool.isRequired,
}

const defaultProps = {
    title: '檬宝宝孕育',
    backToIndex: false,
}

class Title extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { title, backToIndex } = this.props
        return (
            <div className="page-title">
                {backToIndex ? <div className="back-btn" onClick={() => hashHistory.push('index')} />
                : <div className="back-btn" onClick={() => hashHistory.goBack()} />
                }

                <h1>{title}</h1>
                <div />
            </div>
        )
    }
}

Title.propTypes = propTypes

Title.defaultProps = defaultProps

export default Title
