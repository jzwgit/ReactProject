import React,{Component} from 'react';
import './login.css';
import Input from './input.js';
import Title from './title.js';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
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
  render() {
    return(
      <div className="Login">
	<Title />
	<div className="login-body">
	  <img src='./images/todo_done.svg' alt='logo' />
	  <div className="login-body-form">
	    <Input src="./images/email.svg" alt="电子邮件图标"
	      type="text" placeholder="电子邮件" 
	      getInputValue={this.getEmail} />
	    <Input src="./images/password.svg" alt="密码图标"
	      type="password" placeholder="密码" 
	      getInputValue={this.getPassword} />
	    <button className="btn">登录</button>
	    <a href="/unfinished" className="forgetPass">忘记密码？</a>
	  </div>
	  <p className="create-account">
	    还没有账户?<a href="/register">创建账户</a>
	  </p>
	</div>
      </div>
    );	
  }
}

export default Login;
