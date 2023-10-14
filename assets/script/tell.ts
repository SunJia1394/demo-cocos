import { _decorator, Component, Node, EventMouse, NodeEventType } from "cc";
const { ccclass, property } = _decorator;
import axios from "./axios/axios.min.js";
import EventBus from "./EventBus";
import { CancelTokenSource } from "./axios/axios.js";

@ccclass("tell")
export class tell extends Component {
  private controller;
  private cancelTokenSource: CancelTokenSource | null = null;

  start() {
    this.listen();
    // 注册点击事件
    this.node.on(NodeEventType.TOUCH_END, this.handleClick, this);
  }

  // https://aisoul.juramaia.com/listenMessages 猫咪对主人说的话
  // https://aisoul.juramaia.com/listenThoughts  猫咪的内心独白
  async listen() {
    const url = "https://aisoul.juramaia.com/listenMessages";

    // 创建一个 AbortController 实例
    this.controller = new AbortController();
    const { signal } = this.controller;

    try {
      const response = await fetch(url, { signal }); // 在请求选项中传递 signal

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          console.log("Stream complete");
          break;
        }

        // 假设服务器以文本流形式返回消息
        console.log(decoder.decode(value));
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("An error occurred:", error);
        if (!this.node.isValid) {
          return;
        }
        this.listen();
      }
    }
  }

  // 发送数据流请求

  handleClick(event: EventMouse) {
    console.log("event");

    const url = " https://aisoul.juramaia.com/tell";
    const data = { message: "牛奶" };

    axios
      .post(url, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    EventBus.emit("foodClicked", {
      detail: { data: "你可以传递任意类型的数据" },
    });
  }

  onDestroy() {
    if (this.controller) {
      this.controller.abort(); // 在这里停止 fetch 请求
    }
    // 记得在组件销毁时移除事件监听
    this.node.off(NodeEventType.MOUSE_DOWN, this.handleClick, this);
  }
}
