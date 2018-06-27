import React, { Component } from 'react';
import { Flex, List, InputItem, Button, WhiteSpace, Picker, Checkbox } from 'antd-mobile';
import left from '../../assets/i_l.png';
import edit from '../../assets/i_edit.png';
import smart from '../../assets/i_smart_address.png';
import map from '../../assets/i_map.png';
import './index.css';

const Item = List.Item;
const Brief = Item.Brief;
const AgreeItem = Checkbox.AgreeItem;
export default class Send extends Component {
    state = {}
    render() {
        return (
            <div className='fs-30px '>
                <div className="flex justify-between items-center h-80px b-b-e7 c-666">
                    <img src={left} className='ml-30px w-20px' alt="" />
                    <span>编辑联系人信息</span>
                    <div className='mr-10px'></div>
                </div>
                <div className='edit-info'>
                    <div className='flex '>
                        {/* <input placeholder="no label" />
                        <input placeholder="no label" /> */}
                        <InputItem
                            placeholder="姓名"
                        />
                        
                        <InputItem
                            placeholder="手机或0开头的固话"
                        />
                    </div>
                    {/* <Flex justify="between">
                        <Flex.Item>
                            <Picker extra="请选择省-市-区"
                                onOk={e => console.log('ok', e)}
                            >
                                <List.Item arrow="down" ></List.Item>
                            </Picker>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={map} alt=""/>
                        </Flex.Item>
                    </Flex> */}
                    <List >
                        <Picker extra="请选择省-市-区"
                            onOk={e => console.log('ok', e)}
                        >
                            <List.Item arrow="down" thumb={map}></List.Item>
                        </Picker>
                        <InputItem
                            
                            placeholder="详细地址"
                        >
                        </InputItem>
                    </List>
                </div>
                <WhiteSpace />
                <div>
                    <List>
                        <List.Item
                            arrow="down"
                            thumb={smart}
                            multipleLine
                            onClick={() => { }}
                        >
                            智能地址填写 <Brief>复制一条地址信息到下方, 系统自动识别</Brief>
                        </List.Item>
                    </List>
                </div>
                <div>
                    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                        设为默认地址 
                    </AgreeItem>
                </div>
                <div className='fixed  footer-wrap bottom-0 '>
                    <Button className='bottom-btn c-fff'>确 认</Button>
                </div>
            </div>
        );
    }
}