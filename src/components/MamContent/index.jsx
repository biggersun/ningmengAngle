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
        }
    }

    render() {
        const { dataList, tabList } = this.props
        return (
            <div className="mam-content-container">
                <div className="tabBar">
                    {tabList.map(item => <li><a href={`#${item}`}>{item}</a></li>)}
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
