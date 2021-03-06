import React from 'react';
import '../resources/css/LandlordCustomerPage.css';
import '../resources/css/AreaPage.css';
import '../resources/css/label.css';
import '../resources/css/common.css';

import { renderPage, onList1, onList2 } from '../common/Function';

import environment from '../resources/images/browse_community/environment.png';
import environment2 from '../resources/images/browse_community/environment2.png';
import address from '../resources/images/browse_community/address.png';


export default class AreaPage {
    constructor(context) {
        this.context = context;
        this.prePage = 6;
        this.updateKey = "AreaPageInfo";
        this.url1 = "/users/GetAreaList";
        this.initialize();
    }

    renderOneResult(obj, idx) {
        const items = [];
        obj.tags.forEach((o) => items.push(
            <a className="area_page_symbol_content orange13_0_ch in_top" key={`area_page_symbol_${items.length}`} title="">{o}</a>
        ));
        const trafics = [];
        obj.trafic_tags.forEach((o) => trafics.push(
            <a className="area_page_symbol_content orange13_0_ch in_top" key={`area_page_symbol2_${trafics.length}`}>{o}</a>
        ));
        return (
            <div className="area_page_card b" key={`area_page_${idx}`}>
                <img className="area_page_prev_image in_middle m_t_16 m_l_16" src={environment} alt="" />
                <img className="area_page_prev_image in_middle m_t_16 m_l_6" src={environment2} alt="" />
                <div className="in_middle m_l_8" style={{ width: "330px" }}>
                    <label className="textalign_c b20_1_ch b">{obj.name}</label>
                    <div className="b m_t_16">
                        <img className="in_top" src={address} alt="" />
                        <label className="gray15_1_ch in_top m_l_5">{`${obj.address}`}</label>
                    </div>
                    <div style={{ maxHeight: "130px", overflow: "scroll" }} >
                        {trafics}
                    </div>
                </div>
                <div className="in_middle m_l_8" style={{ width: "390px", maxHeight: "180px", overflow: "scroll" }}>
                    {items}
                </div>
                <button className="edit_button in_top fr m_t_2 m_r_2"></button>
                <label className="b gray10_0_ch m_r_2 fr">{obj.datetime}</label>
            </div>
        );
    }

    get render() {
        if (this.info.data.length === 0) {
            this.get_data_from_server(this.url1);
        }
        const items = [];
        this.info.data.forEach((o) => items.push(this.renderOneResult(o, items.length)));
        return (
            <div className="b">
                {items}
                {renderPage(this)}
            </div>
        );
    }

    on_loadend(data) {
        switch (data.key) {
            case "/GetAreaList":
                onList1(this, data);
                break;
            case "/GetAreaList2":
                onList2(this, data);
                break;
            default:
                break;
        }
    }

    on_error(code, data) {
        console.log(code, data);
    }

    get_data_from_server(url) {
        const params = {
            page: this.info.curPage,
            prePage: this.prePage,
            key: this.info.searchKey,
        };
        this.context.requesthdr.send_message(url, params, this);
    }

    search() {
        this.get_data_from_server("/users/GetAreaList2");
    }

    initialize() {
        this.info = {
            data: [],
            totalPage: Math.ceil(this.context.totals.area / this.prePage),
            curPage: 0,
            searchKey: "",
        }
    }
}