import React, {Component} from 'react';
import { SearchBar, Button } from 'antd-mobile';
import left from '../../assets/i_l.png';
import edit from '../../assets/i_edit.png';
import del from '../../assets/i_del.png';
import './index.css';
export default class Send extends Component {
    state = {  }
    render() {
        return (
            <div className='fs-30px '>
                <div className="flex justify-between items-center h-80px b-b-e7 c-666">
                    <img src={left} className='ml-30px w-20px' alt=""/>
                    <span>地址簿</span>
                    <div className='mr-10px' style={{ color: '#93C081'}}>微信地址薄</div>
                </div>
                <div>
                    <SearchBar placeholder="Search" maxLength={8} />
                </div>
                <div className='mt-20px bottom bg-fff'>
                    <div className='address-wrap'   >
                        <div className='address-item flex items-center justify-between px-26px b-b-e7'>
                            <div className='info'>
                                <div>陈丽丽 15200874745</div>
                                <div className='mt-30px c-666 fs-26px'>广东-深圳 具体解读</div>
                            </div>
                            <div>
                                <img className='ml-30px w-30px' src={edit} alt=""/>
                                <img className='ml-30px w-30px' src={del} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center no-more c-666 fs-26px'>没有更多数据了</div>
                </div>
                <div className='fixed  footer-wrap bottom-0 '>
                    <Button className='bottom-btn c-fff'>+ 新建地址</Button>
                </div>
            </div>
        );
    }
}