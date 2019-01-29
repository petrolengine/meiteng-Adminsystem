import React from 'react';
import '../resources/css/TopContent.css';
import '../resources/css/label.css';
import CommonStr from '../resources/strings/common';
import ToolbarStr from '../resources/strings/toolbar';

export default class TopContent {
    constructor(context) {
        this.context = context;
    }

    get renderLogo() {
        return (
            <div className="tc_logo">
                <label className="tc_logo_english_name in_center">{CommonStr.en_title}</label>
                <label className="tc_logo_chinese_name in_center">{CommonStr.ch_title}</label>
            </div>
        );
    }

    __handleToolbarClick(idx) {
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

    get renderSearchBar() {
        return (
            <div className="tc_search">
                <button className="tc_btn" type="summit"></button>
                <input className="tc_input_frame" placeholder={CommonStr.placeholder_serarch}></input>
            </div>
        );
    }
}
