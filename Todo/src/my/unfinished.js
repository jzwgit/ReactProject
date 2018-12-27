import React,{Component} from 'react';

class UnFinished extends Component {
  render() {
    return( 
      <div className="unfinished">
	<h3>作者精力有限，这里暂时没做，去看看其他的页面吧~</h3>
	<a href="/login">去登录 </a>|
	<a href="/register"> 去注册</a>
      </div>
    );
  }
}

export default UnFinished;
