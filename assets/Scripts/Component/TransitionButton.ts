import { _decorator, Component, Label } from "cc";
const { ccclass, property } = _decorator;

import EventCode from "../Common/EventCode";
import EventMgr from "../Common/EventMgr";

@ccclass("TransitionButton")
export class TransitionButton extends Component {
    @property(Label)
    private label: Label = null;

    private _easings: string[] = null;

    setLabel(label: string) {
        this.label.string = label;
    }

    setEasings(easings: string[]) {
        this._easings = easings;
    }

    onClick() {
        // convert event emitter to event mgr
        EventMgr.emit(EventCode.EASE.ACTIVE_EASING, true);
        EventMgr.emit(EventCode.EASE.LOAD_EASINGS, this._easings);
    }
}
