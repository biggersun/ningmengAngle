import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const propTypes = {
    weekNumber: PropTypes.array.isRequired,
}

const defaultProps = {}
const UltrasoundSelect = props => (
    <div className="select-container">
        <span>您的孕周是第</span>
        <select
            name="week"
            id="week"
            className="week-select"
        >
            {props.weekNumber.map(number => <option value={number}>{number}</option>)}
        </select>
        <span>周</span>
    </div>
)

UltrasoundSelect.propTypes = propTypes

UltrasoundSelect.defaultProps = defaultProps

export default UltrasoundSelect
