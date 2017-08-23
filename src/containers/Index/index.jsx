import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from 'actions/indexPage'
import IndexTitle from '../../components/IndexTitle'


import './index.scss'

const propTypes = {
    fetchArt: PropTypes.func.isRequired,
    content: PropTypes.array.isRequired,
    imagePaths: PropTypes.object.isRequired,
    hospitalName: PropTypes.string.isRequired,
}

const defaultProps = {
    content: [],
    imagePaths: {},
    hospitalName: '0',
}

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const { fetchArt } = this.props
        fetchArt()
    }

    render() {
        const {
            content,
            imagePaths,
            hospitalName,
        } = this.props
        return (
            <div>
                <IndexTitle
                    content={content}
                    imagePaths={imagePaths}
                    hospitalName={hospitalName}
                />
            </div>
        )
    }
}

Index.propTypes = propTypes

Index.defaultProps = defaultProps

const mapStateToProps = ({ indexPageArtList, userInfo }) => {
    const { content1, imagePaths } = indexPageArtList

    const { result } = userInfo
    return {
        content: content1,
        imagePaths,
        hospitalName: result,
    }
}

const mapDispatchToProps = { ...actions }
export default connect(mapStateToProps, mapDispatchToProps)(Index)
