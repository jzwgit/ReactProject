import React,{Component} from 'react';
import './register.css';
import Input from './input.js';
import Title from './title.js';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.getName = this.getName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.registing = this.registing.bind(this);
  }
  getName(value) {
    this.setState({
      name: value
    });	
  }
  getEmail(value) {
    this.setState({
      email: value
    });
  }
  getPassword(value){
    this.setState({
      password: value
    });
  }
  registing(){
    console.log(this.state);
    var url = 'http://localhost:8081/user/register';
    var data = this.state; 
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: new Headers({
	'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }
  render() {
    return(
      <div className="Register">
	<Title />
	<div className="register-body">
	  <img src='./images/todo_done.svg' alt='logo' />
	  <h1>免费注册TODO应用</h1>
	  <div className="neirong">
	    <div className="register-left">
	      <div className="register-body-form">
		<Input src="./images/name.svg" alt="名字"
		  type="text" placeholder="名字" 
		  getInputValue={this.getName} />
		<Input src="./images/email.svg" alt="电子邮件图标"
		  type="text" placeholder="电子邮件" 
		  getInputValue={this.getEmail} />
		<Input src="./images/password.svg" alt="密码图标"
		  type="password" placeholder="密码" 
		  getInputValue={this.getPassword} />
		<button className="btn" onClick={this.registing}>创建免费账户</button>
	      </div>
	      <p className="create-account">
		已经拥有账户了?<a href="/login">登录</a>
	      </p>
	      <p className="tiaokuan">
		创建帐户即表示你同意我们的 <a href="/unfinished">使用条款</a> 和 <a href="/unfinished">隐私政策</a>
	      </p>
	    </div>
	    <div className="register-right">
	      <div className="mod">
		<img src="./images/register/01.svg" alt="完成任务" />
		<div className="mod-body">
		  <h3>完成任务</h3>
		  <p>
		    无论是与你的亲朋好友共享购物清单或者是处理项目，TODO都能让你更轻松有趣地完成任务。
		  </p>
		</div>
	      </div>
	      <div className="mod">
		<img src="./images/register/02.svg" alt="完成任务" />
		<div className="mod-body">
		  <h3>随时被提醒</h3>
		  <p>
		    永远不会忘记重要的会议、期限或者是牛奶。TODO的提醒设定让你轻松记住大大小小的所有事情。
		  </p>
		</div>
	      </div>
	      <div className="mod">
		<img src="./images/register/03.svg" alt="完成任务" />
		<div className="mod-body">
		  <h3>让你的生活同步</h3>
		  <p>
		    支持 iPhone、iPad、Android、Mac、Windows、Windows Phone 和网页，TODO让你的任务在所有设备实时同步。
		  </p>
		</div>
	      </div>
	    </div>
	  </div>
	</div>
      </div>
    );	
  }
}

export default Register;
