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

    // 选择物品
    select = (i) => {
        this.props.homeStore.selectType = i;
    }

    render() {
        let { selectType, goodsTypes, selectVisible } = this.props.homeStore;

        return (
            <div className="modal-wrap">
                <Modal
                    popup
                    title={<div className="fs-34px c-666 lh-70px">选择物品类型</div>}
                    visible={selectVisible}
                    onClose={this.onClose}
                    animationType="slide-up"
                >
                    <div className="modal-content">
                        <Flex wrap="wrap">
                            {
                                goodsTypes.map((item, i) => {
                                    return (
                                        <button key={i}
                                                className={"btn" + (selectType === i ? " active" : "")}
                                                onClick={() => { this.select(i) }}>
                                            {item}
                                        </button>
                                    )
                                })
                            }
                        </Flex>
                    </div>
                    <div className="foot-btn" onClick={this.onClose}>确认</div>
                </Modal>
            </div>
        )
    }
}