import React from "react";

const Email = ()=>{
    return(
        <div>
            <div className="form-input">
                    <p className="register-country-label">Email Address</p>
                    <input type="text"  id="login-with-email-input" name="register_email"/>
                    <span id="email-error" style={{}}> <svg className="icon-facebook" >
                    <use  xlinkHref="#svg-socio-alert"></use>
                    </svg>Invalid Email</span> 
            </div>
        </div>
    )
};

export default Email;