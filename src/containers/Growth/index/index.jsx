import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'
import * as actions from 'actions/growth'
import { Link, } from 'react-router'
import './index.scss'

const propTypes = {
    fetchGrowth: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}

const defaultProps = {}

class Growth extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const { fetchGrowth, } = this.props
        fetchGrowth()
    }

    render() {
        const tab = [
            {
                id: 1,
                name: '新生儿',
            },
            {
                id: 2,
                name: '1岁',
            },
            {
                id: 3,
                name: '2岁',
            },
            {
                id: 4,
                name: '3岁',
            },
        ]
        return (
            <div>
                <ul>
                    {tab.map(item => <li key={item.id}><Link to={item.url}>{item.name}</Link></li>)}
                </ul>
                {this.props.children}
            </div>
        )
    }
}

Growth.propTypes = propTypes

Growth.defaultProps = defaultProps

const mapStateToProps = ({ ...state, }) => {
    return {
        ...state
    }
}

const mapDispatchToProps = { ...actions, }

export default connect(mapStateToProps, mapDispatchToProps)(Growth)
