import React from 'react';
import '../resources/css/TopContent.css'
import '../resources/css/label.css'
import CommonStr from '../resources/strings/common'
import ToolbarStr from '../resources/strings/toolbar'

export default class TopContent {
    constructor(context) {
        this.context = context;
    }

    get renderLogo() {
        return (
            <div className="tc_logo">
                <label className="tc_logo_english_name">{CommonStr.en_title}</label>
                <label className="tc_logo_chinese_name">{CommonStr.ch_title}</label>
            </div>
        );
    }

    __handleToolbarClick(idx) {
        this.context.setState({ current_page: idx });
    }

    __getSubItem(obj) {
        if (obj.sub) {
            const items = [];
            let idx = 0;
            obj.sub.forEach((o) => {
                items.push(<li className="tc_tb_meun_dropdown_label w20_1_ch" key={`top_toolbar_subitem_${idx++}`}>{o.str}</li>);
            });
            return (
                <ul className="tc_tb_drop_down_content">
                    {items}
                </ul>
            );
        }
    }

    __getToolbarItem(obj, idx) {
        if (obj.sub) {
            return (
                <li className="tc_tb_meun_addition tc_tb_meun_label w20_1_ch" key={`top_toolbar_item_${idx}`}>
                    {obj.str}
                    {this.__getSubItem(obj)}
                </li>
            );
        } else if (this.context.state.current_page === idx) {
            return (
                <li className="tc_tb_meun_label w20_1_ch tc_tb_current_menu"
                    key={`top_toolbar_item_${idx}`}
                    onClick={() => this.__handleToolbarClick(idx)}>
                    {obj.str}
                </li>
            );
        } else {
            return (
                <li className="tc_tb_meun_label w20_1_ch tc_tb_menu_label_hilight"
                    key={`top_toolbar_item_${idx}`}
                    onClick={() => this.__handleToolbarClick(idx)}>
                    {obj.str}
                </li>
            );
        }
    }

    __getToolbarItems(obj) {
        const items = [];
        let idx = 0;
        obj.forEach((o) => {
            items.push(this.__getToolbarItem(o, idx++));
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
