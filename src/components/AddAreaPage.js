import React from 'react';
import CommonStr from '../resources/strings/common';
import '../resources/css/AddPageCommon.css';
import '../resources/css/common.css';
import { formData2Json } from '../common/Function';
const BMap = window.BMap;

export default class AddAreaPage {
    constructor(context) {
        this.context = context;
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
        this.mapClickEvent = this.mapClickEvent.bind(this);
        this.onGetGeoLocationInfo = this.onGetGeoLocationInfo.bind(this);
        this.setName = this.setName.bind(this);
        this.setAddress = this.setAddress.bind(this);
        this.info = {
            name: "",
            address: "",
            city: "",
            tags: [],
            traficTags: [],
        };
        this.map = undefined;
        this.geoc = new BMap.Geocoder();
    }

    handleSubmitEvent(event) {
        event.preventDefault();
        const data = formData2Json(new FormData(event.target));
        this.context.requesthdr.send_message(this.action, data, this);
    }

    updateAreaInfo(info, tags, traficTags) {
        this.info.name = info.title;
        this.info.address = info.address;
        this.info.city = info.city;
        this.info.tags = tags;
        this.info.traficTags = traficTags;

        this.context.setState({ "AddAreaPageInfo": this.info });
    }

    onGetGeoLocationInfo(info) {
        const areas = []
        info.surroundingPois.forEach(e => {
            if (e.Ei === "房地产" || e.Ei === "行政地标") {
                areas.push(e);
            }
        });
        if (areas.length > 0) {
            // TODO add chose box
            this.currentMapInfo = areas[0];
            const point = new BMap.Point(areas[0].point.lng, areas[0].point.lat);
            const local = new BMap.LocalSearch(point, {
                onSearchComplete: (results) => {
                    const arr = [], arr2 = [];
                    results.forEach(obj => {
                        obj.Lq.forEach(o => {
                            if (obj.keyword === '银行') {
                                o.title = ((str) => {
                                    const pos = str.indexOf('行');
                                    return pos === -1 || pos === 1 ? str : str.substring(0, pos + 1);
                                })(o.title);
                            } else if (obj.keyword === '医院') {
                                o.title = ((str) => {
                                    if (str === '医务室')
                                        str = '';
                                    const pos = str.indexOf('医院');
                                    return pos === -1 ? str : str.substring(0, pos + 2);
                                })(o.title);
                            }
                            if (obj.keyword === '公交') {
                                const ids = o.address.split(';');
                                ids.forEach(oo => {
                                    oo = oo.trim();
                                    if (oo.length > 0 && !arr2.find((val) => oo.indexOf(val) !== -1 || val.indexOf(oo) !== -1))
                                        arr2.push(oo);
                                })
                            } else {
                                if (o.title.length > 0 && !arr.find((val) => val.title === o.title))
                                    arr.push(o);
                            }
                        });
                    })
                    this.updateAreaInfo(areas[0], arr, arr2);
                }
            });
            local.searchNearby(["旅游景点", "公园", "商场", "银行", "剧院", "学校", "医院", "公交"], point, 500);
        }
    }

    mapClickEvent(e) {
        this.geoc.getLocation(e.point, this.onGetGeoLocationInfo);
    }

    updateBMap() {
        if (this.map === undefined) {
            const center = new BMap.Point(120.282981, 29.71475);
            this.map = new BMap.Map("bdmap", { enableMapClick: false });
            this.map.centerAndZoom(center, 16);
            this.map.addControl(new BMap.NavigationControl());
            this.map.setCurrentCity("绍兴");
            this.map.enableScrollWheelZoom(true);

            this.map.addOverlay(new BMap.Marker(center));
            this.map.addEventListener("click", this.mapClickEvent);
        }
    }

    componentDidMount() {
        this.updateBMap();
    }

    componentDidUpdate() {
        this.updateBMap();
    }

    componentFinish() {
        this.map = undefined;
    }

    get name() {
        return this.context.state.AddAreaPageInfo.name || "";
    }

    get address() {
        return this.context.state.AddAreaPageInfo.address || "";
    }

    get tags() {
        const ret = [];
        if (this.context.state.AddAreaPageInfo.tags) {
            this.context.state.AddAreaPageInfo.tags.forEach((o) => ret.push(
                <label className="add_area_page_symbol_content gray12_1_ch in_top" key={`area_page_symbol_${ret.length}`}>{o.title}</label>
            ));
        }
        return ret;
    }

    get traficTags() {
        const ret = [];
        if (this.context.state.AddAreaPageInfo.traficTags) {
            this.context.state.AddAreaPageInfo.traficTags.forEach((o) => ret.push(
                <label className="add_area_page_symbol_content gray12_1_ch in_top" key={`area_page_symbol_${ret.length}`}>{o}</label>
            ));
        }
        return ret;
    }

    setName(e) {
        this.info.name = e.target.value;
        this.context.setState({ "AddAreaPageInfo": this.info });
    }

    setAddress(e) {
        this.info.address = e.target.value;
        this.context.setState({ "AddAreaPageInfo": this.info });
    }

    get render() {
        return (
            <div className="add_page_common_background">
                <div className="in_top bdmap" id="bdmap"></div>
                <form className="in_top add_page_common_main_frame2"
                    action={`${process.env.REACT_APP_URL_PREFIX}/add_area`}
                    method="POST"
                    onSubmit={this.handleSubmitEvent}
                >
                    <label className="b w20_1ch textalign_c add_page_common_title">{CommonStr.add_area}</label>
                    <div className="b add_page_common_item" style={{ marginTop: "30px" }}>
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.area_name}</label>
                        <input className="add_page_common_value b15_1_ch in_top noborder"
                            name="name"
                            value={this.name}
                            onChange={this.setName}>
                        </input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.area_address}</label>
                        <input className="add_page_common_value b15_1_ch in_top noborder"
                            name="address"
                            value={this.address}
                            onChange={this.setAddress}>
                        </input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch b">{CommonStr.area_trafic}</label>
                        <div className="in_middle">
                            {this.traficTags}
                        </div>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch b">{CommonStr.area_around}</label>
                        <div className="in_middle">
                            {this.tags}
                        </div>
                    </div>
                    <button className="b add_page_common_ok w15_2ch noborder">{CommonStr.ok}</button>
                </form>
            </div>
        );
    }

    on_loadend(data) {
        this.context.pages[6][0].info.data = [];
        this.context.setState({ current_page: 6 });
    }

    on_error(code, data) {
        console.log(code, data);
    }
}