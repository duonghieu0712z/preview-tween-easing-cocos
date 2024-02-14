import {
    _decorator,
    Color,
    Component,
    easing,
    Graphics,
    math,
    TweenEasing,
    v2,
} from "cc";
const { ccclass, requireComponent } = _decorator;

import EventCode from "../Common/EventCode";
import EventMgr from "../Common/EventMgr";

@ccclass("Graph")
@requireComponent(Graphics)
export class Graph extends Component {
    private _graphics: Graphics = null;

    private _start = v2(-90, -60);
    private _end = v2(90, 60);

    protected onLoad(): void {
        this._graphics = this.getComponent(Graphics);
        this.initEvents();
    }

    protected onDestroy(): void {
        EventMgr.removeEvents(this);
    }

    protected initEvents(): void {
        EventMgr.registerEvent(
            EventCode.GRAPH.DRAW_COORDINATES,
            this.drawCoordinates,
            this
        );
        EventMgr.registerEvent(
            EventCode.GRAPH.DRAW_EASING,
            this.drawEasing,
            this
        );
        EventMgr.registerEvent(EventCode.GRAPH.CLEAR, this.clear, this);
    }

    drawCoordinates() {
        this._graphics.moveTo(this._start.x, this._start.y);
        this._graphics.lineTo(this._end.x, this._start.y);

        this._graphics.moveTo(this._start.x, this._start.y);
        this._graphics.lineTo(this._start.x, this._end.y);

        this._graphics.strokeColor = Color.GRAY;
        this._graphics.stroke();
    }

    drawEasing(ease: TweenEasing) {
        const func = easing[ease];

        const epsilon = 1 / 200;
        this._graphics.moveTo(this._start.x, this._start.y);
        for (let i = epsilon; i <= 1; i += epsilon) {
            i = +i.toFixed(3);
            const t = func(i);
            const x = math.lerp(this._start.x, this._end.x, i);
            const y = math.lerp(this._start.y, this._end.y, t);
            this._graphics.lineTo(x, y);
        }

        this._graphics.strokeColor = Color.WHITE;
        this._graphics.stroke();
    }

    clear() {
        this._graphics.clear();
    }
}
