import { _decorator, Component, Node, EventMouse, NodeEventType, Label } from "cc";
const { ccclass, property } = _decorator;
import axios from "./axios/axios.min.js";
import EventBus from "./EventBus";
import { CancelTokenSource } from "./axios/axios.js";

@ccclass("think")
export class tell extends Component {
  @property(Label)
  labelNode: Label | null = null;
  

  private controller;
  private cancelTokenSource: CancelTokenSource | null = null;

  start() {
    this.node.active = false
    // this.listen();
  }

  // https://aisoul.juramaia.com/listenMessages 猫咪对主人说的话
  // https://aisoul.juramaia.com/listenThoughts  猫咪的内心独白
  async listen() {
    const url = "https://aisoul.juramaia.com/listenThoughts";

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

        const data = decoder.decode(value);

        let parts = data.split(":"); 

        if(data){
            this.node.active = true;
            this.labelNode.string = parts[1];
        }

       
        // 假设服务器以文本流形式返回消息
        console.log(parts[1]);
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

  onDestroy() {
    if (this.controller) {
      this.controller.abort(); // 在这里停止 fetch 请求
    }
  }
}
