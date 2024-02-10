import { EventTarget } from "cc";

export default class EventMgr extends EventTarget {
    private static _instance: EventMgr = null;

    private constructor() {
        super();
    }

    public static get instance() {
        return (this._instance ??= new EventMgr());
    }

    static emit(event: string, ...args: any[]) {
        this.instance.emit(event, ...args);
    }

    static registerEvent(
        event: string,
        callback: (...args: any[]) => void,
        thisArg?: any,
    ) {
        this.instance.on(event, callback, thisArg);
    }

    static registerOnce(
        event: string,
        callback: (...args: any[]) => void,
        thisArg?: any,
    ) {
        this.instance.once(event, callback, thisArg);
    }

    static removeEvent(
        event: string,
        callback?: (...args: any[]) => void,
        thisArg?: any,
        test?: Function,
    ) {
        this.instance.off(event, callback, thisArg);
    }

    static removeEvents(eventOrThisArg: string | any) {
        this.instance.removeAll(eventOrThisArg);
    }

    static destroy() {
        this._instance = null;
    }
}
