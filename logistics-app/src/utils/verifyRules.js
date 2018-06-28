/**
 * 校验规则集合
 * Demo:
 *     if(!VerifyRules.phone.verify(phone)) {
 *         alert(VerifyRules.phone.tip);
 *         return;
 *     }
 *
 * Created by Jasmine on 2018/6/28.
 */
export default class VerifyRules {
    // 手机号
    static phone = {
        verify: (str) => {
            let result = /^[1][3,4,5,7,8][0-9]{9}$/.test(str);
            return result;
        },
        tip: '请输入正确手机号'
    }
};