import React from 'react'
import imgone from '../Top/img/dog.jpg'
import imgtwo from '../Top/img/YH.jpg'
import  {Link,Route} from 'react-router-dom'
import Login from '../Login/login'

var TopCss =require('./top.css')
export default class Top extends React.Component{

    render(){
        return(

          

                <div className={TopCss.top}>
              
                    <div className={TopCss.img}>
                        <img src={imgone} alt="图片未加载" width="100px" height="100px"></img>
                         <div className={TopCss.biaoti}>狗头视频管理员端</div>
                    </div>

                  <Link to="/login"> 
                        <div className={TopCss.yonghu}>
                                <img src={imgtwo} alt="图片未加载" className={TopCss.yhimg}></img>
                            </div>   
                  </Link>
                   <Route path="/login" component={Login}></Route>
                    </div>

                    
          
           
        )
    }
}