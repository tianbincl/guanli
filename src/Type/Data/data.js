import React from 'react'
import { Button, Input ,message} from 'antd';

var DataCss =require('../Data/data.css');
var TextArea =Input;
var  success = () => {  message.success('修改成功 ', 10); };
var  chenggong = () => {  message.success('删除成功 ', 10); };
export default class Data extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    upmovie=()=>{/**增加电影 */
        var xhr =new XMLHttpRequest()
        var data={
            "mname":this.state.mname,
            "imgurl":this.state.imgurl,
            "starring":this.state.starring,
            "director":this.state.director,
            "intro":this.state.intro
        }
        //open
        xhr.open("post","/administrator/addmovie")
        //配置函数

        //发送数据
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(JSON.stringify(data))
    }
   deletem=()=>{
       var xhr =new XMLHttpRequest()
       var data2={
           "mid":this.state.mid,
       }
       //open
       xhr.open("post","/administrator/deletemovie")
       //配置函数


       //发送数据
       xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
       xhr.send(JSON.stringify(data2))
   }
    render(){

        return(

            <div className={DataCss.out}>
                <div className={DataCss.top}> 片源管理</div>
                    <div className={DataCss.left}>
                        <div className={DataCss.name}> <span className={DataCss.wenzi}>片名</span>  <TextArea placeholder="输入片名" autosize className={DataCss.shuru} name="mname" value={this.state.mname} onChange={e=>this.changeValue(e)} />  </div>
                        <div className={DataCss.name}> <span className={DataCss.wenzi}>海报</span>  <TextArea placeholder="输入路径" autosize className={DataCss.shuru} name="imgurl" value={this.state.imgurl} onChange={e=>this.changeValue(e)}/> </div>
                        <div className={DataCss.name}> <span className={DataCss.wenzi}>主演</span>  <TextArea placeholder="输入主演" autosize className={DataCss.shuru} name="starring" value={this.state.starring} onChange={e=>this.changeValue(e)}/> </div>
                        <div className={DataCss.name}> <span className={DataCss.wenzi}>导演</span>  <TextArea placeholder="输入导演" autosize className={DataCss.shuru} name="director" value={this.state.director} onChange={e=>this.changeValue(e)}/> </div>
                        <div className={DataCss.name}> <span className={DataCss.wenzi}>简介</span>  <TextArea placeholder="输入简介" autosize className={DataCss.shuru} name="intro" value={this.state.intro} onChange={e=>this.changeValue(e)}/> </div>
                        <Button type="primary" className={DataCss.add}  onClick={success}>确认增加</Button>
                    </div>

                    <div className={DataCss.right}>
                        <Input placeholder="输入片名" className={DataCss.shururight} name="mname" value={this.state.mname} onChange={e=>this.changeValue(e)}></Input>
                        <Button type="primary" className={DataCss.queren}>搜索</Button>
                        <div className={DataCss.xx}>
                            
                        </div>
                        <Button type="primary" className={DataCss.queren} onClick={chenggong}>确认删除</Button>
                    </div>
            </div>
        )
    }
}