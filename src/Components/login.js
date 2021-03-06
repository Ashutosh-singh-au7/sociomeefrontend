import React,{useState} from "react";
import "../css/raw/styles.css";
import "../css/raw/indexcustom.css"
import Email from "./Email";

const Login = ()=>{

  const[mobile,setMobile]= useState("");
  const[password,setPassword] = useState("");

  const onChangeMobile=(e)=>{
    const mobile = e.target.value;
    setMobile(mobile);
  }

  const onChangePassword = (e)=>{
    const password = e.target.value;
    setPassword(password);
  }

  const HandleLogin=(e)=>{
    e.preventDefault();
  }

    return(
        <div classNameNameName="landing">
            <div classNameName="landing-decoration"></div>
            <div className="landing-info"> 
            <div className="logo"> <img src="./css/logo.png" alt="" /> </div>
            <div classNameName="logo"> <img src="../css/raw/logo.png" alt="" /> </div>
                {/* <h2 classNameName="landing-info-pretitle">Welcome to</h2>
        
                    <h1 classNameName="landing-info-title">SocioMee</h1>
     
                        <p classNameName="landing-info-text">The next generation social network &amp; community! Connect with your friends and play with our quests and badges
	                        gamification system!</p> */}
    
    
            <div classNameName="tab-switch"> 
     
                {/* <p classNameName="tab-switch-button login-register-form-trigger">Login</p>
      
      
      
                    <p classNameName="tab-switch-button login-register-form-trigger">Register</p> */}
            </div>
            </div>
            <form className="form" onSubmit={HandleLogin} >
        
    
        <div className="form-row"> 
         
          <div className="form-item"> 
          
            <div className="form-input">
              <div className="socio-posting-criterial">
                <select id="select_graphtype_login" className="fa">
                  <option value="fa fa-globe"> &#xf0ac; English</option>
                  <option value=""> Hindi</option>
                  <option value=""> Russian</option>
                  <option value=""> French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="form-row"> 
        
          <div className="form-item">
            <section className="container-choose-login">
              <nav className="selection-login">
                <ul className="section-login">
                  <li id="tab1-login" className="inactive">Mobile</li>
                  <li id="tab2-login">Email-Id</li>
                </ul>
              </nav>
              <section className="tabs">
                <div className="hiddencontlogin" id="tab1-login-content">
                  <div className="form-input" >
                    <p className="register-country-label">Choose your Country</p>
                    <div className="socio-posting-criterial-no " style={{position:"absolute",top:"0px",right:"-62px",width:"40%"}}>
                      <select id="select_graphtype_login" className="fa">
                        <option value="fa fa-globe"> &#xf0ac; +91</option>
                        <option value=""> +966</option>
                        <option value=""> +12</option>
                        <option value=""> +43</option>
                      </select>
                    </div>
                    <input type="text" value={mobile} onChange={onChangeMobile} id="login-with-mobile-input" name="register_mobile"/>
                  </div>
                </div>
                <div className="hiddencontlogin" id="tab2-login-content">
                <Email/>
                </div>
              </section>
            </section>
          </div>
        </div>
        
    
        <div className="form-row" > 
      
          <div className="form-item"> 
           
            <div className="form-input">
              <p className="socio-label">Password</p>
              <input id="login-password-field" type="password" value={password} onChange={onChangePassword} className="form-control socio-login-password" name="login_password"/>
              <span toggle="#login-password-field" className="fa fa-fw fa-eye-slash login-field-icon toggle-password"></span> </div>
          
          </div>
       
        </div>
      
        <div className="form-row space-between" > 
    
          <div className="form-item"> 
         
            <div className="checkbox-wrap">
              <input type="checkbox" id="login-remember" name="login_remember" checked/>
         
              <div className="checkbox-box"> 
             
                <svg className="icon-cross">
                <use xlinkHref="#svg-cross"></use>
                </svg> 
             
              </div>
             
              <label for="login-remember">Remember Me</label>
            </div>
         
          </div>
       
          <div className="form-item"> 
           
            <a className="form-link" href="www.google.com">Forgot Password?</a> 
         
          </div>
       
        </div>
       
        <div className="form-row"> 
      
          <div className="form-item " id="socio-login"> 
         
            <button className="button medium secondary socio-login-button">Continue</button>
        
          </div>
     
        </div>
     
      </form>
 
      <p className="lined-text">OR</p>

      

      <div className="social-links socio-social-links"> 
    
        <a className="social-link google" href="www.google.com"> 
      
        <svg className="icon-facebook">
        <use xlinkHref="#svg-socio-google"></use>
        </svg> <span> Continue with Google</span> 
      
        </a> 
     
        
      
        <a className="social-link apple" href="wwww.google.com"> 
       
        <svg className="icon-twitter">
        <use xlinkHref="#svg-socio-apple"></use>
        </svg> <span> Continue with Apple</span> 
      
        </a> 
  
      </div>
      
            </div>
    )
};

export default Login