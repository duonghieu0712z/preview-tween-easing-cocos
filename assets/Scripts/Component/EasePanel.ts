import { _decorator, Component, instantiate, Prefab, TweenEasing } from "cc";
const { ccclass, property } = _decorator;

import { EaseButton } from "./EaseButton";

import EventCode from "../Common/EventCode";
import EventMgr from "../Common/EventMgr";

@ccclass("EasePanel")
export class EasePanel extends Component {
    @property(Prefab)
    private easePrefab: Prefab = null;

    protected onLoad(): void {
        this.node.active = false;

        this.initEvents();
    }

    protected onDestroy(): void {
        EventMgr.removeEvents(this);
    }

    initEvents() {
        EventMgr.registerEvent(
            EventCode.EASE.ACTIVE_EASING,
            this.activeEasing,
            this,
        );
        EventMgr.registerEvent(
            EventCode.EASE.LOAD_EASINGS,
            this.loadEasings,
            this,
        );
    }

    activeEasing(active: boolean) {
        this.node.active = active;
    }

    loadEasings(easings: TweenEasing[]) {
        this.removeChildren();
        easings.forEach((easing) => {
            this.createEaseButton(easing);
        });
    }

    createEaseButton(easing: TweenEasing) {
        const btn = instantiate(this.easePrefab);
        btn.parent = this.node;

        const easeBtn = btn.getComponent(EaseButton);
        easeBtn.setEasing(easing);
    }

    removeChildren() {
        this.node.children.forEach((node) => {
            node.destroy();
        });
    }
}
