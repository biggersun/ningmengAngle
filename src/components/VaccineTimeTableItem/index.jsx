import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import VaccineItem from '../VaccineItem'
import './index.scss'

const propTypes = {
    stage: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
}

const defaultProps = {}

class VaccineTimeTableItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { stage, content, } = this.props
        return (
            <div className="vaccineTimeTableItem-container">
                <h1>{stage}</h1>
                {content.map(vaccine => <VaccineItem key={vaccine.vaccineId} vaccine={vaccine} />)}
            </div>
        )
    }
}

VaccineTimeTableItem.propTypes = propTypes

VaccineTimeTableItem.defaultProps = defaultProps

export default VaccineTimeTableItem
