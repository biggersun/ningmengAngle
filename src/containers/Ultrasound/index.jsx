import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'

import UltrasoundSelect from 'components/UltrasoundSelect'
import UltrasoundMessage from 'components/UltrasoundMessage'
import UltrasoundIndicators from 'components/UltrasoundIndicators'
import UltrasoundTable from 'components/UltrasoundTable'
import Title from 'components/Title'
import * as actions from 'actions/ultrasound'

import './index.scss'
const propTypes = {
    cycle: PropTypes.number.isRequired,
    biaoq: PropTypes.array.isRequired,
    indicators: PropTypes.array.isRequired,
    fetchValue: PropTypes.func.isRequired,
}

const defaultProps = {
    cycle: 1,
    biaoq: [],
    indicators: [],
}

class Ultrasound extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cycle: 1,
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    componentDidMount() {
        const { fetchValue, } = this.props
        const { cycle, } = this.state
        const params = {
            cycle,
        }
        fetchValue(params)
    }

    handleSelect(e) {
        const { fetchValue, } = this.props
        const params = {
            cycle: e.target.value,
        }
        this.setState({
            cycle: e.target.value,
        })
        fetchValue(params)
    }

    render() {
        const numberWeek = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, ]
        const { biaoq, indicators, cycle, } = this.props
        return (
            <div className="ultrasound-container">
                <Title
                    title="看懂B超单"
                />
                <UltrasoundSelect onChange={this.handleSelect} weekNumber={numberWeek} />
                {cycle < 6 ?
                    <UltrasoundMessage message="现在正是孕早期，这个时候做B超是为了确认宫内妊娠是否正常" />
                    : <UltrasoundIndicators biaoq={biaoq} />}
                <UltrasoundTable indicators={indicators} />
            </div>
        )
    }
}

Ultrasound.propTypes = propTypes

Ultrasound.defaultProps = defaultProps

const mapStateToProps = ({ ...state }) => {
    const { ultrasound: { biaoq, indicators, cycle, }, } = state
    return {
        biaoq,
        cycle: Number(cycle),
        indicators,
    }
}

const mapDispatchToProps = { ...actions, }

export default connect(mapStateToProps, mapDispatchToProps)(Ultrasound)
