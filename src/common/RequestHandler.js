
class RequestHandler {
    static EState = Object.freeze({ None: 0, Progress: 1 });

    constructor() {
        this.xhttp = new XMLHttpRequest();
        this.xhttp.onabort = this.__on_abort.bind(this);
        this.xhttp.onerror = this.__on_error.bind(this);
        this.xhttp.onload = this.__on_load.bind(this);
        this.xhttp.onloadend = this.__on_loadend.bind(this);
        this.xhttp.onloadstart = this.__on_loadstart.bind(this);
        this.xhttp.onprogress = this.__on_progress.bind(this);
        this.xhttp.onreadystatechange = this.__on_readystatechange.bind(this);
        this.xhttp.ontimeout = this.__on_timeout.bind(this);
        this.state = RequestHandler.EState.None;
        this.xhttp.timeout = 3000;
        this.handler = null;
        this.jwt = null;
    }

    /**
     * @returns {RequestHandler}
     */
    static get instance() {
        if (!RequestHandler.__instance) {
            RequestHandler.__instance = new RequestHandler();
        }
        return RequestHandler.__instance;
    }

    /**
     * Send message, auto add prefix
     * @param {string} url short url
     * @param {string | object} data post data
     * @param {any} handler callback target
     * @returns {undefined}
     */
    send_message(url, data, handler) {
        if (this.state !== RequestHandler.EState.None) {
            console.error("send_message error.");
            return false;
        }
        this.state = RequestHandler.EState.Progress;
        this.handler = handler;
        this.xhttp.open("POST", process.env.REACT_APP_URL_PREFIX + url, true);
        if (this.jwt) {
            this.xhttp.setRequestHeader("Authorization", this.jwt);
        }
        if (typeof (data) === 'object') {
            this.xhttp.setRequestHeader("Content-Type", "application/json");
            this.xhttp.send(JSON.stringify(data));
        } else if (typeof (data) === "string") {
            this.xhttp.send(data);
        }
        return true;
    }

    /**
     * Send message, use url direct
     * @param {string} url short url
     * @param {string | object} data post data
     * @param {any} handler callback target
     * @returns {undefined}
     */
    send_message2(url, data, handler) {
        if (this.state !== RequestHandler.EState.None) {
            console.error("send_message error.");
            return false;
        }
        this.state = RequestHandler.EState.Progress;
        this.handler = handler;
        this.xhttp.open("POST", url, true);
        if (this.jwt) {
            this.xhttp.setRequestHeader("Authorization", this.jwt);
        }
        if (typeof (data) === 'object') {
            this.xhttp.setRequestHeader("Content-Type", "application/json");
            this.xhttp.send(JSON.stringify(data));
        } else if (typeof (data) === "string") {
            this.xhttp.send(data);
        }
        return true;
    }

    /**
     * @param {string} data
     * @returns {undefined}
     */
    setJWT(data) {
        this.jwt = data;
    }

    /**
     * @param {ProgressEvent} event 
     * @returns {undefined}
     * @private
     */
    __on_abort(event) {
        this.state = RequestHandler.EState.None;
        // console.log(event);
    }

    /**
     * @param {ProgressEvent} event 
     * @returns {undefined}
     * @private
     */
    __on_error(event) {
        this.state = RequestHandler.EState.None;
        // console.error(event.type);
    }

    /**
     * @param {ProgressEvent} event 
     * @returns {undefined}
     * @private
     */
    __on_load(event) {
        // console.log(event.type);
    }

    /**
     * @param {ProgressEvent} event 
     * @returns {undefined}
     * @private
     */
    __on_loadend(event) {
        this.state = RequestHandler.EState.None;
        if (this.handler && this.handler.on_loadend) {
            if (this.xhttp.status === 200) {
                this.handler.on_loadend(JSON.parse(this.xhttp.response));
            } else {
                try {
                    const jdata = JSON.parse(this.xhttp.response);
                    this.handler.on_error(this.xhttp.status, jdata);
                } catch (e) {
                    alert(this.xhttp.response);
                }
            }
        }
    }

    /**
     * @param {ProgressEvent} event 
     * @returns {undefined}
     * @private
     */
    __on_loadstart(event) {
        // console.log(event.type);
    }

    /**
     * @param {ProgressEvent} event 
     * @returns {undefined}
     * @private
     */
    __on_progress(event) {
        // console.log(event.type, event.total, event.loaded);
    }

    /**
     * @param {ProgressEvent} event 
     * @returns {undefined}
     * @private
     */
    __on_readystatechange(event) {
        // console.log(event.type, document.readyState);
    }

    /**
     * @param {ProgressEvent} event 
     * @returns {undefined}
     * @private
     */
    __on_timeout(event) {
        this.state = RequestHandler.EState.None;
        // console.log(event.type);
    }
}

export default RequestHandler;