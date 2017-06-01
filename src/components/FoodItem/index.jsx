import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { hashHistory, } from 'react-router'

import './index.scss'

const propTypes = {
    content: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
}

const defaultProps = {
    content: {},
    icon: '',
}

function handleStatus(status) {
    if (status === 1) {
        return 'status-icon1'
    } else if (status === 2) {
        return 'status-icon2'
    }
    return 'status-icon3'
}


class FoodItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const { content: { canEatId, }, } = this.props
        hashHistory.push(`foodContent?id=${canEatId}`)
    }

    render() {
        const { content, icon, } = this.props
        return (
            <div
                className="foodItem-container"
                onClick={this.handleClick}
            >
                <div className="img-box">
                    <img src={icon} alt="" />
                </div>
                <div className="content">
                    <div className="top-content">
                        <div className="name">{content.name}</div>
                        <div className="name2-box">
                            <span>{content.name2}</span>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div>
                            <div className={handleStatus(content.stageA)} />
                            <span>孕妈</span>
                        </div>
                        <div>
                            <div className={handleStatus(content.stageB)} />
                            <span>坐月子</span>
                        </div>
                        <div>
                            <div className={handleStatus(content.stageC)} />
                            <span>哺乳</span>
                        </div>
                        <div>
                            <div className={handleStatus(content.stageD)} />
                            <span>婴幼儿</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

FoodItem.propTypes = propTypes

FoodItem.defaultProps = defaultProps

export default FoodItem
