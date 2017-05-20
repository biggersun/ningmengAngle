import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const propTypes = {
    biaoq: PropTypes.array.isRequired,
}

const defaultProps = {
    biaoq: [],
}

class UltrasoundIndicators extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { biaoq, } = this.props
        return (
            <div className="ultrasound-indicator">
                <h1>B超单相关对应值：</h1>
                <ul>
                    {biaoq.map(item => <li key={item.b_usg_valueId}>
                        <div className="box">
                            <em>{item.name}({item.unit})</em>
                            <em className="separator">~</em>
                        </div>
                        <em>{item.value}</em>
                    </li>)}
                </ul>
            </div>
        )
    }
}

UltrasoundIndicators.propTypes = propTypes

UltrasoundIndicators.defaultProps = defaultProps

export default UltrasoundIndicators
