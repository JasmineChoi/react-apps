/**
 * Created by Jasmine on 2018/6/8.
 */
import React, { Component } from 'react';
import { Picker, List, Flex } from 'antd-mobile';
import SelectModal from './select-modal';
import { inject } from 'mobx-react';

import './index.css';

import ArrowR from '../../assets/arrow-r.png';
import Gps from './assets/gps.png';
import Minus from './assets/-.png';
import Add from './assets/+.png';

@inject('homeStore')
export default class Home extends Component {
    showModal = () => {
        this.props.homeStore.selectVisible = true;
    }

    render() {
        return (
            <div className="fs-30px">
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

                <Picker data={[{value: "1", label: "中通"}, {value: "2", label: "顺丰"}]} cols={1}>
                    <List.Item arrow="down" extra="中通">选择物流</List.Item>
                </Picker>

                <Flex className="goods-item mt-20px">
                    <Flex.Item className="line" onClick={this.showModal}>
                        <p>物品类型</p>
                        <List.Item arrow="down" extra="请选择"></List.Item>
                    </Flex.Item>
                    <Flex.Item>
                        <p>预估重量(KG)</p>
                        <div className="flex">
                            <img className="icon" src={Minus} alt=""/>
                            <input type="text" defaultValue="1"/>
                            <img className="icon" src={Add} alt=""/>
                        </div>
                    </Flex.Item>
                </Flex>
                <Flex className="goods-item">
                    <Flex.Item className="line" onClick={this.showModal}>
                        <p>物品类型</p>
                        <List.Item arrow="down" extra="请选择"></List.Item>
                    </Flex.Item>

                    <Flex.Item>
                        <p>预估重量(KG)</p>
                        <div className="flex">
                            <img className="icon" src={Minus} alt=""/>
                            <input type="text" defaultValue="1"/>
                            <img className="icon" src={Add} alt=""/>
                        </div>
                    </Flex.Item>
                </Flex>

                <Flex className="goods-item mt-20px">
                    <Flex.Item className="line">
                        <span>上门取</span>
                        <input type="radio"/>
                    </Flex.Item>

                    <Flex.Item>
                        <span>自寄</span>
                        <input type="radio"/>
                    </Flex.Item>
                </Flex>

                <div className="footer">
                    <div className="content">

                    </div>
                    <div className="btn">提交</div>
                </div>

                <SelectModal />
            </div>
        )
    }
}