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
}

const defaultProps = {
    id: 0,
    content: [],
    imagePaths: {},
}

class FoodList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
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

    render() {
        const { content, imagePaths, } = this.props
        return (
            <div>
                <SearchBar
                    placeholder="搜索食物"
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
    const { id, } = location.query
    const { foodList: { content, name, imagePaths, }, } = state

    return {
        content,
        name,
        imagePaths,
        id: Number(id),
    }
}

const mapDispatchToProps = { ...actions, }

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
