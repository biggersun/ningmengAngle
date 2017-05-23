import React, { Component, } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const propTypes = {}

const defaultProps = {}

class VaccineTimeTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>vaccine</h1>
            </div>
        )
    }
}

VaccineTimeTable.propTypes = propTypes

VaccineTimeTable.defaultProps = defaultProps

export default VaccineTimeTable
