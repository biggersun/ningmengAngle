import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'
import { changeTitle, } from 'assets/js/util'
import * as action from '../../actions/vaccineTimeTable'

import VaccineTimeTableItem from '../../components/VaccineTimeTableItem'

import './index.scss'

const propTypes = {
    fetchVaccineTimeTable: PropTypes.func.isRequired,
}

const defaultProps = {}

class VaccineTimeTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentWillMount() {
        changeTitle('疫苗时间表')
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch() {
        const { fetchVaccineTimeTable, } = this.props
        const stage = '出生当天'
        const params = {
            stage,
        }
        fetchVaccineTimeTable(params)
    }

    render() {
        const arr = [
            {
                id: 1,
                stage: '出生当天',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 2,
                stage: '1月龄',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 3,
                stage: '2月龄',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 4,
                stage: '3月龄',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 5,
                stage: '4月龄',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 6,
                stage: '5月龄',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 7,
                stage: '6月龄',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 8,
                stage: '8月龄',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 9,
                stage: '9月龄',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 10,
                stage: '1岁',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 11,
                stage: '1.5岁',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 12,
                stage: '2岁',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 13,
                stage: '3岁',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 14,
                stage: '4岁',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, {
                id: 15,
                stage: '6岁',
                content: [ { purpose: '预防结核病', isRequired: 1, stage: '出生当天', name: '卡介苗', vaccineId: 1, },
                { purpose: '预防乙型肝炎', isRequired: 1, stage: '出生当天', name: '乙肝疫苗', vaccineId: 2, }, ],
            }, ]
        return (
            <div>
                {arr.map(item => <VaccineTimeTableItem
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
    const { vaccineTimeTable, } = state
    return {
        ...state,
        vaccineTimeTable,
    }
}

const mapDispatchToProps = { ...action, }

export default connect(mapStateToProps, mapDispatchToProps)(VaccineTimeTable)

