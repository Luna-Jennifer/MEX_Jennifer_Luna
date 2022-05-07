import React from 'react';


export class Login extends React.Component {
    constructor() {
        super();
        this.doLogin = this.doLogin.bind(this);
    }

   
    doLogin(){
        const userName = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (userName==='admin' && password==='admin1234'){
            this.props.doLogin(userName);
        } else {
            alert('Invalid Username and Password! Please Try Again.');
        }

    }

    render() {
        return (
            <div className="content">
                <div className="img">
                    <a href="#" className="logo" alt="todo" title="todo"/>
                </div>
                <div className="login type1">
                    <div className="input-wrapper">
                        <i className="icon username" />
                        <input className="textbox" type="text"  name="username" id="username" placeholder="username" />
                    </div>
                    <div className="input-wrapper">
                        <i className="icon password" />
                        <input className="textbox" type="text" name="password" id="password" placeholder="password" />
                    </div>
                </div>
                <a href="http://404.html" className="text-secondary"> Forgot Password
                    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                     Register </a>
                <div className="login-options">
                    <button type="button" className="login-btn" onClick={this.doLogin}>LOGIN</button>
                </div>
            </div>
        )
    }
}
