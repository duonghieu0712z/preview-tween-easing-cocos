import {
    _decorator,
    CCFloat,
    Component,
    log,
    math,
    Tween,
    tween,
    TweenEasing,
    UITransform,
    Vec3,
} from "cc";
const { ccclass, property } = _decorator;

import EventCode from "../Common/EventCode";
import EventMgr from "../Common/EventMgr";

@ccclass("Ball")
export class Ball extends Component {
    @property(CCFloat)
    private duration = 0;

    @property(Vec3)
    private target: Vec3 = null;

    private _startPos: Vec3;
    private _radius: number;

    protected onLoad(): void {
        this.initEvents();
    }

    protected start(): void {
        this._startPos = this.node.getPosition();
        this._radius = this.node.getComponent(UITransform).width / 2;
    }

    protected onDestroy(): void {
        EventMgr.removeEvents(this);
    }

    initEvents() {
        EventMgr.registerEvent(EventCode.BALL.EASE, this.onEase, this);
        EventMgr.registerEvent(EventCode.BALL.RESET, this.onReset, this);
    }

    onEase(easing: TweenEasing) {
        const target = this.target.clone();
        const distance = target.subtract(this._startPos).length();
        const angle = -math.toDegree(distance / this._radius);
        const action = tween(this.node)
            .to(
                this.duration,
                {
                    position: this.target,
                    angle,
                },
                {
                    easing,
                    onUpdate: (target: Node, ratio) => {
                        log(ratio);
                    },
                },
            )
            .start();
    }

    onReset() {
        Tween.stopAllByTarget(this.node);
        this.node.position = this._startPos;
        this.node.angle = 0;
    }
}
