import React,{} from "react";
import Login from "./login";
import Register from "./register";
import Header from "./Header";
import {Router,Route} from "react-router-dom"
import {history} from "../helpers/history";
const App = ()=>{
    // useEffect(()=>{
    //     history.push("/register")
    // })

    return(
        <Router history={history} >
            <div>
                <Header/>
                <div>
                        <Route path={"/"} exact component={Login} />
                        <Route path={"/register"} component={Register} />
                </div>
            </div>
        </Router>
        
    )
}
export default  App;