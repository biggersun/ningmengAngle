import React, { Component, } from 'react'

import UltrasoundSelect from '../../components/UltrasoundSelect'
import UltrasoundMessage from '../../components/UltrasoundMessage'
import UltrasoundIndicators from '../../components/UltrasoundIndicators'
import UltrasoundTable from '../../components/UltrasoundTable'

import './index.scss'

const propTypes = {}

const defaultProps = {}

class Ultrasound extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(e) {
        console.log(e.target.value)
    }

    render() {
        const numberWeek = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
        return (
            <div className="ultrasound-container">
                <UltrasoundSelect onChange={this.handleSelect} weekNumber={numberWeek} />
                <UltrasoundMessage message="现在正是孕早期，这个时候做B超是为了确认宫内妊娠是否正常" />
                <UltrasoundIndicators />
                <UltrasoundTable />
            </div>
        )
    }
}

Ultrasound.propTypes = propTypes

Ultrasound.defaultProps = defaultProps

export default Ultrasound
