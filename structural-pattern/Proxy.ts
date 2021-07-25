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
 *
 * -> Proxy wrap object to provide auth access to object
 */

interface IRemote {
  turnOn(): void;
  turnOff(): void;
}

class RemoteProxy implements IRemote {
  turnOn(): void {
    console.log("Turn on the light");
  }
  turnOff(): void {
    console.log("turn off the light");
  }
}

/**
 * Lazy for virtual proxy
 *
 */

class LazyRemoteProxy implements IRemote {
  private remote: RemoteProxy;
  turnOn(): void {
    console.log("Wrappe " + this.remote);
    if (this.remote == null || this.remote == undefined) {
      this.remote = new RemoteProxy();
    }
    this.remote.turnOn();
  }
  turnOff(): void {
    console.log("Wrappe " + this.remote);
    if (!this.remote) {
      this.remote = new RemoteProxy();
    }
    this.remote.turnOff();
  }
}

const remoteProxy: IRemote = new LazyRemoteProxy();
remoteProxy.turnOn();
remoteProxy.turnOff();
