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

export function renderPage(total, current) {
    const items = [];
    items.push(<button className="goto_page_arrow_left in_top noborder goto_page_size" disabled={current === 0}></button>);
    for (let idx = 0; idx < total; idx++) {
        if (idx === current) {
            items.push(<button className="goto_page_size in_top b15_1_ch noborder m_l_2" style={{ backgroundColor: "rgb(236, 125, 65)" }} disabled>{idx + 1}</button>);
        } else {
            items.push(<button className="goto_page_size in_top b15_1_ch noborder m_l_2" style={{ backgroundColor: "#eeeeee" }}>{idx + 1}</button>);
        }
    }
    items.push(<button className="goto_page_arrow_right in_top noborder m_l_2 goto_page_size" disabled={current + 1 === total}></button>);
    return (
        <div className="goto_page b">
            {items}
        </div>
    );
}