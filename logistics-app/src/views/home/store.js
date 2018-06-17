/**
 * Created by Jasmine on 2018/6/17.
 */

import {observable} from "mobx";

const store = observable({
    selectVisible: false,       // 选择物品类型弹窗
});

export default store;