/**
 * Created by Jasmine on 2018/6/8.
 */
import React, { Component } from 'react';
import { Picker, List, Flex, Checkbox } from 'antd-mobile';
import SelectModal from './select-modal';
import { inject, observer } from 'mobx-react';

import './index.css';

import ArrowR from '../../assets/arrow-r.png';
import Gps from './assets/gps.png';
import Minus from './assets/-.png';
import Add from './assets/+.png';

@inject('homeStore')
@observer
export default class Home extends Component {
    showModal = () => {
        this.props.homeStore.selectVisible = true;
    }

    onChange = (val) => {
        console.log(val);
    }

    render() {
        let { selectType, goodsTypes } = this.props.homeStore;

        return (
            <div className="fs-30px">
                <div className="info-item">
                    <div className="l">
                        <div className="circle">寄</div>
                        <span>填写寄件人信息</span>
                    </div>
                    <div className="r">
                        <img className="arrow" src={ArrowR} alt=""/>
                        <div className="line-150px"></div>
                        <img className="gps" src={Gps} alt=""/>
                    </div>
                </div>

                <div className="info-item">
                    <div className="l">
                        <div className="circle-yellow">收</div>
                        <span>填写寄件人信息</span>
                    </div>
                    <div className="r">
                        <img className="arrow" src={ArrowR} alt=""/>
                        <div className="line-150px"></div>
                        <img className="gps" src={Gps} alt=""/>
                    </div>
                </div>

                <Picker data={[{value: "1", label: "中通"}, {value: "2", label: "顺丰"}]} cols={1}>
                    <List.Item arrow="down" extra="中通">选择物流</List.Item>
                </Picker>

                <div>
                    <Flex className="goods-item mt-20px">
                        <Flex.Item onClick={this.showModal}>
                            <p>物品类型</p>
                            <List.Item arrow="down">{goodsTypes[selectType] || "请选择"}</List.Item>
                        </Flex.Item>
                        <div className="line"></div>

                        <Flex.Item>
                            <p>预估重量(KG)</p>
                            <div className="flex mt-20px">
                                <img className="icon" src={Minus} alt=""/>
                                <input type="number" defaultValue="1"/>
                                <img className="icon" src={Add} alt=""/>
                            </div>
                        </Flex.Item>
                    </Flex>

                    <Flex className="goods-item">
                        <Flex.Item onClick={this.showModal}>
                            <p>代收金额</p>
                            <List.Item arrow="down">0元</List.Item>
                        </Flex.Item>
                        <div className="line"></div>

                        <Flex.Item>
                            <p>预估重量(KG)</p>
                            <div className="flex mt-20px">
                                <img className="icon" src={Minus} alt=""/>
                                <input type="number" defaultValue="1"/>
                                <img className="icon" src={Add} alt=""/>
                            </div>
                        </Flex.Item>
                    </Flex>
                </div>

                <Flex className="bg-fff py-30px px-20px mt-20px">
                    <Flex.Item className="flex justify-between">
                        <span>上门取</span>
                        <Checkbox key={0} onChange={() => this.onChange(0)}></Checkbox>
                    </Flex.Item>
                    <div className="line-50px"></div>

                    <Flex.Item className="flex justify-between">
                        <span>自寄</span>
                        <Checkbox key={0} onChange={() => this.onChange(0)}></Checkbox>
                    </Flex.Item>
                </Flex>

                <div className="footer">
                    <div className="content">
                        <Checkbox className="mx-10px" key={0} onChange={() => this.onChange(0)}></Checkbox>
                        我已同意并接受 《寄件承诺》<br/>
                        <p className="mt-10px">预约时间：8:00—17:00，逾时次日服务</p>
                    </div>
                    <div className="btn">提交</div>
                </div>

                <SelectModal />
            </div>
        )
    }
}