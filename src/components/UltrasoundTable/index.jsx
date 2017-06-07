import React, { Component, } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

import UltrasoundItem from '../UltrasoundItem'

const propTypes = {
    indicators: PropTypes.array.isRequired,
}

const defaultProps = {
    indicators: [],
}

class UltrasoundTable extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { indicators, } = this.props
        return (
            <div className="ultrasound-table">
                {indicators.map(item => <UltrasoundItem
                    key={item.b_usgId}
                    airticleId={Number(item.b_usgId)}
                    name={item.name}
                />)}
                <div className="ca" />
            </div>
        )
    }
}

UltrasoundTable.propTypes = propTypes

UltrasoundTable.defaultProps = defaultProps

export default UltrasoundTable
