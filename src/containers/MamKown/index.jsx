import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from 'actions/mamKown'
import Title from 'components/Title'
import MamContent from 'components/MamContent'

import './index.scss'

const propTypes = {
    fetchMamList: PropTypes.func.isRequired,
    mamDataList: PropTypes.object.isRequired,
}

const defaultProps = {
    mamDataList: {},
}

class MamKown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 1,
        }
    }

    componentDidMount() {
        const { fetchMamList } = this.props
        fetchMamList()
    }

    handleTabBar(type) {
        this.setState({
            type,
        })
    }

    render() {
        const { mamDataList } = this.props
        const { type } = this.state
        const tabBar = [
            {
                id: 1,
                name: '备孕',
            },
            {
                id: 2,
                name: '怀孕',
            },
            {
                id: 3,
                name: '育儿',
            },
        ]
        const tabList = mamDataList[`dataList${type}`] ? mamDataList[`dataList${type}`].tabList : []
        const dataList = mamDataList[`dataList${type}`] ? mamDataList[`dataList${type}`].data : []
        const activeBarLeft = 33 * (type - 1)
        return (
            <div className="mam-container">
                <Title title="妈妈知道" backToIndex />
                <ul className="tabBar">
                    {tabBar.map(item => <li
                        key={item.id}
                        onClick={() => this.handleTabBar(item.id)}
                        style={{ color: type === item.id ? '#75C5C2' : '#333' }}
                    >{item.name}</li>)}
                    <li
                        className="active-bar"
                        style={{
                            left: `${11 + activeBarLeft}%`,
                        }}
                    />
                </ul>
                <MamContent
                    dataList={dataList}
                    tabList={tabList}
                />
            </div>
        )
    }
}

MamKown.propTypes = propTypes

MamKown.defaultProps = defaultProps

const mapStateToProps = ({ mamList }) => {
    const { mamDataList } = mamList
    return {
        mamDataList,
    }
}

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(MamKown)

