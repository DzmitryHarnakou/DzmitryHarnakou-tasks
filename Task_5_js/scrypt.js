var getUrl = "http://api.icndb.com/jokes/15";
var postUrl = "https://jsonplaceholder.typicode.com/posts";
var putUrl = "https://jsonplaceholder.typicode.com/posts/1";
var deleteUrl = "https://jsonplaceholder.typicode.com/posts/1";
var payload = {
    foo: "bar"
};

class axiosDmitry {
    static getRequest(url) {
        var that = this;
        return new Promise((resolve, reject) => {
            that.requestHandler(url, 'GET').then(responce => resolve(JSON.parse(responce))).catch(err => reject(err));
        });
    }

    static postRequest(url, payload) {
        var that = this;
        var stringPayload = JSON.stringify(payload);
        return new Promise((resolve, reject) => {
            that.requestHandler(url, 'POST', stringPayload).then(responce => {
                var obj = JSON.parse(responce);
                resolve(obj);
            }).catch(err => reject(err));
        });
    }

    static putRequest(url, payload) {
        var that = this;
        var stringPayload = JSON.stringify(payload);
        return new Promise((resolve, reject) => {
            that.requestHandler(url, 'PUT', stringPayload).then(responce => resolve(responce)).catch(err => reject(err));
        });
    }

    static deleteRequest(url) {
        var that = this;
        return new Promise((resolve, reject) => {
            that.requestHandler(url, 'DELETE').then(responce => resolve(responce)).catch(err => reject(err));
        });
    }

    static requestHandler(url, method, payload) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);

            xhr.onload = function () {
                if (this.status === 200 || this.status === 201) {
                    resolve(this.response);
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };

            xhr.onerror = function () {
                reject(new Error("Network Error"));
            }

            if (payload) {
                xhr.send(payload);
            } else {
                xhr.send();
            }
        });
    }
}

axiosDmitry.getRequest(getUrl).then(resp => console.log(resp)).catch(err => console.log(err));
axiosDmitry.postRequest(postUrl, payload).then(resp => console.log(resp)).catch(err => console.log(err));
axiosDmitry.putRequest(putUrl, payload).then(resp => console.log(resp)).catch(err => console.log(err));
axiosDmitry.deleteRequest(deleteUrl).then(resp => console.log(resp)).catch(err => console.log(err));