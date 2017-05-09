import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

import UltrasoundItem from '../UltrasoundItem'

const propTypes = {}

const defaultProps = {}

class UltrasoundTable extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const tableList = [
            {
                id: 1,
                name: '胎盘',
                tips: 'DSC',
            },
            {
                id: 2,
                name: '胸腔',
                tips: 'FSA',
            },
            {
                id: 3,
                name: '盆腔',
                tips: 'DSC',
            },
            {
                id: 4,
                name: '盆腔',
                tips: 'DSC',
            },
            {
                id: 5,
                name: '盆腔',
                tips: 'DSC',
            },
        ]
        return (
            <div className="ultrasound-container">
                {tableList.map(item => <UltrasoundItem
                    key={item.id}
                    name={item.name}
                    tips={item.tips}
                />)}
            </div>
        )
    }
}

UltrasoundTable.propTypes = propTypes

UltrasoundTable.defaultProps = defaultProps

export default UltrasoundTable
