import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from 'actions/vaccineTimeTable'
import Title from 'components/Title'
import './index.scss'

const propTypes = {
    fetchVaccineContent: PropTypes.func.isRequired,
    vaccineId: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

const defaultProps = {
    vaccineId: 0,
    content: '',
    name: '',
}

class VaccineContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.handFetchContent()
    }

    handFetchContent() {
        const { fetchVaccineContent, vaccineId } = this.props
        const params = { id: vaccineId }
        fetchVaccineContent(params)
    }

    render() {
        const { content } = this.props
        const { name } = this.props
        return (
            <div>
                <Title
                    title={name}
                />
                <div
                    className="vaccineContent-container"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        )
    }
}

VaccineContent.propTypes = propTypes

VaccineContent.defaultProps = defaultProps

const mapStateToProps = ({ ...state }, { location }) => {
    const { vaccineId } = location.query
    const { vaccineContent: { content, name } } = state
    return {
        content,
        name,
        vaccineId: Number(vaccineId),
    }
}

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(VaccineContent)

