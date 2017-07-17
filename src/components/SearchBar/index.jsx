import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchBar } from 'react-weui'

import 'weui' // eslint-disable-line import/extensions
import './index.scss'


const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
}

export default class SearchBar1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            results: [],
        }
    }

    render() {
        const { handleSubmit, handleCancel } = this.props
        return (
            <SearchBar
                className="searchBar"
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                placeholder="搜索食物"
                lang={{
                    cancel: '取消',
                }}
            />
        )
    }
}

SearchBar1.propTypes = propTypes
