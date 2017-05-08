import React, { Component, } from 'react'

import UltrasoundTable from '../../components/UltrasoundTable'
import UltrasoundSelect from '../../components/UltrasoundSelect'

const propTypes = {}

const defaultProps = {}

class Ultrasound extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const numberWeek = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
        return (
            <div>
                <UltrasoundSelect weekNumber={numberWeek} />
                <UltrasoundTable />
            </div>
        )
    }
}

Ultrasound.propTypes = propTypes

Ultrasound.defaultProps = defaultProps

export default Ultrasound
