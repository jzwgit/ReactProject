import React,{ Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user);
  }
  render() {
    return(
      <div className="Todo">
	<h2>我是首页</h2>
	<a href="/login">登录</a>
	<a href="/register">注册</a>
      </div>
    );
  }
}

export default Todo;
