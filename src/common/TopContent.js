import React from 'react';
import '../resources/css/TopContent.css'
import '../resources/css/label.css'
import CommonStr from '../resources/strings/common'
import ToolbarStr from '../resources/strings/toolbar'

export function renderLogo() {
    return (
        <div className="tc_logo">
            <label className="tc_logo_english_name">{CommonStr.en_title}</label>
            <label className="tc_logo_chinese_name">{CommonStr.ch_title}</label>
        </div>
    );
}

function __getSubItem(obj) {
    if (obj.sub) {
        const items = [];
        obj.sub.forEach((o) => {
            items.push(<li className="tc_tb_meun_dropdown_label w20_1_ch">{o.str}</li>);
        });
        return (
            <ul className="tc_tb_drop_down_content">
                {items}
            </ul>
        );
    }
}

function __getToolbarItems(obj) {
    const items = [];
    obj.forEach((o) => {
        items.push(
            <li className={(o.sub ? "tc_tb_meun_addition " : "") + "tc_tb_meun_label w20_1_ch"}>
                {o.str}
                {__getSubItem(o)}
            </li>
        );
    });
    return (
        <ul className="tc_toolbar_meun">
            {items}
        </ul>
    );
}

export function renderToolBar() {
    return (
        <div className="tc_tool_bar">
            <div className="tc_line"></div>
            {__getToolbarItems(ToolbarStr)}
            <div className="tc_line"></div>
        </div>
    );
}

export function renderSearchBar() {
    return (
        <div className="tc_search">
            <button className="tc_btn" type="summit"></button>
            <input className="tc_input_frame" placeholder={CommonStr.placeholder_serarch}></input>
        </div>
    );
}