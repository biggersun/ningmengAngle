import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import PropTypes from 'prop-types'

import boy from 'assets/images/icon_boy.png'
import girl from 'assets/images/icon_girl.png'

const propTypes = {
    boyHead: PropTypes.string,
    boyHeadAvg: PropTypes.string,
    boyHeight: PropTypes.string,
    boyHeightAvg: PropTypes.string,
    boyWeight: PropTypes.string,
    boyWeightAvg: PropTypes.string,
    comment_: PropTypes.string,
    developmentalIintelligence: PropTypes.string,
    girlHead: PropTypes.string,
    girlHeadAvg: PropTypes.string,
    girlHeight: PropTypes.string,
    girlHeightAvg: PropTypes.string,
    girlWeight: PropTypes.string,
    girlWeightAvg: PropTypes.string,
    momTips: PropTypes.string,
    parentChildGame: PropTypes.string,
}

const defaultProps = {
}

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const {
            boyHead,
            boyHeadAvg,
            boyHeight,
            boyHeightAvg,
            boyWeight,
            boyWeightAvg,
            comment_,
            developmentalIintelligence,
            girlHead,
            girlHeadAvg,
            girlHeight,
            girlHeightAvg,
            girlWeight,
            girlWeightAvg,
            momTips,
            parentChildGame,
        } = this.props

        return (
            <div className="growth-content-container">
                <div className="comment">{comment_}</div>
                <div className="line" />
                <div className="body-container">
                    <h1>男孩：</h1>
                    <div className="body-box-content">
                        <div className="img-box">
                            <img src={boy} alt="" />
                        </div>
                        <ul className="body-data">
                            <li>
                                <span>身高（cm）<em>{boyHeight || '--'}</em></span>
                                <span> / </span>
                                <span>平均{boyHeightAvg || '--'}</span>
                            </li>
                            <li>
                                <span>体重（cm）<em>{boyWeight || '--'}</em></span>
                                <span> / </span>
                                <span>平均{boyWeightAvg || '--'}</span>
                            </li>
                            <li>
                                <span>头围（cm）<em>{boyHead || '--'}</em></span>
                                <span> / </span>
                                <span>平均{boyHeadAvg || '--'}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="line" />

                <div className="body-container">
                    <h1>女孩：</h1>
                    <div className="body-box-content">
                        <div className="img-box">
                            <img src={girl} alt="" />
                        </div>
                        <ul className="body-data">
                            <li>
                                <span>身高（cm）<em>{girlHeight || '--'}</em></span>
                                <span> / </span>
                                <span>平均{girlHeightAvg || '--'}</span>
                            </li>
                            <li>
                                <span>体重（cm）<em>{girlWeight || '--'}</em></span>
                                <span> / </span>
                                <span>平均{girlWeightAvg || '--'}</span>
                            </li>
                            <li>
                                <span>头围（cm）<em>{girlHead || '--'}</em></span>
                                <span> / </span>
                                <span>平均{girlHeadAvg || '--'}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="line" />

                <div className="item">
                    <h1>新生儿智力发育概述</h1>
                    <p className="item-content">{developmentalIintelligence}</p>
                </div>

                <div className="line" />

                <div className="item">
                    <h1>摇妈温馨提示</h1>
                    <p className="item-content">{momTips}</p>
                </div>

                <div className="line" />

                <div className="item">
                    <h1>亲子游戏</h1>
                    <p className="item-content">{parentChildGame}</p>
                </div>
            </div>
        )
    }
}

List.propTypes = propTypes

List.defaultProps = defaultProps

const mapStateToProps = ({ growth, }) => {
    const {
        tabId = 1,
        content = [],
    } = growth

    const {
        boyHead,
        boyHeadAvg,
        boyHeight,
        boyHeightAvg,
        boyWeight,
        boyWeightAvg,
        comment_,
        developmentalIintelligence,
        girlHead,
        girlHeadAvg,
        girlHeight,
        girlHeightAvg,
        girlWeight,
        girlWeightAvg,
        momTips,
        parentChildGame,
    } = content.length > 0 ? content[tabId - 1].content : {}

    return {
        tabId,
        boyHead,
        boyHeadAvg,
        boyHeight,
        boyHeightAvg,
        boyWeight,
        boyWeightAvg,
        comment_,
        developmentalIintelligence,
        girlHead,
        girlHeadAvg,
        girlHeight,
        girlHeightAvg,
        girlWeight,
        girlWeightAvg,
        momTips,
        parentChildGame,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(List)

