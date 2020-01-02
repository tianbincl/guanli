import React from 'react'
import {Input,Button,message} from 'antd';
var ICss =require('../Information/information.css')
var Search =Input;
var  success = () => {  message.success('修改成功 ', 10); };
export default class Infornation extends React.Component{
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
        var xhr =new XMLHttpRequest()
        var data={
            "mname":this.state.mname,
            "imgurl":this.state.imgurl,
            "starring":this.state.starring,
            "director":this.state.director,
            "intro":this.state.intro
        }
        xhr.open("opst","/administrator/modify")
        //配置响应函数
        xhr.onreadystatechange=function(props){
            
        }
        //发送数据
        
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(JSON.stringify(data))
    }

    render(){

        return(

            <div>
                 <Search placeholder="输入电影编号" onSearch={value => console.log(value)} enterButton className={ICss.sousuo} /> <Button shape="circle" icon="search"  />
                 <div className={ICss.down}>

                    
                        <div className={ICss.name}> <span className={ICss.wenzi}>片名</span>  <Input placeholder="输入片名"  className={ICss.shuru} name="mname" value={this.state.mname} onChange={e=>this.changeValue(e)} /> <Button type="primary" className={ICss.queren} onClick={success}>确认修改</Button></div>
                        <div className={ICss.name}> <span className={ICss.wenzi}>海报</span>  <Input placeholder="输入路径"  className={ICss.shuru} name="imgurl" value={this.state.imgurl} onChange={e=>this.changeValue(e)} /> <Button type="primary" className={ICss.queren} onClick={success}>确认修改</Button></div>
                        <div className={ICss.name}> <span className={ICss.wenzi}>主演</span>  <Input placeholder="输入主演"  className={ICss.shuru} name="starring" value={this.state.starring} onChange={e=>this.changeValue(e)} /> <Button type="primary" className={ICss.queren} onClick={success}>确认修改</Button></div>
                        <div className={ICss.name}> <span className={ICss.wenzi}>导演</span>  <Input placeholder="输入导演"  className={ICss.shuru} name="director" value={this.state.director} onChange={e=>this.changeValue(e)} /> <Button type="primary" className={ICss.queren} onClick={success}>确认修改</Button></div>
                        <div className={ICss.name}> <span className={ICss.wenzi}>简介</span>  <Input placeholder="输入简介"  className={ICss.shuru} name="intro" value={this.state.intro} onChange={e=>this.changeValue(e)} /> <Button type="primary" className={ICss.queren} onClick={success}>确认修改</Button></div>
                  
                 </div>
            </div>
        )
    }
}