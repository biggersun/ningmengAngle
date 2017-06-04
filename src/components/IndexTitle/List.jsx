import React, { Component, } from 'react'
import PropTypes from 'prop-types'

import img1 from 'assets/images/home_img_cc.png'

const propTypes = {}

const defaultProps = {}

class IndexList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const arr = [
            {
                id: 1,
                title: '财案件大家都',
                content: '爱上你都去浓情那你去饿哦饥饿',
                img: img1,
            },
            {
                id: 2,
                title: '财案件大家都',
                content: '爱上你都去浓情那你去饿哦饥饿',
                img: img1,
            },
        ]
        return (
            <div className="list-container">
                <div className="title-box">
                    <div className="line" />
                    <div className="content">檬宝宝</div>
                    <div className="line" />
                </div>
                {arr.map(i => (
                    <div key={i.id} className="list-item">
                        <img src={i.img} alt="" />
                        <div className="content">
                            <div className="title">{i.title}</div>
                            <div className="item-content">{i.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

IndexList.propTypes = propTypes

IndexList.defaultProps = defaultProps

export default IndexList
