/**
 * FEATURE PROXY
 * Proxy controls access to the original object
 * allowing you to perform something either before or after the request gets
 * through to the original object.
 * 1. remote proxy
 *      Ex: navigate access to port resource
 * 2. protect proxy
 *      Ex: auth to access to resource
 * 3. virtual proxy
 *      Ex: one resource that is large, proxy will access lazy to resource
 */
var RemoteProxy = /** @class */ (function () {
    function RemoteProxy() {
    }
    RemoteProxy.prototype.turnOn = function () {
        console.log("Turn on the light");
    };
    RemoteProxy.prototype.turnOff = function () {
        console.log("turn off the light");
    };
    return RemoteProxy;
}());
/**
 * Lazy for virtual proxy
 *
 */
var LazyRemoteProxy = /** @class */ (function () {
    function LazyRemoteProxy() {
    }
    LazyRemoteProxy.prototype.turnOn = function () {
        console.log('Wrappe ' + this.remote);
        if (this.remote == null || this.remote == undefined) {
            this.remote = new RemoteProxy();
        }
        this.remote.turnOn();
    };
    LazyRemoteProxy.prototype.turnOff = function () {
        console.log('Wrappe ' + this.remote);
        if (!this.remote) {
            this.remote = new RemoteProxy();
        }
        this.remote.turnOff();
    };
    return LazyRemoteProxy;
}());
var remoteProxy = new LazyRemoteProxy();
remoteProxy.turnOn();
remoteProxy.turnOff();
