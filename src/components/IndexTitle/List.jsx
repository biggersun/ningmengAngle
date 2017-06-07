import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { hashHistory, } from 'react-router'

const propTypes = {
    content: PropTypes.array.isRequired,
    imagePaths: PropTypes.object.isRequired,
}

const defaultProps = {
    content: [],
    imagePaths: {},
}

class IndexList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { content, imagePaths, } = this.props
        return (
            <div className="list-container">
                <div className="title-box">
                    <div className="line" />
                    <div className="content">檬宝宝</div>
                    <div className="line" />
                </div>
                {content.map(i => (
                    <div
                        key={i.articleId}
                        className="list-item"
                        onClick={() => hashHistory.push(`indexArt?airticleId=${i.articleId}`)}
                    >
                        <img src={imagePaths[i.imagePath]} alt="" />
                        <div className="content">
                            <div className="title">{i.title}</div>
                            <div className="item-content">{i.profile}</div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

IndexList.propTypes = propTypes

IndexList.defaultProps = defaultProps

export default IndexList
