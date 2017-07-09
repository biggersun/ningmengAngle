import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import './index.scss'

const propTypes = {
    dataList: PropTypes.array.isRequired,
    tabList: PropTypes.array.isRequired,
}

const defaultProps = {}

class MamContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickIndex: 0,
        }

        this.handleTab = this.handleTab.bind(this)
    }

    handleTab(e) {
        const { index } = e.currentTarget.dataset
        this.setState({
            clickIndex: Number(index),
        })
    }

    render() {
        const { dataList, tabList } = this.props
        const { clickIndex } = this.state
        return (
            <div className="mam-content-container">
                <div className="tabBar">
                    {tabList.map((item, index) => {
                        const classNameIcon = index === clickIndex
                            ? `icon${index + 1} active`
                            : `icon${index + 1}`
                        const classNameP = index === clickIndex
                            ? 'active'
                            : ''
                        return (<li>
                            <a
                                href={`#${item}`}
                                data-index={index}
                                onClick={this.handleTab}
                            >
                                <div className={classNameIcon} />
                                <p className={classNameP}>{item}</p>
                            </a>
                        </li>)
                    })}
                </div>
                <div className="content">
                    {dataList.map(item => (<div>
                        <div className="title" id={item.title}>{item.title}</div>
                        <ul>
                            {item.list.map(item2 => <Link
                                to={`mamAircles?id=${item2.articleCategoryId}&name=${item2.name2}`}
                            >
                                <li
                                    key={item2.articleSubCategoryId}
                                >{item2.name2}</li>
                            </Link>)}
                        </ul>
                    </div>))}
                </div>
            </div>
        )
    }
}

MamContent.propTypes = propTypes

MamContent.defaultProps = defaultProps

export default MamContent
