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
            <div
                className="timeTable-container"
            >
                {PregnancyTest.map((item) => {
                    const time = new Date().getTime()
                    const t1 = 604800000 * (item.cycle - 12)
                    const t2 = new Date(time + t1)

                    const month = t2.getMonth() < 10 ? `0${t2.getMonth()}` : t2.getMonth()
                    const date = t2.getDate() < 10 ? `0${t2.getDate()}` : t2.getDate()

                    const t3 = `${t2.getFullYear()}-${month}-${date}`
                    const par = Object.assign({}, {
                        ...item,
                        time: t3,
                    })
                    return <TimeTableItem key={item.pregnancyTestId} content={par} />
                })}
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
