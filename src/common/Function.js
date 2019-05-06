import React from 'react';
import "../resources/css/common.css";
import "../resources/css/label.css";
import "../resources/css/GotoPage.css";


export function getReadableTime(src) {
    const date = new Date(src);
    return date.toLocaleDateString("zh");
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
        }
    });
    return object;
}

function onPageClicked(obj, page) {
    obj.info.curPage = page;
    obj.get_data_from_server(obj.url1);
}

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
                disabled={current + 1 === obj.info.totalPage}>
            </button>
        );
        return (
            <div className="goto_page b">
                {items}
            </div>
        );
    }
}

export function renderAddPageCommonItem(name, key, value) {
    return (
        <div className="b add_page_common_item">
            <label className="add_page_common_key w15_2_ch in_top" htmlFor={name}>{key}</label>
            <input className="add_page_common_value in_top noborder" name={name} placeholder={value}></input>
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