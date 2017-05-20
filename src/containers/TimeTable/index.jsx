import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'
import TimeTableItem from 'components/TimeTableItem'

import './index.scss'

import * as action from '../../actions/timeTable'

const propTypes = {
    fetchPTPoint: PropTypes.func.isRequired,
    PregnancyTest: PropTypes.array.isRequired,
}

const defaultProps = {
    PregnancyTest: [],
}

class TimeTable extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const { fetchPTPoint, } = this.props
        fetchPTPoint()
    }

    render() {
        const { PregnancyTest, } = this.props
        return (
            <div>
                {PregnancyTest.map(item => <TimeTableItem key={item.pregnancyTestId} content={item} />)}
            </div>
        )
    }
}

TimeTable.propTypes = propTypes

TimeTable.defaultProps = defaultProps

const mapStateToProps = ({ ...state }) => {
    const { timeTable, } = state
    return {
        ...timeTable,
    }
}

const mapDispatchToProps = { ...action, }

export default connect(mapStateToProps, mapDispatchToProps)(TimeTable)
