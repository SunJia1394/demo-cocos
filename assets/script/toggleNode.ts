import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("toggleNode")
export class ToggleNode extends Component {

    @property({ type: Node })
    public node1: Node = null; // 可以在编辑器里把需要点击的节点拖拽进来 

    @property({ type: Node })
    public node2: Node = null; // 可以在编辑器里把需要显示/隐藏的节点拖拽进来

    start () {
        this.node2.active = false;
        // 在 node1 上注册点击事件
        this.node1.on(Node.EventType.TOUCH_END, this.handleToggleNode, this);
    }

    handleToggleNode(){
        console.log(this.node2.active)
        if(this.node2.active){
            this.node2.active=false
        }else{
            this.node2.active=true
        }
    }


    showNode(){
        this.node2.active = true;
    }

    hideNode(){
        this.node2.active = false;
    }
}
