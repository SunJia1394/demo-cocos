import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('bubble')
export class bubble extends Component {
    @property({ type: Prefab })
    bubblePrefab: Prefab = null; // 定义bubble prefab

    @property({ type: Node })
    chatContainer: Node = null; //定义用于容纳chat bubble的节点

    private chatMessages: string[] = ['喜欢', '谢谢']; // 定义你的聊天内容list

    start() {
        this.displayChat();
    }

    displayChat() {
        for (const message of this.chatMessages) {
            let bubble = instantiate(this.bubblePrefab); //将bubble Prefab实例化为新节点
            let label = bubble.getChildByName("SpriteSplash").getChildByName("Label").getComponent(Label); // 获取Label组件
            label.string = message; // 将聊天内容设置为Label的内容

            bubble.parent = this.chatContainer; //将生成的bubble添加到chatContainer节点下
        }
    }

    update(deltaTime: number) {
        
    }
}

