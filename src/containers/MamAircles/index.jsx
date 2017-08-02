import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from 'actions/mamKown'
import IndexList from 'components/IndexTitle/List'
import Title from 'components/Title'
import './index.scss'

const propTypes = {
    fetchArt: PropTypes.func.isRequired,
    content: PropTypes.array.isRequired,
    imagePaths: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

const defaultProps = {
    content: [],
    imagePaths: {},
}

class MamAircles extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const { fetchArt, id } = this.props
        fetchArt({ id })
    }

    render() {
        const {
            content,
            imagePaths,
            name,
        } = this.props
        return (
            <div>
                <Title
                    title={name}
                    backTo="mamKown"
                    color="#FEB6B9"
                />
                <IndexList
                    content={content}
                    imagePaths={imagePaths}
                />
            </div>
        )
    }
}

MamAircles.propTypes = propTypes

MamAircles.defaultProps = defaultProps

const mapStateToProps = ({ indexPageArtList }, { location }) => {
    const { content1, imagePaths } = indexPageArtList
    const { name, id } = location.query
    return {
        content: content1,
        imagePaths,
        name,
        id,
    }
}

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(MamAircles)

