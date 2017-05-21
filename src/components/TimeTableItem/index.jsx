import React, { Component, } from 'react'
import { hashHistory, } from 'react-router'

import PropTypes from 'prop-types'
import { Input, } from 'react-weui'

import 'weui'

import './index.scss'

const propTypes = {
    content: PropTypes.object.isRequired,
}

const defaultProps = {}

class TimeTableItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const { content: { pregnancyTestId, }, } = this.props
        hashHistory.push(`/ptcontent?id=${pregnancyTestId}`)
    }

    render() {
        const { content, } = this.props
        return (
            <div
                className="timetable-item"
                onClick={this.handleClick}
            >
                <div className="date-content">
                    <Input id="date" type="date" name="date" defaultValue={content.time} disabled />
                    <label htmlFor="date" className="date-icon" />
                </div>
                <div className="content-box">
                    <div>
                        <span>第{content.pregnancyTestId}次产检</span>
                        <span>怀孕{content.cycle}周</span>
                    </div>
                    <span>{content.keyPoint}</span>
                </div>
            </div>
        )
    }
}

TimeTableItem.propTypes = propTypes

TimeTableItem.defaultProps = defaultProps

export default TimeTableItem

