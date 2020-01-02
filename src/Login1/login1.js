import React from 'react'
import {Link ,Route} from 'react-router-dom'


import Register from '../Register/register'
import Type from '../Type/type'
var Login1Css=require('./login1.css')


export default class Login1Page extends React.Component{

    constructor(props){
        super(props)
        this.state={
            Username:'',
            Password:''
        }
    }
    changeValue = e=>{              
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login=e=>{
        //去访问服务器，登陆成功
        if(this.state.Username='123'&&this.state.Password){
            alert('登陆成功');
            window.localStorage.setItem("username","123");
            window.localStorage.setItem("token","11111");
            console.log("登陆成功")
        }else{
            alert('登陆失败');
        }
    }



    render(){
        return(
            <div>
                <div className={Login1Css.background}>
                    <div className={Login1Css.container}>
                        <div className={Login1Css.login}>
                         <span className={Login1Css.title}>Login</span>
                            <br></br>
                            
                            <br></br>
                            <form className={Login1Css.center}>
                                <input type="text" name="Username"placeholder="Username" className={Login1Css.shuru} value={this.state.Username} onChange={this.changeValue}></input>
                                <br></br><br></br>
                                <input type="pwd" name="Password" placeholder="Password" id="input1" value={this.state.Password} onChange={this.changeValue}></input>
                                <br></br><br></br>
                                <Link to="/type">
                                <input type="submit" name="" id="" value="Login" onClick={this.login} className={Login1Css.sub}></input>
                                </Link>
                                <br/><br/>
                                <Link to="/register"> <span className={Login1Css.adm}>管理员注册</span></Link>
                               
                                <Route path="/type" component={Type}></Route>
                                <Route path="/register" component={Register}></Route>
                               
                            </form>

                        </div>
                        <div className={Login1Css.intro}>
                            <p className={Login1Css.intro1}>
                            Hello, welcome to the landing interface, I hope you have a good mood, a good life, positive and optimistic face of life.            Don't worry too much about your final grades. Don't worry about dropping out of the exam. If you change the exam, you'll still hang up. Relax your mind. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
