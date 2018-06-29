/**
 * 封装微信JS-SDK接口工具类
 * Demo:
 *      let sdk = new WechatSdk();
 *      sdk.chooseInvoiceTitle((res) => {});
 *
 * Created by Jasmine on 2017/6/7.
 */
import apis from '../net/apis';
import { request } from '../net/net';
import { Modal } from 'antd-mobile';

export default class WechatSdk{
    /**
     * 初始化，微信授权
     */
    constructor(){
        let url = window.location.href;

        request({
            url: apis.wx,
            method: "GET",
            data: {
                "url": url
            }
        }).then(res => {
            res.beta = true;
            res.debug = false;
            res.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage", "chooseInvoiceTitle"];
            wx.config(res);
        });
    }

    /**
     * 在页面加载时就调用callback函数
     * @param callback 回调函数
     */
    ready(callback){
        wx.ready(callback);
    }

    /**
     * 调用微信分享功能
     * @param title
     * @param desc
     * @param link
     * @param imgUrl
     */
    share(title, desc, link, imgUrl){
        wx.ready(function(){
            let opt = {
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }

            }

            // 分享到朋友圈
            wx.onMenuShareTimeline(opt);

            // 分享给微信好友
            wx.onMenuShareAppMessage(opt);
        });
    }

    /**
     * 获取微信个人发票抬头
     * @param callback 回调函数
     */
    chooseInvoiceTitle(callback){
        wx.ready(function () {
            wx.invoke("chooseInvoiceTitle", {
                "scene": "1"
            }, function (res) {
                if(res.err_msg && (res.err_msg == "chooseInvoiceTitle:ok" || res.err_msg == "choose_invoice_title:ok")){
                    // 成功获取获取抬头
                    callback(res);
                } else{
                    // 获取抬头失败
                    if(res.err_msg == "system:function_not_exist"){
                        Modal.alert("请升级最新版微信客户端！");
                    } else if(res.err_msg != "chooseInvoiceTitle:cancel" && res.err_msg != "choose_invoice_title:cancel"){
                        Modal.alert("获取微信抬头失败！");
                    }
                }
            });
        });
    }
}