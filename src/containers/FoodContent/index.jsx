import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from 'actions/cannotEat'
import Title from 'components/Title'
import './index.scss'

const propTypes = {
    fetchFoodContent: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    content: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
}

const defaultProps = {
    id: 0,
    content: [],
    name: '',
    imagePath: '',
}

class FoodContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.handFetchContent()
    }

    handFetchContent() {
        const { fetchFoodContent, id } = this.props
        const params = { id }
        fetchFoodContent(params)
    }

    render() {
        const { content, imagePath } = this.props
        const { name } = this.props
        const {
            contentA,
            contentB,
            contentC,
            contentD,
            stageA,
            stageB,
            stageC,
            stageD,
            alias_,
            tips,
        } = content[0] || []
        let $stageA
        let $stageB
        let $stageC
        let $stageD
        if (stageA === 0) {
            $stageA = <div className="status-icon2">不能吃</div>
        } else if (stageA === 1) {
            $stageA = <div className="status-icon1">能吃</div>
        } else if (stageA === 2) {
            $stageA = <div className="status-icon3">少吃</div>
        }
        if (stageB === 0) {
            $stageB = <div className="status-icon2">不能吃</div>
        } else if (stageB === 1) {
            $stageB = <div className="status-icon1">能吃</div>
        } else if (stageB === 2) {
            $stageB = <div className="status-icon3">少吃</div>
        }
        if (stageC === 0) {
            $stageC = <div className="status-icon2">不能吃</div>
        } else if (stageC === 1) {
            $stageC = <div className="status-icon1">能吃</div>
        } else if (stageC === 2) {
            $stageC = <div className="status-icon3">少吃</div>
        }
        if (stageD === 0) {
            $stageD = <div className="status-icon2">不能吃</div>
        } else if (stageD === 1) {
            $stageD = <div className="status-icon1">能吃</div>
        } else if (stageD === 2) {
            $stageD = <div className="status-icon3">少吃</div>
        }
        return (
            <div className="foodContent-container">
                <Title
                    title={name}
                />
                <div className="image">
                    <img src={imagePath} alt="食物图片" />
                </div>
                <div className="title">
                    <p>{alias_}</p>
                </div>
                <div className="content">
                    <div className="item">
                        <h1>孕妇能吃吗？</h1>
                        <div className="item-content">
                            <div className="cannotEat-box">
                                {$stageA}
                            </div>
                            <p>{contentA}</p>
                        </div>
                    </div>
                    <div className="item">
                        <h1>坐月子能吃吗？</h1>
                        <div className="item-content">
                            <div className="cannotEat-box">
                                {$stageB}
                            </div>
                            <p>{contentB}</p>
                        </div>
                    </div>
                    <div className="item">
                        <h1>哺乳能吃吗？</h1>
                        <div className="item-content">
                            <div className="cannotEat-box">
                                {$stageC}
                            </div>
                            <p>{contentC}</p>
                        </div>
                    </div>
                    <div className="item">
                        <h1>婴儿能吃吗？</h1>
                        <div className="item-content">
                            <div className="cannotEat-box">
                                {$stageD}
                            </div>
                            <p>{contentD}</p>
                        </div>
                    </div>
                </div>
                <div className="tips">
                    <h1>小贴士</h1>
                    <p>{tips}</p>
                </div>
            </div>
        )
    }
}

FoodContent.propTypes = propTypes

FoodContent.defaultProps = defaultProps

const mapStateToProps = ({ ...state }, { location }) => {
    const { id } = location.query
    const { foodList: { content, name, imagePath } } = state
    return {
        content,
        name,
        imagePath,
        id: Number(id),
    }
}

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(FoodContent)

