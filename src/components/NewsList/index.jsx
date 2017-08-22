import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'

const propTypes = {
    content: PropTypes.array.isRequired,
    title: PropTypes.string,
}

const defaultProps = {
    content: [],
    imagePaths: {},
}

class NewsList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { content, title } = this.props
        return (
            <div className="list-container">
                <div className="title-box">
                    <div className="line" />
                    <div className="content">{title || '相关新闻'}</div>
                    <div className="line" />
                </div>
                {content.map(i => (
                    <div
                        key={i.articleId}
                        className="list-item"
                        onClick={() => hashHistory.push(`indexArt?airticleId=${i.articleId}`)}
                    >
                        <img src={i.imagePaht} alt="" />
                        <div className="content">
                            <div className="title">{i.title}</div>
                            <div className="item-content">{i.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

NewsList.propTypes = propTypes

NewsList.defaultProps = defaultProps

export default NewsList
