import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { hashHistory, } from 'react-router'

const propTypes = {
    content: PropTypes.object.isRequired,
}

const defaultProps = {
    content: {},
}

class CannotLabel extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const { content: { id, }, } = this.props
        hashHistory.push(`foodList?id=${id}`)
    }

    render() {
        const { content, } = this.props
        return (
            <div
                className="cannotLabel"
                onClick={this.handleClick}
            >
                <img src={content.img} alt="" />
                <p>{content.name}</p>
            </div>
        )
    }
}

CannotLabel.propTypes = propTypes

CannotLabel.defaultProps = defaultProps

export default CannotLabel
