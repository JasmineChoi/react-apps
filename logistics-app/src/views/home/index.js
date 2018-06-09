/**
 * Created by Jasmine on 2018/6/8.
 */
import React, { Component } from 'react';
import { Button } from 'antd-mobile';

import './style.css';

import ArrowR from '../../assets/arrow-r.png';
import Gps from './assets/gps.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="info-item">
                    <div className="l">
                        <div className="circle">寄</div>
                        <span>填写寄件人信息</span>
                    </div>
                    <div className="r">
                        <img className="arrow" src={ArrowR} alt=""/>
                        <div>
                            <div className="line"></div>
                            <img src={Gps} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}