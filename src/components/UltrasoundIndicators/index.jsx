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
        const indicators = [
            {
                id: 1,
                title: 'BPD双顶',
                content: '7.50+0.65',
            },
            {
                id: 2,
                title: 'HC头围',
                content: '7.50+0.65',
            },
            {
                id: 3,
                title: 'BPD双顶',
                content: '7.50+0.65',
            },
        ]
        return (
            <div className="ultrasound-indicator">
                <h1>B超单相关对应值：</h1>
                <ul>
                    {indicators.map(item => <li key={item.id}>
                        <div className="box">
                            <em>{item.title}</em>
                            <em className="separator">~</em>
                        </div>
                        <em>{item.content}</em>
                    </li>)}
                </ul>
            </div>
        )
    }
}

UltrasoundIndicators.propTypes = propTypes

UltrasoundIndicators.defaultProps = defaultProps

export default UltrasoundIndicators
