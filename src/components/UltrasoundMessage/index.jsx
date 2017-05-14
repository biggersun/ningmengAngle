import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const propTypes = {
    message: PropTypes.string.isRequired,
}

const defaultProps = {}

const UltrasoundMessage = props => (
    <div className="ultrasound-message">
        {props.message}
    </div>
)

UltrasoundMessage.propTypes = propTypes

UltrasoundMessage.defaultProps = defaultProps

export default UltrasoundMessage
