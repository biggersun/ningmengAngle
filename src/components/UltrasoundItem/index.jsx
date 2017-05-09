import React from 'react'
import PropTypes from 'prop-types'

import { Link, } from 'react-router'

const propTypes = {
    name: PropTypes.string.isRequired,
    tips: PropTypes.string.isRequired,
}

const defaultProps = {}

const UltrasoundItem = props => (
    <Link to="/article" className="ulstrasound-item">{props.name}({props.tips})</Link>
)

UltrasoundItem.propTypes = propTypes

UltrasoundItem.defaultProps = defaultProps

export default UltrasoundItem
