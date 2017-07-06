import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from 'components/Title'
import * as action from 'actions/vaccineTimeTable'

import VaccineTimeTableItem from 'components/VaccineTimeTableItem'

import './index.scss'

const propTypes = {
    fetchVaccineTimeTable: PropTypes.func.isRequired,
    vaccineTimeTable: PropTypes.object.isRequired,
}

const defaultProps = {
    vaccineTimeTable: {},
}

class VaccineTimeTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch() {
        const { fetchVaccineTimeTable } = this.props
        fetchVaccineTimeTable()
    }

    render() {
        const { vaccineTimeTable: { content = [] } } = this.props
        return (
            <div className="vaccineTime-container">
                <Title title="疫苗时间表" backToIndex />
                {content.map(item => <VaccineTimeTableItem
                    key={item.id}
                    stage={item.stage}
                    content={item.content}
                />)}
            </div>
        )
    }
}

VaccineTimeTable.propTypes = propTypes

VaccineTimeTable.defaultProps = defaultProps

const mapStateToProps = ({ ...state }) => {
    const { vaccineTimeTable } = state
    return {
        vaccineTimeTable,
    }
}

const mapDispatchToProps = { ...action }

export default connect(mapStateToProps, mapDispatchToProps)(VaccineTimeTable)

