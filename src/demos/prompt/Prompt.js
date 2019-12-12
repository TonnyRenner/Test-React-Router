import React, { PureComponent } from 'react';
import { Prompt } from 'react-router-dom';

class PromptComp extends PureComponent {
  render() {
    console.log('Prompt, this.props.history', this.props.history);
    return (
      <div>
        <h2>Prompt</h2>
        <Prompt
          // message="你确定要离开当前页面吗？"
          message={(location) => {
            // 这里的 location 对象指的是下一个位置(即用户想要跳转到的位置)
            // 只有在跳转至 about 页面前提示
            const showConfirm = location.pathname.startsWith('/about');
            return showConfirm ? `你确定要跳转到${location.pathname}吗？` : true;
          }}
          // when={true}: 显示提示 when={false}: 阻止提示
          when={true}
        />
      </div>
    );
  }
}

export default PromptComp;