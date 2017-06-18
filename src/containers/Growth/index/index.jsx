import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import {
    connect,
} from 'react-redux'
import * as actions from 'actions/growth'
import Title from 'components/Title'

import './index.scss'

const propTypes = {
    fetchGrowth: PropTypes.func.isRequired,
    children: PropTypes.element,
    content: PropTypes.array.isRequired,
    tabSwitch: PropTypes.func.isRequired,
}

const defaultProps = {
    content: [],
}

class Growth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 1,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        const { fetchGrowth, } = this.props
        fetchGrowth()
    }

    handleClick(tabId) {
        const { tabSwitch, } = this.props
        tabSwitch(tabId)
        this.setState({
            active: tabId,
        })
    }

    render() {
        const {
            content,
        } = this.props
        const {
            active,
        } = this.state

        return (
            <div className="growth-container">
                <Title
                    title="生长发育指标"
                />
                <ul>
                    {content.map(item => <li
                        key={item.id}
                        className={active === item.id ? 'active' : ''}
                        onClick={() => this.handleClick(item.id)}
                    >
                        {item.stage}
                        {active === item.id ?
                            <div className="activeBar" />
                            :
                            <div />
                        }
                    </li>)
                    }
                </ul>
                {this.props.children}
            </div>
        )
    }
}

Growth.propTypes = propTypes

Growth.defaultProps = defaultProps

const mapStateToProps = ({ growth, }) => {
    const { content, } = growth
    return {
        content,
    }
}

const mapDispatchToProps = { ...actions, }

export default connect(mapStateToProps, mapDispatchToProps)(Growth)
