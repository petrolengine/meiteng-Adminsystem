import React from 'react';
import CommonStr from '../resources/strings/common';
import '../resources/css/SearchPage.css';

class SearchPage {
    get render() {
        return (
            <div className="b searchpage_background">
                <div className="searchpage_logo_frame" style={{ textAlign: "center", backgroundColor: "rgb(3, 19, 36,0.9)", position: "inherit" }}>
                    <div className="searchpage_form_frame">
                        <input className="searchpage_search_content" placeholder={CommonStr.placeholder_serarch}></input>
                        <button className="searchpage_btn_search"></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;