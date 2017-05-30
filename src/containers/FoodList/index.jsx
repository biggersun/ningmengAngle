import React, { Component, } from 'react'
import PropTypes from 'prop-types'

import SearchBar from '../../components/SearchBar'
import FoodItem from '../../components/FoodItem'
import './index.scss'

const propTypes = {}

const defaultProps = {}

class FoodList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const arr = [
            {
                id: 1,
                name: '大米',
                name2: '稻米',
                list: [
                    {
                        id: 1,
                        status: 1,
                        name: '孕妈',
                    },
                    {
                        id: 2,
                        status: 1,
                        name: '坐月子',
                    },
                    {
                        id: 3,
                        status: 2,
                        name: '哺乳',
                    },
                    {
                        id: 4,
                        status: 3,
                        name: '婴幼儿',
                    },
                ],
            },
            {
                id: 2,
                name: '花生',
                name2: '落花生，长生果，泥豆, 番豆',
                list: [
                    {
                        id: 1,
                        status: 1,
                        name: '孕妈',
                    },
                    {
                        id: 2,
                        status: 1,
                        name: '坐月子',
                    },
                    {
                        id: 3,
                        status: 2,
                        name: '哺乳',
                    },
                    {
                        id: 4,
                        status: 3,
                        name: '婴幼儿',
                    },
                ],
            },
        ]
        return (
            <div>
                <SearchBar
                    placeholder="搜索食物"
                />
                {arr.map(item => <FoodItem key={item.id} content={item} />)}
            </div>
        )
    }
}

FoodList.propTypes = propTypes

FoodList.defaultProps = defaultProps

export default FoodList
