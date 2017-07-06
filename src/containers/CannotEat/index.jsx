import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SearchBar from 'components/SearchBar'
import CannotLabel from 'components/CannotLabel'
import FoodItem from 'components/FoodItem'
import Title from 'components/Title'
import * as actions from 'actions/cannotEat'

import icon1 from 'assets/images/eat_icon_1.png'
import icon2 from 'assets/images/eat_icon_2.png'
import icon3 from 'assets/images/eat_icon_3.png'
import icon4 from 'assets/images/eat_icon_4.png'
import icon5 from 'assets/images/eat_icon_5.png'
import icon6 from 'assets/images/eat_icon_6.png'
import icon7 from 'assets/images/eat_icon_7.png'
import icon8 from 'assets/images/eat_icon_8.png'
import icon9 from 'assets/images/eat_icon_9.png'
import icon10 from 'assets/images/eat_icon_10.png'
import icon11 from 'assets/images/eat_icon_11.png'
import icon12 from 'assets/images/eat_icon_12.png'

import './index.scss'


const propTypes = {
    searchFood: PropTypes.func.isRequired,
    foodList: PropTypes.object.isRequired,
}

const defaultProps = {
    foodList: {},
}

class CannotEat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 1,
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleSearch(text) {
        const { searchFood } = this.props
        const params = {
            name: text,
        }
        searchFood(params)
        this.setState({
            status: 2,
        })
    }

    handleCancel() {
        this.setState({
            status: 1,
        })
    }

    render() {
        const res = [
            {
                id: 1,
                img: icon1,
                name: '主食',
            },
            {
                id: 12,
                img: icon2,
                name: '坚果类',
            },
            {
                id: 7,
                img: icon3,
                name: '豆/奶制品',
            },
            {
                id: 4,
                img: icon4,
                name: '零食小吃',
            },
            {
                id: 6,
                img: icon5,
                name: '饮品',
            },
            {
                id: 10,
                img: icon6,
                name: '调味品',
            },
            {
                id: 9,
                img: icon7,
                name: '海产品',
            },
            {
                id: 3,
                img: icon8,
                name: '水果',
            },
            {
                id: 5,
                img: icon9,
                name: '肉/蛋类',
            },
            {
                id: 2,
                img: icon10,
                name: '蔬菜菌类',
            },
            {
                id: 8,
                img: icon11,
                name: '加工食品',
            },
            {
                id: 11,
                img: icon12,
                name: '补品/草药',
            },
        ]
        const { status } = this.state
        const { foodList: { content = [], imagePaths } } = this.props
        return (
            <div>
                <Title
                    title="能不能吃"
                    backToIndex
                />
                <div className="cannoteat-container">
                    <SearchBar
                        placeholder="搜索食物"
                        handleSubmit={this.handleSearch}
                        handleCancel={this.handleCancel}
                    />
                    {status === 1 ?
                        <div className="list-container">
                            {res.map(item => <CannotLabel key={item.id} content={item} />)}
                        </div> :
                        content.map(item => <FoodItem
                            key={item.canEatId} icon={imagePaths !== [] ?
                                imagePaths[item.imagePath] : ''} content={item}
                        />)
                    }
                </div>
            </div>
        )
    }
}

CannotEat.propTypes = propTypes

CannotEat.defaultProps = defaultProps

const mapStateToProps = ({ ...state }) => {
    const { foodList } = state
    return {
        foodList,
    }
}

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(CannotEat)

