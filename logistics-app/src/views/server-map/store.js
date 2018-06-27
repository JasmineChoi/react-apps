import { observable } from "mobx";

const store = observable({
    latitude: "",  //纬度
    longitude: "",//经度
});

export default store;