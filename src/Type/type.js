import React from 'react'
import Data from './Data/data'
import Information from './Information/information'
import Titles from './Titles/titles'
import {Route,Link,BrowserRouter,Redirect} from 'react-router-dom';
import Login from '../Login1/login1'
import imgone from '../Top/img/dog.jpg'
import imgtwo from '../Top/img/YH.jpg'

var TypeCss =require('./type.css');
export default class Type extends React.Component{

    render(){
        


        return(
            <div>
                
            <div className={TypeCss.top1}>
              
              <div className={TypeCss.img}>
                  <img src={imgone} alt="图片未加载" width="100px" height="90px"></img>
                   <div className={TypeCss.biaoti}>狗头视频管理员端</div>
              </div>
  
                    <Link to="/login1"> 
                            <div className={TypeCss.yonghu}>
                            <img src={imgtwo} alt="图片未加载" className={TypeCss.yhimg}></img>
                      </div>   
                    </Link>
                    <Route path="/login1" component={Login}></Route>
            </div>
  
  
              <div className={TypeCss.out}>
  
          
                  <BrowserRouter>
                      <div className={TypeCss.top}>
                              <div className={TypeCss.lleft}>
  
                                  <Link to="/data"><div className={TypeCss.left}>片源管理</div></Link>
                                  <Link to="/titles"><div className={TypeCss.left}>广告管理</div></Link>
                              
                                  <Link to="/information"><div className={TypeCss.left}>视频信息管理</div></Link>
                              
                              </div>
  
                              <div className={TypeCss.route}>
  
                                  <Route path="/data" component={Data}></Route>
                                  <Route path="/titles" component={Titles}></Route>
                                  <Route path="/information" component={Information}></Route>
                                  <Redirect to="/data"></Redirect>
                              </div>
                      </div>
                  </BrowserRouter>
                
              </div>
            </div>

        )
    }
}