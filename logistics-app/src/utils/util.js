/**
 * Created by Jasmine on 2018/6/28.
 */

/**
 * 清除所有空格
 * @param Data
 * @returns {*}
 */
function trimAll(Data) {
    if (Data) {
        Data = Data.replace(/\s/g, "");//去除掉所有的空格
        return Data;
    }
    return ''
}

module.exports = {
    trimAll
}
