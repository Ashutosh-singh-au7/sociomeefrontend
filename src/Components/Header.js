import React from "react";

const Header = ()=>{
    return(
        <div className="landing">
            <div className="landing-info">
            <div className="tab-switch"> 
                <p className="tab-switch-button login-register-form-trigger"><a href="/" >Login</a></p>
                <p className="tab-switch-button login-register-form-trigger"><a href="/register" >Register</a></p>
            </div>
            </div>
        </div>
    )
};

export default Header;