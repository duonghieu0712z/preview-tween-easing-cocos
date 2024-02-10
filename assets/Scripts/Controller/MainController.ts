import { _decorator, Component, JsonAsset } from "cc";
const { ccclass, property } = _decorator;

import EventCode from "../Common/EventCode";
import EventMgr from "../Common/EventMgr";

@ccclass("MainController")
export class MainController extends Component {
    @property(JsonAsset)
    private easeConfig: JsonAsset = null;

    protected start(): void {
        EventMgr.emit(EventCode.TRANSITION.LOAD_JSON, this.easeConfig.json);
        EventMgr.emit(EventCode.TRANSITION.LOAD_TRANSITIONS);
    }
}
