import {
  _decorator,
  Component,
  Node,
  NodeEventType,
  SystemEventType,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("navToActivity")
export class navToActivity extends Component {
  start() {
    // 给节点添加点击事件监听器
    this.node.on(NodeEventType.TOUCH_END, this.navigateToActivity, this);
  }

  // 点击事件处理器
  navigateToActivity() {
    console.log("activity");
    // 使用微信小程序API判断是否在微信环境中
    try {
      wx.miniProgram.navigateTo({ url: "/pages/logs/logs" });
    } catch (error) {
      window.alert(error);
    }
    // 使用微信小程序的 API 进行页面跳转
  }

  onDestroy() {
    // 记得在组件销毁时移除事件监听
    this.node.off(NodeEventType.TOUCH_END, this.navigateToActivity, this);
  }

  update(deltaTime: number) {
    // ...
  }
}
