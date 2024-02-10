import { _decorator, Component, log, ProgressBar, Slider } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Timeline")
export class Timeline extends Component {
    @property(ProgressBar)
    private progressBar: ProgressBar = null;

    updateProgress(slider: Slider) {
        this.progressBar.progress = slider.progress;
    }
}
