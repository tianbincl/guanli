import React from 'react';
import {Link ,Route} from 'react-router-dom'
import Type from '../Type/type'
import { message } from 'antd';
var RegisterCss=require('./register.css');



export default class register extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    upload=()=>{
        var xhr = new XMLHttpRequest()
        var data={
            "username":this.state.username,
            "password":this.state.password,
            "email":this.state.email,
            "phone":this.state.phone,
        }
        //open连接
         xhr.open("post","/user/login")
        //配置响应函数
         xhr.onreadystatechange=function(props){
             if(xhr.readyState==4){
                 if(xhr.status==200){
                     this.props.history.push("/shuffingimg")
                     message.info(this.responseText)
                 }else{
                   
                 }
             }
         }
        //发送数据
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(JSON.stringify(data))
    }
    
     render(){
         return(
             <div>
 
                 <div className={RegisterCss.background}>
                     <div className={RegisterCss.container}>
                         
                         <span className={RegisterCss.title}>管理员注册</span>
                         <form>
                             <div className={RegisterCss.piece}>
                                 <div className={RegisterCss.picture}></div>
                                 <input type="text" placeholder='Username' name="username" value={this.state.username} onChange={e=>this.changeValue(e)}></input>
                             </div>
                             <br></br>
                             <div className={RegisterCss.piece}>
                                 <div className={RegisterCss.picture}></div>
                                 <input input type="text" placeholder='Password' name="password" value={this.state.password} onChange={e=>this.changeValue(e)}></input>
                             </div>
                             <br></br>
                             <div className={RegisterCss.piece}>
                                 <div className={RegisterCss.picture}></div>
                                 <input input type="text" placeholder='Email' name="email" value={this.state.email} onChange={e=>this.changeValue(e)}></input>
                             </div>
                             <br></br>
                             <div className={RegisterCss.piece}>
                                 <div className={RegisterCss.picture} src=""></div>
                                 <input input type="text" placeholder='Phone' name="phone" value={this.state.phone} onChange={e=>this.changeValue(e)}></input>
                             </div>
                             <br></br>
                             <Link to="/type">
                             <input  className={RegisterCss.register} type="submit" name=""  value="Register" onClick={this.upload()}></input>
                             </Link>
                             <Route path="/type" component={Type}></Route>
                         </form>
                         
 
                     </div>
                 </div>
 
             </div>
         )
     }
 }