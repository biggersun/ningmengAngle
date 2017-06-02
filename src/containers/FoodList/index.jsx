import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'
import * as actions from '../../actions/cannotEat'

import SearchBar from '../../components/SearchBar'
import FoodItem from '../../components/FoodItem'
import './index.scss'

const propTypes = {
    fetchFoodType: PropTypes.func.isRequired,
    content: PropTypes.array.isRequired,
    imagePaths: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    searchFood: PropTypes.func.isRequired,
}

const defaultProps = {
    id: 0,
    content: [],
    imagePaths: {},
    name: '',
}

class FoodList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch() {
        const { fetchFoodType, id, } = this.props
        const params = {
            id,
        }
        fetchFoodType(params)
    }

    handleSearch(text) {
        const { searchFood, } = this.props
        searchFood({ name: text, })
    }

    handleCancel() {
        const { searchFood, } = this.props
        searchFood({ name: '', })
    }

    render() {
        const { content, imagePaths, } = this.props
        return (
            <div>
                <SearchBar
                    placeholder="搜索食物"
                    handleSubmit={this.handleSearch}
                    handleCancel={this.handleCancel}
                />
                {content.map(item => <FoodItem
                    key={item.canEatId} icon={imagePaths !== [] ? imagePaths[item.imagePath] : ''} content={item}
                />)}
            </div>
        )
    }
}

FoodList.propTypes = propTypes

FoodList.defaultProps = defaultProps

const mapStateToProps = ({ ...state }, { location, }) => {
    const { id, name, } = location.query
    const { foodList: { content, imagePaths, }, } = state

    return {
        content,
        name,
        imagePaths,
        id: Number(id),
    }
}

const mapDispatchToProps = {
    ...actions,
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
