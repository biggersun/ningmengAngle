import React, { Component, } from 'react'
import { SearchBar, } from 'react-weui'

import 'weui'
import './index.scss'

export default class SearchBar1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            results: [],
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(text, e) {
        console.log(text)
    }

    render() {
        return (
            <SearchBar
                className="searchBar"
                onChange={this.handleChange}
                placeholder="搜索食物"
                lang={{
                    cancel: '取消',
                }}
            />
        )
    }
}
