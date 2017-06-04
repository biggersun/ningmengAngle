import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import IndexTitle from '../../components/IndexTitle'

import './index.scss'

const propTypes = {}

const defaultProps = {}

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <IndexTitle />
            </div>
        )
    }
}

Index.propTypes = propTypes

Index.defaultProps = defaultProps

export default Index
