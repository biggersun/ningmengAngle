import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const propTypes = {
    vaccine: PropTypes.object.isRequired,
}

const defaultProps = {}

class VaccineItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { vaccine, } = this.props
        return (
            <div className="vaccine-container">
                <span>{vaccine.name}</span>
                <span>第{vaccine.number}次</span>
                {vaccine.isRequired === 1 ? <span>必打</span> : ''}
                <span>{vaccine.purpose}</span>
            </div>
        )
    }
}

VaccineItem.propTypes = propTypes

VaccineItem.defaultProps = defaultProps

export default VaccineItem
