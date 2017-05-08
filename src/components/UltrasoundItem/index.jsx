import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const propTypes = {
    name: PropTypes.string.isRequired,
    tips: PropTypes.string.isRequired,
}

const defaultProps = {}

const UltrasoundItem = props => (
    <div className="ulstrasound-item">{props.name}({props.tips})</div>
)

UltrasoundItem.propTypes = propTypes

UltrasoundItem.defaultProps = defaultProps

export default UltrasoundItem
