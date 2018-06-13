/**
 * Created by Jasmine on 2018/6/12.
 */
import React, { Component } from 'react';
import { Modal, Button, Flex } from 'antd-mobile';

import './select-modal.css';

export default class SelectModal extends Component {
    state = {
        modal2: false
    }

    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    render() {
        return (
            <div className="modal-wrap">
                <Modal
                    popup
                    title={<div className="fs-34px c-666 lh-70px">选择物品类型</div>}
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                >
                    <div className="modal-content">
                        <Flex>
                            <Flex.Item><button className="btn" onClick={this.onClose('modal2')}>买入</button></Flex.Item>
                            <Flex.Item><button className="btn" onClick={this.onClose('modal2')}>买入</button></Flex.Item>
                            <Flex.Item><button className="btn" onClick={this.onClose('modal2')}>买入</button></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><button className="btn" onClick={this.onClose('modal2')}>买入</button></Flex.Item>
                            <Flex.Item><button className="btn" onClick={this.onClose('modal2')}>买入</button></Flex.Item>
                            <Flex.Item><button className="btn" onClick={this.onClose('modal2')}>买入</button></Flex.Item>
                        </Flex>
                    </div>
                    <div className="foot-btn" onClick={this.onClose('modal2')}>买入</div>
                </Modal>
            </div>
        )
    }
}