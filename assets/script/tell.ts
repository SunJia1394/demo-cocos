import {
  _decorator,
  Component,
  Node,
  EventMouse,
  NodeEventType,
  Label,
} from "cc";
const { ccclass, property } = _decorator;
import axios from "./axios/axios.min.js";
import EventBus from "./EventBus";
import { CancelTokenSource } from "./axios/axios.js";

@ccclass("tell")
export class tell extends Component {
  @property(Label)
  labelNode: Label | null = null; // 在编辑器中链接你的 Label 节点

  start() {
    // 注册点击事件
    this.node.on(NodeEventType.TOUCH_END, this.handleClick, this);
  }

  // 发送数据流请求

  handleClick(event: EventMouse) {
    console.log(this.labelNode?.string);

    sendData( `喂食${this.labelNode?.string}`)

    EventBus.emit("foodClicked", {
      detail: { data: "你可以传递任意类型的数据" },
    });
  }

  onDestroy() {
    // 记得在组件销毁时移除事件监听
    this.node.off(NodeEventType.MOUSE_DOWN, this.handleClick, this);
  }
}

export const sendData = async (msg: string) => {
  const url = "https://aisoul.juramaia.com/tell";
  const data = { message: msg || "牛奶" };

  try {
    const response = await axios.post(url, data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
