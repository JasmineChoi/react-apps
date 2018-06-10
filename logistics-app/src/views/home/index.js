/**
 * Created by Jasmine on 2018/6/8.
 */
import React, { Component } from 'react';
import { Picker, List, Flex } from 'antd-mobile';

import './style.css';

import ArrowR from '../../assets/arrow-r.png';
import Gps from './assets/gps.png';
import Minus from './assets/-.png';
import Add from './assets/+.png';

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
                        <div className="line"></div>
                        <img className="gps" src={Gps} alt=""/>
                    </div>
                </div>

                <div className="info-item">
                    <div className="l">
                        <div className="circle-yellow">寄</div>
                        <span>填写寄件人信息</span>
                    </div>
                    <div className="r">
                        <img className="arrow" src={ArrowR} alt=""/>
                        <div className="line"></div>
                        <img className="gps" src={Gps} alt=""/>
                    </div>
                </div>

                <Picker className="mb-20px" data={[{value: "1", label: "中通"}, {value: "2", label: "顺丰"}]} cols={1}>
                    <List.Item arrow="down" extra="中通">选择物流</List.Item>
                </Picker>

                <Flex>
                    <Flex.Item>
                        <p>物品类型</p>
                        <List.Item arrow="down" extra="请选择"></List.Item>
                        <div className="line"></div>
                    </Flex.Item>
                    <Flex.Item>
                        <p>预估重量(KG)</p>
                        <div className="flex">
                            <img src={Minus} alt=""/>
                            <input type="text"/>
                            <img src={Add} alt=""/>
                        </div>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}