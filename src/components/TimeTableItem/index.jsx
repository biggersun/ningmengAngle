import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { Input, } from 'react-weui'
import 'weui'

const propTypes = {
    content: PropTypes.object.isRequired,
}

const defaultProps = {}

class TimeTableItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { content, } = this.props
        return (
            <div className="timetable-container">
                <div className="content-box">
                    <span>第{content.pregnancyTestId}次产检</span>
                    <span>怀孕{content.cycle}周</span>
                    <span>{content.keyPoint}</span>
                </div>
                <Input type="date" defaultValue="" onChange={ e=> console.log(e.target.value)}/>
            </div>
        )
    }
}

TimeTableItem.propTypes = propTypes

TimeTableItem.defaultProps = defaultProps

export default TimeTableItem
