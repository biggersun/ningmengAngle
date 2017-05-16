import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { browserHistory, } from 'react-router'

const propTypes = {
    name: PropTypes.string.isRequired,
    airticleId: PropTypes.number.isRequired,
}

const defaultProps = {}

class UltrasoundItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const { airticleId, } = this.props
        browserHistory.push(`airticle?airticleId=${airticleId}`)
    }

    render() {
        const { name, } = this.props
        return (
            <div
                onClick={this.handleClick}
                className="ulstrasound-item"
            >{name}</div>
        )
    }
}


UltrasoundItem.propTypes = propTypes

UltrasoundItem.defaultProps = defaultProps

export default UltrasoundItem
