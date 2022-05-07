import React from 'react';

export default class UserLogout extends React.Component {
 
 logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  }
 
  render() {
    return (
      <div className="login-options">
                     <button type="button" className="login-btn" onClick={this.logout}>Logout</button>
                </div>
    
    )
  }
}