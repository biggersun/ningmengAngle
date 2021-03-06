import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from 'components/Title'
import NewsList from 'components/NewsList'
import * as actions from 'actions/indexPage'

import './index.scss'

const propTypes = {
    airticleId: PropTypes.number.isRequired,
    fetchArtContent: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array,
    aboutNews: PropTypes.array,
}

const defaultProps = {
    airticleId: null,
    content: '',
    title: '文章详情',
    keywords: [],
    aboutNews: [],
}

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.fetchAirticle()
    }

    componentDidUpdate(preProps) {
        const { airticleId } = this.props
        if (preProps.airticleId !== airticleId) {
            this.fetchAirticle()
        }
    }

    fetchAirticle() {
        const { airticleId, fetchArtContent } = this.props
        const params = {
            id: airticleId,
        }
        fetchArtContent(params)
    }

    render() {
        const { content, title, keywords, aboutNews } = this.props

        return (
            <div className="indexArt-container">
                <Title
                    title={title}
                    color="#FEB6B9"
                />
                <div
                    className="airticle"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                {
                    keywords.length > 0 ? <div className="keys">
                        {keywords.map(key => <div>{key}</div>)}
                    </div> : null
                }
                {
                    aboutNews.length > 0 ? <NewsList
                        content={aboutNews}
                    /> : null
                }
            </div>
        )
    }
}

Article.propTypes = propTypes

Article.defaultProps = defaultProps


const mapStateToProps = ({ indexPageArtList }, { location }) => {
    const { airticleId } = location.query
    const {
        content,
        keywords,
        aboutNews,
        title,
    } = indexPageArtList
    return {
        content,
        keywords,
        aboutNews,
        title,
        airticleId: Number(airticleId),
    }
}

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(Article)

