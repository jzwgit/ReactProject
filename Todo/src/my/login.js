import React,{Component} from 'react';
import './login.css';
import Input from './input.js';
import Title from './title.js';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.logining = this.logining.bind(this);
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
  logining(){
    const url = 'http://localhost:8081/user/login';
    let data = this.state; 
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: new Headers({
	'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
	if(response != null){
	  window.location.href="./todo";
	  return console.log('Success:login');
	}
	return alert("登录信息有误");
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
	    <button className="btn" onClick={this.logining}>登录</button>
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
