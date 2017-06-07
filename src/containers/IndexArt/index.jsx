import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'

import * as actions from 'actions/indexPage'

import './index.scss'

const propTypes = {
    airticleId: PropTypes.number.isRequired,
    fetchArtContent: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
}

const defaultProps = {
    airticleId: null,
    content: '',
}

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.fetchAirticle()
    }

    fetchAirticle() {
        const { airticleId, fetchArtContent, } = this.props
        const params = {
            id: airticleId,
        }
        fetchArtContent(params)
    }

    render() {
        const { content, } = this.props

        return (
            <div
                className="airticle-container"
                dangerouslySetInnerHTML={{ __html: content, }}
            />
        )
    }
}

Article.propTypes = propTypes

Article.defaultProps = defaultProps


const mapStateToProps = ({ indexPageArtList, }, { location, }) => {
    const { airticleId, } = location.query
    const { content, } = indexPageArtList
    return {
        content,
        airticleId: Number(airticleId),
    }
}

const mapDispatchToProps = { ...actions, }

export default connect(mapStateToProps, mapDispatchToProps)(Article)

