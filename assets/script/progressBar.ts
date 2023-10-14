import { _decorator, Component, ProgressBarComponent } from 'cc';
const { ccclass, property } = _decorator;
import EventBus from './EventBus';

@ccclass('progressBar')
export class ProgressBar extends Component {

    @property({ type: ProgressBarComponent })
    progressBar: ProgressBarComponent = null;
    @property({ type: ProgressBarComponent })
    FootComponent: ProgressBarComponent = null;

    start() {

        EventBus.on('objectClicked', this.handleObjectClicked, this);
        EventBus.on('foodClicked', this.handleFoodClicked, this);
    }

    handleObjectClicked(event: any) {
        console.log("progress")
        // 增加进度条的值
        if (this.progressBar) {
            this.progressBar.progress += 0.1;
            console.log(this.progressBar.progress);
            
            if (this.progressBar.progress > 1) {
                this.progressBar.progress = 1;
            }
        }
    }

    handleFoodClicked(event: any) {
        console.log("progress")
        // 增加进度条的值
        if (this.FootComponent) {
            this.FootComponent.progress += 0.1;
            console.log(this.FootComponent.progress);
            
            if (this.FootComponent.progress > 1) {
                this.FootComponent.progress = 1;
            }
        }
    }

    update(deltaTime: number) {
        // 其他代码
    }
}