import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'
import { changeTitle, } from 'assets/js/util'
import * as actions from '../../actions/cannotEat'
import './index.scss'

const propTypes = {
    fetchFoodContent: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

const defaultProps = {
    id: 0,
    content: '',
    name: '',
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
        const { content, } = this.props
        const { name, } = this.props
        changeTitle(name)
        return (
            <div
                className="FoodContent-container"
            />
        )
    }
}

FoodContent.propTypes = propTypes

FoodContent.defaultProps = defaultProps

const mapStateToProps = ({ ...state }, { location, }) => {
    const { id, } = location.query
    const { vaccineTimeTable: { content, name, }, } = state
    return {
        content,
        name,
        id: Number(id),
    }
}

const mapDispatchToProps = { ...actions, }

export default connect(mapStateToProps, mapDispatchToProps)(FoodContent)

