import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'
import { changeTitle, } from 'assets/js/util'
import * as actions from '../../actions/cannotEat'
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
        const { fetchFoodContent, id, } = this.props
        const params = { id, }
        fetchFoodContent(params)
    }

    render() {
        const { content, imagePath, } = this.props
        const { name, } = this.props
        changeTitle(name)
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
        return (
            <div className="foodContent-container">
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
                                {stageA === 1 ?
                                    <div className="status-icon1">能吃</div> :
                                    <div className="status-icon2">不能吃</div>
                                }
                            </div>
                            <p>{contentA}</p>
                        </div>
                    </div>
                    <div className="item">
                        <h1>坐月子能吃吗？</h1>
                        <div className="item-content">
                            <div className="cannotEat-box">
                                {stageB === 1 ?
                                    <div className="status-icon1">能吃</div> :
                                    <div className="status-icon2">不能吃</div>
                                }
                            </div>
                            <p>{contentB}</p>
                        </div>
                    </div>
                    <div className="item">
                        <h1>哺乳能吃吗？</h1>
                        <div className="item-content">
                            <div className="cannotEat-box">
                                {stageC === 1 ?
                                    <div className="status-icon1">能吃</div> :
                                    <div className="status-icon2">不能吃</div>
                                }
                            </div>
                            <p>{contentC}</p>
                        </div>
                    </div>
                    <div className="item">
                        <h1>婴儿能吃吗？</h1>
                        <div className="item-content">
                            <div className="cannotEat-box">
                                {stageD === 1 ?
                                    <div className="status-icon1">能吃</div> :
                                    <div className="status-icon2">不能吃</div>
                                }
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

const mapStateToProps = ({ ...state }, { location, }) => {
    const { id, } = location.query
    const { foodList: { content, name, imagePath, }, } = state
    return {
        content,
        name,
        imagePath,
        id: Number(id),
    }
}

const mapDispatchToProps = { ...actions, }

export default connect(mapStateToProps, mapDispatchToProps)(FoodContent)

