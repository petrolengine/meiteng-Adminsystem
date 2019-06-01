import React from 'react';
import '../resources/css/TopContent.css';
import '../resources/css/label.css';
import CommonStr from '../resources/strings/common';
import ToolbarStr from '../resources/strings/toolbar';
import { formData2Json } from '../common/Function';

export default class TopContent {
    constructor(context) {
        this.context = context;
        this.searchSubmit = this.searchSubmit.bind(this);
    }

    get renderLogo() {
        return (
            <div className="tc_logo">
                <label className="tc_logo_english_name in_center">{CommonStr.en_title}</label>
                <label className="tc_logo_chinese_name in_center">{CommonStr.ch_title}</label>
            </div>
        );
    }

    get obj() {
        const pages = this.context.pages;
        return pages[this.context.state.current_page % pages.length][0];
    }

    searchSubmitObj(obj, key) {
        obj.info.curPage = 0;
        obj.info.searchKey = key.key;
        obj.search();
    }

    resetSearch(obj) {
        obj.initialize();
    }

    __handleToolbarClick(idx) {
        const searchItem = document.getElementById("searchTopBar");
        if (searchItem && searchItem.value.length > 0) {
            searchItem.value = "";
            this.resetSearch(this.obj);
        }
        if (this.context.oldPage !== idx) {
            const temp = this.context.pages[this.context.oldPage % this.context.pages.length][0];
            if (temp.componentFinish)
                temp.componentFinish()
            this.context.oldPage = idx;
        }
        this.context.setState({ current_page: idx });
    }

    __getSubItem(obj, idx) {
        if (obj.sub) {
            const items = [];
            obj.sub.forEach((o) => {
                const cur = idx;
                items.push(
                    <li className="tc_tb_meun_dropdown_label w20_1_ch"
                        key={`top_toolbar_subitem_${cur}`}
                        onClick={() => this.__handleToolbarClick(cur)}>
                        {o.str}
                    </li >
                );
                idx++;
            });
            return (
                <ul className="tc_tb_drop_down_content">
                    {items}
                </ul>
            );
        }
    }

    __getToolbarItems(obj) {
        const items = [];
        let idx = 0;
        obj.forEach((o) => {
            if (o.sub) {
                items.push(
                    <li className="tc_tb_meun_addition tc_tb_meun_label w20_1_ch tc_tb_menu_label_hilight" key={`top_toolbar_item_${idx}`}>
                        {o.str}
                        {this.__getSubItem(o, idx)}
                    </li>
                );
                idx += o.sub.length;
            } else if (this.context.state.current_page === idx) {
                items.push(
                    <li className="tc_tb_meun_label w20_1_ch tc_tb_current_menu"
                        key={`top_toolbar_item_${idx}`}>
                        {o.str}
                    </li>
                );
                idx++;
            } else {
                const cur = idx;
                items.push(
                    <li className="tc_tb_meun_label w20_1_ch tc_tb_menu_label_hilight"
                        key={`top_toolbar_item_${cur}`}
                        onClick={() => this.__handleToolbarClick(cur)}>
                        {o.str}
                    </li>
                );
                idx++;
            }
        });
        return (
            <ul className="tc_toolbar_meun">
                {items}
            </ul>
        );
    }

    get renderToolBar() {
        return (
            <div className="tc_tool_bar">
                <div className="tc_line"></div>
                {this.__getToolbarItems(ToolbarStr)}
            </div>
        );
    }

    searchSubmit(e) {
        e.preventDefault();
        const data = formData2Json(new FormData(e.target));
        if (!data.key)
            data['key'] = "";

        this.searchSubmitObj(this.obj, data);
    }

    renderSearchBar(valide) {
        if (valide) {
            return (
                <form className="tc_search" onSubmit={this.searchSubmit}>
                    <button className="tc_btn"></button>
                    <input className="tc_input_frame" placeholder={CommonStr.placeholder_serarch} name="key" id="searchTopBar"></input>
                </form>
            );
        }
    }
}
