import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import PropTypes from 'prop-types'
import Title from 'components/Title'
import * as actions from 'actions/timeTable'

import './index.scss'

const propTypes = {
    content: PropTypes.string.isRequired,
    fetchPTContent: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}

const defaultProps = {
    content: '',
    id: null,
}

class PTcontent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const { fetchPTContent, id, } = this.props
        const params = {
            id,
        }
        fetchPTContent(params)
    }

    render() {
        const { content, } = this.props
        return (
            <div>
                <Title title="产检项目" />
                <div
                    className="PTcontent-container"
                    dangerouslySetInnerHTML={{ __html: content, }}
                />
            </div>
        )
    }
}

PTcontent.propTypes = propTypes

PTcontent.defaultProps = defaultProps

const mapStateToprops = ({ ...state }, { location, }) => {
    const { timeTable: { content, }, } = state
    const { id, } = location.query
    return {
        id: Number(id),
        content,
    }
}

const mapDispatchToprops = { ...actions, }
export default connect(mapStateToprops, mapDispatchToprops)(PTcontent)
