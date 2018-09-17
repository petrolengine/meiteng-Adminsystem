
class RequestHandler {
    static EState = Object.freeze({ None: 0, Progress: 1 });

    constructor() {
        this.xhttp = new XMLHttpRequest();
        this.xhttp.onabort = (event: ProgressEvent) => RequestHandler.instance.__on_abort(event);
        this.xhttp.onerror = (event: ProgressEvent) => RequestHandler.instance.__on_error(event);
        this.xhttp.onload = (event: ProgressEvent) => RequestHandler.instance.__on_load(event);
        this.xhttp.onloadend = (event: ProgressEvent) => RequestHandler.instance.__on_loadend(event);
        this.xhttp.onloadstart = (event: ProgressEvent) => RequestHandler.instance.__on_loadstart(event);
        this.xhttp.onprogress = (event: ProgressEvent) => RequestHandler.instance.__on_progress(event);
        this.xhttp.onreadystatechange = (event: ProgressEvent) => RequestHandler.instance.__on_readystatechange(event);
        this.xhttp.ontimeout = (event: ProgressEvent) => RequestHandler.instance.__on_timeout(event);
        this.state = RequestHandler.EState.None;
        this.xhttp.timeout = 3000;
        this.handler = null;
    }

    static get instance() {
        if (!RequestHandler.__instance) {
            RequestHandler.__instance = new RequestHandler();
        }
        return RequestHandler.__instance;
    }

    send_message(url: string, data: string, handler: any) {
        if (this.state !== RequestHandler.EState.None) {
            console.error("send_message error.");
            return false;
        }
        this.state = RequestHandler.EState.Progress;
        this.handler = handler;
        this.xhttp.open("POST", "http://127.0.0.1:3001" + url, true);
        const auth = window.localStorage.getItem("Authorization");
        if (auth) {
            this.xhttp.setRequestHeader("Authorization", auth);
        }
        this.xhttp.send(data);
    }

    __on_abort(event: ProgressEvent) {
        this.state = RequestHandler.EState.None;
        // console.log(event);
    }

    __on_error(event: ProgressEvent) {
        this.state = RequestHandler.EState.None;
        // console.error(event.type);
    }

    __on_load(event: ProgressEvent) {
        // console.log(event.type);
    }

    __on_loadend(event: ProgressEvent) {
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

    __on_loadstart(event: ProgressEvent) {
        // console.log(event.type);
    }

    __on_progress(event: ProgressEvent) {
        // console.log(event.type, event.total, event.loaded);
    }

    __on_readystatechange(event: ProgressEvent) {
        // console.log(event.type, document.readyState);
    }

    __on_timeout(event: ProgressEventc) {
        this.state = RequestHandler.EState.None;
        // console.log(event.type);
    }
}

export default RequestHandler;