import React from 'react';

export class Header extends React.Component {

    constructor() {
        super()
    }

    render() {
        
        const loginData = this.props.loginData();
        let layout = (
            <div className="member-info">
                <div className="name">Welcome, {loginData.userName}!</div>
            </div>
        );
        return (
            <div>
                {layout}
                <div className="img">
                    <a href="#" className="logo" alt="todo" title="todo"/>
                </div>
            </div>
        )
    }
}
