import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { hashHistory, } from 'react-router'

import './index.scss'
import icon from '../../assets/images/staple_img_Corn.png'

const propTypes = {
    content: PropTypes.object.isRequired,
}

const defaultProps = {
    content: {},
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
        const { content: { id, }, } = this.props
        hashHistory.push(`foodContent?id=${id}`)
    }

    render() {
        const { content, } = this.props
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
                        {content.list.map(item =>
                            <div key={item.id}>
                                <div className={handleStatus(item.status)}>
                                    {item.status === 3 ? '12+' : ''}
                                </div>
                                <span>{item.name}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

FoodItem.propTypes = propTypes

FoodItem.defaultProps = defaultProps

export default FoodItem
