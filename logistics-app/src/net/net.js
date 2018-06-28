/**
 * Created by Jasmine on 2018/6/27.
 */

import axios from 'axios';
import { Modal, Toast } from 'antd-mobile';
import history from '../utils/history';

const baseURLs = {
    pro: 'http://server.xldmclub.com',
    dev: 'http://server.xldmclub.com',
};

//是否加载中
let isLoading = false;
function request(opt) {
    opt = Object.assign({
        method: 'GET',
        token: false,
        // 基本url
        baseURL: baseURLs.pro,

        //token键名
        tokenKey: 'token',

        // token失效的code码
        invalidCodes: ['-2'],

        // 成功状态码
        successCodes: ['1'],

        // 是否携带需要token
        needToken: true,

        // 是否展示加载中提示框
        needLoading: true,

        // 自定义状态码
        ext: {
            codes: [],
            handle: (res) => {
            },
        },

        // 其他无法处理的状态码
        unforeseen: (res) => {
            Modal.alert('提示',  (res.message || JSON.stringify(res)), [{ text: 'Ok'}]);
        },
    }, opt);

    if (opt.method.toUpperCase() === 'GET') {
        opt.params = Object.assign({}, opt.data);
        delete opt.data;
    }

    if (opt.method.toUpperCase() === 'POST') {
        opt.data = Object.assign({}, opt.data);

    }

    if (opt.needLoading) {
        Toast.loading("加载中……");
    }

    return new Promise((resolve, reject) => {
        /**
         * 自动添加token后请求
         * @param token token
         * @param retry 是否需要重试
         */
        function handle(token = '', retry = false) {
            if (!opt.params) opt.params = {};
            if (opt.needToken) {
                if (opt.token) {
                    opt.params[opt.tokenKey] = opt.token;
                } else {
                    opt.params[opt.tokenKey] = token;
                }
            }

            axios(opt).then(res => {
                //console.log(res);
                if (opt.ext.codes && opt.ext.codes.indexOf(String(res.data.code)) >= 0) {
                    //如果匹配到自定义的状态码，将执行自定义的handle
                    opt.ext.handle(res.data);
                } else if (opt.successCodes.indexOf(String(res.data.code)) >= 0) {
                    resolve(res.data.data);
                } else if (opt.needToken && opt.invalidCodes.indexOf(String(res.data.code)) >= 0 && retry) {
                    //再次获取token
                    //前往登录界面重新登录
                    history.push('/')
                } else {
                    opt.unforeseen(res.data);
                }
            }).catch(error => {
                opt.unforeseen({message: '网络错误'});
            }).finally(() => {
                //结束
                setTimeout(() => {
                    if (opt.needLoading) {
                        Toast.hide();
                    }
                }, 100);
            })
        }

        handle(localStorage.getItem(opt.tokenKey) || 'unknow', true);
    })
}

/**
 *
 * @param callback 添加最终完成
 * @returns {Promise.<TResult>}
 */
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => {
            throw reason
        })
    );
};
export { request, baseURLs };
