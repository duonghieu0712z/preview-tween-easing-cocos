import { _decorator, Component, instantiate, Prefab } from "cc";
const { ccclass, property } = _decorator;

import { TransitionButton } from "./TransitionButton";

import EventCode from "../Common/EventCode";
import EventMgr from "../Common/EventMgr";

@ccclass("TransitionPanel")
export class TransitionPanel extends Component {
    @property(Prefab)
    private transitionPrefab: Prefab = null;

    private _trasitions: any[] = null;

    protected onLoad(): void {
        this.initEvents();
    }

    protected onDestroy(): void {
        EventMgr.removeEvents(this);
    }

    initEvents() {
        EventMgr.registerEvent(
            EventCode.TRANSITION.LOAD_JSON,
            this.loadJson,
            this,
        );
        EventMgr.registerEvent(
            EventCode.TRANSITION.LOAD_TRANSITIONS,
            this.loadTransitions,
            this,
        );
    }

    loadJson(json: any) {
        this._trasitions = json;
    }

    loadTransitions() {
        this._trasitions.forEach((transition) => {
            this.createTransitionButton(transition);
        });
    }

    createTransitionButton(transition: any) {
        const btn = instantiate(this.transitionPrefab);
        btn.parent = this.node;

        const transitionBtn = btn.getComponent(TransitionButton);
        transitionBtn.setLabel(transition.name);
        transitionBtn.setEasings(transition.easings);
    }
}
