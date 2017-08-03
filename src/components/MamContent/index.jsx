import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'
import { Link } from 'react-router'

import './index.scss'

const propTypes = {
    dataList: PropTypes.array.isRequired,
    tabList: PropTypes.array.isRequired,
}

const defaultProps = {}

const LinkS = Scroll.Link
const Element = Scroll.Element
const Events = Scroll.Events
const scrollSpy = Scroll.scrollSpy

class MamContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickIndex: 0,
        }

        this.handleTab = this.handleTab.bind(this)
    }

    componentDidMount() {
        scrollSpy.update()
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin')
        Events.scrollEvent.remove('end')
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
                <div className="tabBar nav navbar-nav">
                    {tabList.map((item, index) => {
                        const classNameIcon = index === clickIndex
                            ? `icon${index + 1} active`
                            : `icon${index + 1}`
                        const classNameP = index === clickIndex
                            ? 'active'
                            : ''
                        return (<li key={index}>
                            <LinkS
                                to={`${item}`}
                                containerId="content"
                                data-index={index}
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={this.handleTab}
                            >
                                <div className={classNameIcon} />
                                <p className={classNameP}>{item}</p>
                            </LinkS>
                        </li>)
                    })}
                </div>
                <div id="content" className="content">
                    {dataList.map(item => (<Element
                        key={item.title}
                        name={item.title}
                    >
                        <div className="title">{item.title}</div>
                        <ul>
                            {item.list.map(item2 => <Link
                                key={item2.articleSubCategoryId}
                                to={`mamAircles?id=${item2.articleCategoryId}&name=${item2.name2}`}
                            >
                                <li>{item2.name2}</li>
                            </Link>)}
                        </ul>
                    </Element>))}
                </div>
            </div>
        )
    }
}

MamContent.propTypes = propTypes

MamContent.defaultProps = defaultProps

export default MamContent
