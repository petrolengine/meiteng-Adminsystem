import React from 'react';
import "../resources/css/common.css";
import "../resources/css/label.css";
import "../resources/css/GotoPage.css";
import AddRoomStr, { RoomDirection, RoomDecorate, RoomRentType } from '../resources/strings/add_room';
import CommonStr, { RoomRentState, RoomSaleState } from '../resources/strings/common';

export function getReadableTime(src) {
    const date = new Date(src);
    return date.toLocaleDateString("zh");
}

export function getDiffDays(src) {
    const now = new Date();
    const last = new Date(src);
    return parseInt((now - last) / (1000 * 60 * 60 * 24), 10);
}

/**
 * Convert formData to json object
 * @param formData source formData
 * @returns {object} json object
 */
export function formData2Json(formData) {
    const object = {};
    formData.forEach((value, key) => {
        if (value.length > 0) {
            object[key] = value;
            if (value === "on")
                object[key] = true;
        } else if (key.length > 0) {
            object[key] = false;
        }
    });
    return object;
}

function onPageClicked(obj, page) {
    obj.info.curPage = page;
    obj.get_data_from_server(obj.url1);
}

/**
 * Render pages
 * @param {*} obj target object
 */
export function renderPage(obj) {
    const current = obj.info.curPage;
    if (obj.info.totalPage > 1) {
        const items = [];
        items.push(
            <button className="goto_page_arrow_left in_top noborder goto_page_size"
                disabled={current === 0}
                onClick={() => onPageClicked(obj, current - 1)}
                key={`page_left`}>
            </button>
        );
        for (let idx = 0; idx < obj.info.totalPage; idx++) {
            items.push(
                <button className="goto_page_size in_top b15_1_ch noborder m_l_2"
                    style={idx === current ? { backgroundColor: "rgb(236, 125, 65)" } : { backgroundColor: "#eeeeee" }}
                    onClick={() => onPageClicked(obj, idx)}
                    key={`page_${idx}`} disabled={idx === current}>
                    {idx + 1}
                </button>
            );
        }
        items.push(
            <button className="goto_page_arrow_right in_top noborder m_l_2 goto_page_size"
                key={`page_right`}
                onClick={() => onPageClicked(obj, current + 1)}
                disabled={current + 1 === obj.info.totalPage}
            />
        );
        return (
            <div className="goto_page b">
                {items}
            </div>
        );
    }
}

/**
 * Render add page common item, key: value(text input)
 * @param {string} name name key
 * @param {string} key key
 * @param {string} value place holder
 */
export function renderAddPageCommonItem(name, key, value) {
    return (
        <div className="b add_page_common_item">
            <label className="add_page_common_key w15_2_ch in_top" htmlFor={name}>{key}</label>
            <input
                className="add_page_common_value in_top noborder b15_1_ch"
                name={name}
                id={name}
                placeholder={value}
            />
        </div>
    );
}

function updateInfo(obj) {
    const temp = {};
    temp[obj.updateKey] = obj.info;
    obj.context.setState(temp);
}

export function onList1(obj, data) {
    if (obj.info.data.length !== data.length || data.length > 0) {
        obj.info.data = data.data;
        updateInfo(obj);
    }
}

export function onList2(obj, data) {
    obj.info.data = data.data.data;
    obj.info.totalPage = Math.ceil(data.data.total / obj.prePage);
    updateInfo(obj);
}

export function commonSubInput(title, def, name, type) {
    return (
        <div className="in_middle">
            <input
                className="in_middle b15_1_ch add_room_small_value noborder"
                type={type} name={name} min="0"
                defaultValue={def}
                id={name}
            />
            <label className="in_middle w15_2_ch add_room_small_key" htmlFor={name}>{title}</label>
        </div>
    );
}

export function getHuxing(item) {
    return `${item.bedroom}${AddRoomStr.bedroom}${item.livingroom}${AddRoomStr.livingroom}${item.toliet}${AddRoomStr.toliet}`;
}

export function getMianji(item) {
    return `${item.room_area}${AddRoomStr.pingmi}`;
}

export function getLouCen(item) {
    return `${item.floor}${CommonStr.lou}`;
}

export function getDirection(item) {
    return RoomDirection[item.direction];
}

export function getDecorate(item) {
    return RoomDecorate[item.decorate];
}

export function getRoomState(bsale, item) {
    return bsale ? RoomSaleState[item.state] : RoomRentState[item.state];
}

export function getReadablePrice(src) {
    return src > 10000 ? `${src / 10000}${CommonStr.w}` : src
}

export function getRentType(src) {
    return src ? RoomRentType.TOTAL : RoomRentType.SHARING;
}