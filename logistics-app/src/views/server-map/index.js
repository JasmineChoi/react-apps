import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap'
import { inject, observer } from 'mobx-react';
import './index.css';

// let latitude = "";  //纬度
// let longitude = "";//经度

@inject('ServerMapStore')
@observer
export default class MyExpress extends Component {
    state = {

    }
    componentDidMount() {
        this.getMyLocation()
    }
    getMyLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;  //纬度
                const longitude = position.coords.longitude;//经度
                console.log(this, 'dett');

                this.props.ServerMapStore.latitude = latitude
                this.props.ServerMapStore.longitude = longitude
                console.log(latitude, longitude);
            });
        } else {
            alert("浏览器不支持地理定位");
        }
    }
    displayLocation(position) {
        const latitude = position.coords.latitude;  //纬度
        const longitude = position.coords.longitude;//经度
        console.log(this, 'dett');
        
        this.props.ServerMapStore.latitude = latitude
        this.props.ServerMapStore.longitude = longitude
        console.log(latitude, longitude);

        // loadScript();
        //调用此方法异步调用百度地图api
    }
    render() {
        const { latitude, longitude } = this.props.ServerMapStore
        return (
            <div className='fs-30px my-express'>
                <div>
                    <SearchBar placeholder="可以输入姓名, 电话, 或者单号来查哦~" maxLength={8} />
                </div>
                <div>
                    {
                        latitude && <Map center={{ lng: longitude, lat: latitude }} zoom="11">
                            <Marker position={{ lng: longitude, lat: latitude }} />
                            <NavigationControl />
                            <InfoWindow position={{ lng: longitude, lat: latitude }} text="内容" title="标题" />
                        </Map>
                    }
                </div>
            </div>
        );
    }
}