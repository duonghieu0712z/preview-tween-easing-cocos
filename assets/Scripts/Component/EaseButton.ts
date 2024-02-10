import { _decorator, Component, Label, TweenEasing } from "cc";
const { ccclass, property } = _decorator;

import EventCode from "../Common/EventCode";
import EventMgr from "../Common/EventMgr";

@ccclass("EaseButton")
export class EaseButton extends Component {
    @property(Label)
    private label: Label = null;

    private _easing: TweenEasing;

    protected onLoad(): void {
        this.initEvents();
    }

    protected onDestroy(): void {
        EventMgr.removeEvents(this);
    }

    initEvents() {
        EventMgr.registerEvent(EventCode.EASE.SET_EASING, this.setEasing, this);
    }

    setEasing(easing: TweenEasing) {
        this.label.string = easing;
        this._easing = easing;
    }

    onClick() {
        EventMgr.emit(EventCode.BALL.RESET);
        EventMgr.emit(EventCode.BALL.EASE, this._easing);
    }
}
