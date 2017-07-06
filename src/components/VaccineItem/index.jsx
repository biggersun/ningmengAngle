import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'
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
        this.handleHref = this.handleHref.bind(this)
    }

    handleHref() {
        const { vaccine: { vaccineId } } = this.props
        hashHistory.push(`vaccineContent?vaccineId=${vaccineId}`)
    }

    render() {
        const { vaccine } = this.props
        return (
            <div className="vaccine-container" onClick={this.handleHref}>
                <div>
                    <div>
                        <div className="checkIcon" />
                        <span>{vaccine.name}</span>
                    </div>
                    {vaccine.isRequired === 1 ? <span className="isRequired">必打</span> : ''}
                </div>
                <span className="purpose">{vaccine.purpose}</span>
            </div>
        )
    }
}

VaccineItem.propTypes = propTypes

VaccineItem.defaultProps = defaultProps

export default VaccineItem

// <span>第{vaccine.number}次</span>
