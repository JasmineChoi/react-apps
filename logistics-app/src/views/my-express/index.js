import React, { Component } from 'react';
import { SearchBar, Tabs, WhiteSpace, List, Badge } from 'antd-mobile';
import './index.css';

const tabs = [
    { title: <Badge >我寄的</Badge> },
    { title: <Badge >我收的</Badge> }
];
const Item = List.Item;
const Brief = Item;
export default class MyExpress extends Component {
    state = {}
    render() {
        return (
            <div className='fs-30px my-express'>
                <div>
                    <SearchBar placeholder="可以输入姓名, 电话, 或者单号来查哦~" maxLength={8} />
                </div>
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div >
                        <List>
                            <List.Item extra={'已签收'}>
                                1741587
                            </List.Item>
                         
                            <Item
                                multipleLine
                                platform="android"
                            >
                                发件人: 蓝钻 0755-58741554<Brief>[深圳市] 快件已在深圳南海签收 <br /> 快件已在深圳南海签收.</Brief>
                            </Item>
                        </List>
                    </div>
                    <div >
                        <List>
                            <List.Item extra={'已签收'}>
                                1741587
                            </List.Item>
                            <Item
                                wrap
                            >
                                <div className='fs-28px c-666'>
                                    发件人: 蓝钻 0755-58741554<Brief>[深圳市] 快件已在深圳南海签收 快件已在深圳南海签收.</Brief>
                                </div>
                            </Item>
                        </List>
                        <WhiteSpace></WhiteSpace>
                        <List>
                            <List.Item extra={'已签收'}>
                                1741587
                            </List.Item>
                            <Item
                                wrap
                            >
                                <div className='fs-28px c-666'>
                                    发件人: 蓝钻 0755-58741554<Brief>[深圳市] 快件已在深圳南海签收 快件已在深圳南海签收.</Brief>
                                </div>
                            </Item>
                        </List>
                    </div>
                </Tabs>
                <div className='bottom'>
                    <div className='flex justify-center items-center no-more c-666 fs-26px'>没有更多数据了</div>
                </div>
            </div>
        );
    }
}