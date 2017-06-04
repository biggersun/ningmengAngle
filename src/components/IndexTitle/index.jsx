import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { Link, } from 'react-router'

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

const propTypes = {}

const defaultProps = {}

class IndexTitle extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const arr = [
            {
                id: 1,
                name: '妈妈知道',
                img: img1,
                url: '/',
            },
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
                url: '/',
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
            {
                id: 9,
                name: '发育指标',
                img: img3,
                url: '/',
            },
        ]
        return (
            <div>
                <div className="index-container-1">
                    <div className="title">
                        <img src={logo} alt="" />
                    </div>
                    <div className="content">
                        {arr.map(i =>
                            <Link className="item" key={i.id} to={i.url} >
                                <div className="img-box">
                                    <img src={i.img} alt="" />
                                </div>
                                <div className="name">{i.name}</div>
                            </Link>)
                        }
                    </div>
                </div>
                <IndexList />
                <div className="footer">
                    <img src={footerImg} alt="" />
                    <div className="footer-text">
                        <span>&copy;2017</span>
                        <a href="" className="center">檬宝宝孕育</a>
                        <a href="">联系我们</a>
                    </div>
                </div>
            </div>
        )
    }
}

IndexTitle.propTypes = propTypes

IndexTitle.defaultProps = defaultProps

export default IndexTitle
