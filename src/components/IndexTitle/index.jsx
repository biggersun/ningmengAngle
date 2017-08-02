import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import img1 from 'assets/images/home_icon_1.png'
import img2 from 'assets/images/home_icon_2.png'
import img3 from 'assets/images/home_icon_3.png'
import img4 from 'assets/images/home_icon_4.png'
import img5 from 'assets/images/home_icon_5.png'
import img6 from 'assets/images/home_icon_6.png'
import img7 from 'assets/images/home_icon_7.png'
import img8 from 'assets/images/home_icon_8.png'
import img9 from 'assets/images/home_icon_9.png'
import logo from 'assets/images/home_img_logo.png'
import footerImg from 'assets/images/home_img_bottom.png'

import IndexList from './List'
import './index.scss'

const propTypes = {
    content: PropTypes.array.isRequired,
    imagePaths: PropTypes.object.isRequired,
    hospitalName: PropTypes.string.isRequired,
}

const defaultProps = {
    content: [],
    imagePaths: {},
}

class IndexTitle extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const arr = [
            {
                id: 2,
                name: '能不能吃',
                img: img2,
                url: 'CannotEat',
            },
            {
                id: 3,
                name: '婴儿按摩操',
                img: img9,
                url: 'http://icloudcrm.cn/lemonbabywebsite/babyvideo.html',
            },
            {
                id: 4,
                name: '看懂B超',
                img: img4,
                url: 'ultrasound',
            },
            {
                id: 5,
                name: '孕检时间表',
                img: img5,
                url: 'timeTable',
            },
            {
                id: 6,
                name: '疫苗时间表',
                img: img6,
                url: 'vaccine',
            },
            {
                id: 9,
                name: '发育指标',
                img: img3,
                url: 'growth',
            },
            {
                id: 1,
                name: '妈妈知道',
                img: img1,
                url: '/mamKown',
            },
            {
                id: 7,
                name: '宝宝起名',
                img: img7,
                url: '/',
            },
            {
                id: 8,
                name: '生男生女',
                img: img8,
                url: '/',
            },
        ]
        const {
            content,
            imagePaths,
            hospitalName,
        } = this.props

        return (
            <div>
                <div className="index-container-1">
                    {
                        hospitalName !== '0' ? <div className="title">
                            <img src={logo} alt="" />
                            <p>檬宝宝孕育，您的私人孕育管家</p>
                        </div> : <div className="title hospitalName">
                            <div className="text">{hospitalName}</div>
                            <p>从孕期到育儿，全程陪伴，贴心管理</p>
                        </div>
                    }
                    <div className="content">
                        {arr.map((i) => {
                            if (i.id === 3) {
                                return (
                                    <a className="item" key={i.id} href={i.url} >
                                        <div className="img-box">
                                            <img src={i.img} alt="" />
                                        </div>
                                        <div className="name">{i.name}</div>
                                    </a>
                                )
                            }
                            return (
                                <Link className="item" key={i.id} to={i.url} >
                                    <div className="img-box">
                                        <img src={i.img} alt="" />
                                    </div>
                                    <div className="name">{i.name}</div>
                                </Link>
                            )
                        })
                        }
                    </div>
                </div>
                <IndexList
                    content={content}
                    imagePaths={imagePaths}
                />
                <div className="footer">
                    <div className="more">更多专业知识<em>》</em></div>
                    <img src={footerImg} alt="" />
                    <div className="footer-text">
                        <span>&copy;2017</span>
                        <a href="http://icloudcrm.cn/lemonbabywebsite/index.html" className="center">檬宝宝孕育</a>
                        <a href="http://icloudcrm.cn/lemonbabywebsite/aboutus.html">联系我们</a>
                    </div>
                </div>
            </div>
        )
    }
}

IndexTitle.propTypes = propTypes

IndexTitle.defaultProps = defaultProps

export default IndexTitle
