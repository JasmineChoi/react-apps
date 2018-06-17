/**
 * Created by Jasmine on 2018/6/12.
 */
import React, { Component } from 'react';
import { Modal, Flex } from 'antd-mobile';
import { inject, observer } from 'mobx-react';

import './select-modal.css';

@inject('homeStore')
@observer
export default class SelectModal extends Component {
    onClose = () => {
        this.props.homeStore.selectVisible = false;
    }

    render() {
        return (
            <div className="modal-wrap">
                <Modal
                    popup
                    title={<div className="fs-34px c-666 lh-70px">选择物品类型</div>}
                    visible={this.props.homeStore.selectVisible}
                    onClose={this.onClose}
                    animationType="slide-up"
                >
                    <div className="modal-content">
                        <Flex>
                            <Flex.Item><button className="btn">买入</button></Flex.Item>
                            <Flex.Item><button className="btn">买入</button></Flex.Item>
                            <Flex.Item><button className="btn">买入</button></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><button className="btn">买入</button></Flex.Item>
                            <Flex.Item><button className="btn">买入</button></Flex.Item>
                            <Flex.Item><button className="btn">买入</button></Flex.Item>
                        </Flex>
                    </div>
                    <div className="foot-btn" onClick={this.onClose}>买入</div>
                </Modal>
            </div>
        )
    }
}