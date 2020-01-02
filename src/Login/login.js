import React from 'react'
import {Link,Route} from 'react-router-dom';
import {Input} from 'antd';
import Type from '../Type/type';

var onChange = e => {console.log(e);};
var LoginCss = require('./login.css')
export default class Login extends React.Component{

    render(){


        return(

            <div className={LoginCss.bj}>
                     <div className={LoginCss.loginout}>

                    
                     <div className={LoginCss.shuru}>
                        <span className={LoginCss.biaoti}>管理员登陆</span>  

                     </div>  

                  
                         
                         <div className={LoginCss.shuru}> <span className={LoginCss.wenzi}>账号</span> <Input placeholder="请输入账号" allowClear onChange={onChange} className={LoginCss.kuang} />,</div>
                         <div className={LoginCss.shuru}> <span className={LoginCss.wenzi}>密码</span> <Input.Password placeholder="请输入密码" className={LoginCss.kuang} /></div>   
                            <Link to="/type">
                                <div className={LoginCss.shuru}>
                                    <input type="button"  id="" value="登陆" className={LoginCss.denglu}></input>
                                </div>
                            </Link>
                           <Route path="/type" component={Type}></Route>
                   
        
                         
                         
                     </div>

            </div>
        )
    }
}