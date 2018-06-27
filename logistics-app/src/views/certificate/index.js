/**
 * Created by Jasmine on 2018/6/18.
 */
import React, { Component } from 'react';
import { List, InputItem, Picker } from 'antd-mobile';

export default class Certificate extends Component {
    render() {
        return (
            <div className="fs-30px">
                <div className="px-24px py-30px bg-fff c-666">
                    <p>尊敬的用户：</p>
                    <p>&emsp;&emsp;根据国家邮政局《寄递渠道“三个100%”》的要求，请您配合完成实名登记。若不便登记，也可在我司业务员上门揽件时，配合出示身份证，谢谢配合~</p>
                    <p>&emsp;&emsp;中通快递已通过公安部三级等保认证，将依法保护您的隐私与信息安全~</p>
                </div>

                <List className="mt-20px">
                    <InputItem
                        clear
                        placeholder="请输入姓名"
                    >姓名</InputItem>

                    <InputItem
                        clear
                        placeholder="请输入手机号"
                    ></InputItem>

                    <InputItem
                        clear
                        placeholder="请输入验证码"
                    ></InputItem>

                    <InputItem
                        clear
                        placeholder="请输入证件号码"
                    >证件号码</InputItem>

                    <Picker extra="请选择省-市-区"
                            onOk={e => console.log('ok', e)}
                    >
                        <List.Item arrow="horizontal">省市区</List.Item>
                    </Picker>

                    <InputItem
                        clear
                        placeholder="请输入详细地址"
                    >详细地址</InputItem>

                    <Picker extra="请选择所属行业"
                            onOk={e => console.log('ok', e)}
                    >
                        <List.Item arrow="horizontal">所属行业</List.Item>
                    </Picker>
                </List>

                <div className="footer-btn mt-20px">
                    提交
                </div>
            </div>
        )
    }
}