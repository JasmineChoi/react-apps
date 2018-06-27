/**
 * Created by Jasmine on 2018/6/20.
 */
import React, { Component } from 'react';

import './index.css';

import boxImg from './assets/box.png';
import bannerImg from './assets/banner.png';
import currentImg from './assets/current.png';
import nextImg from './assets/next.png';

export default class OrderDetail extends Component {
    render() {
        return (
            <div className="fs-30px">
                <div className="flex items-center banner">
                    <img src={boxImg} className="w-80px" alt=""/>
                    <div className="ml-30px">
                        <p className="mb-10px title">已签收</p>
                        <p>运单号：480932849839</p>
                    </div>
                </div>

                <div>
                    <img src={bannerImg} style={{width: "100%"}} alt=""/>
                </div>

                <div className="status-axio">
                    <div className="item active">
                        <span>05-31 13:44</span>
                        <div className="icon">
                            <img src={currentImg} alt=""/>
                        </div>
                        <p className="content">
                            【深圳市】快件已在【深圳望海】签收<br/>
                            签收人：拍照签收，感谢您使用申通快递，期待再次为您服务！
                        </p>
                    </div>

                    <div className="item">
                        <span>05-31 13:44</span>
                        <div className="icon">
                            <img src={nextImg} alt=""/>
                        </div>
                        <p>
                            【深圳市】快件已在【深圳望海】签收<br/>
                            签收人：拍照签收，感谢您使用申通快递，期待再次为您服务！
                        </p>
                    </div>
                </div>

                <div className="footer-btn mt-20px">
                    登录获取更多功能
                </div>
            </div>
        )
    }
}
