/**
 * Created by Jasmine on 2018/6/17.
 */

import {observable} from "mobx";

const store = observable({
    selectVisible: true,       // 选择物品类型弹窗
    goodsTypes: ["文件", "数码产品", "生活用品", "服饰", "食品", "其他"],      // 物品类型数组
    selectType: -1,      // 选择物品类型下标
});

export default store;