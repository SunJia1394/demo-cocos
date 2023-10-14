import { _decorator, Component, Input, input, EventTouch, geometry, PhysicsSystem, Camera, Node, MeshCollider, Animation, Label } from 'cc';
const { ccclass, property } = _decorator;
import EventBus from './EventBus';
import { sendData } from './tell';



@ccclass('body')
export class body extends Component {
    @property({ type: Camera })
    mainCamera: Camera | null = null;
    @property(Label)
    labelNode: Label | null = null;
    private anim: Animation | null = null;

    start() {
        this.anim = this.node.parent?.parent?.getComponent(Animation);
        if (this.anim) {
            this.anim.on(Animation.EventType.LASTFRAME, () => {
                console.log("00_idle");
                this.anim!.play("00_idle");
            }, this);


            // 注册鼠标点击事件
            input.on(Input.EventType.TOUCH_END, this.onMouseUp, this);
        }
    }

    onMouseUp(event: EventTouch) {
        console.log("click")
        if (!this.mainCamera) return; 
        const ray = new geometry.Ray();
        this.mainCamera.screenPointToRay(event.getLocationX(), event.getLocationY(), ray);

        if (PhysicsSystem.instance.raycast(ray)) {
            const results = PhysicsSystem.instance.raycastResults;
            for (let i = 0; i < results.length; i++) {
                const result = results[i];
                if (result.collider.node === this.node) { 
                    console.log("Hit the collider!");
                    if (this.anim) this.anim.play("03");
                    sendData(this.labelNode.string);
                    EventBus.emit('objectClicked', { detail: { data: "你可以传递任意类型的数据" } });
                    break;
                }
            }
        }
    }

    onDestroy() {
        input.off(Input.EventType.TOUCH_END, this.onMouseUp, this);
        if (this.anim) {
            this.anim.off(Animation.EventType.LASTFRAME);
            this.node.off(Node.EventType.TOUCH_END);
        }
    }

    update(deltaTime: number) { }
}