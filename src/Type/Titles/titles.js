import React from 'react'
import { Button,Input,message, Upload,  Icon  } from 'antd';
 
var  props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
     
  };
var GGCss = require('../Titles/titles.css');
var  success = () => {  message.success('添加成功 ', 10); };
var  chenggong = () => {  message.success('删除成功 ', 10); };
export default class Titles extends React.Component{
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
            "advid":this.state.advid,
            "adving":this.state.adving,
            "advurl":this.state.advurl,
        }
        xhr.open("post","/administrator/addgg")
        xhr.onreadystatechange=function(props){
            
        }
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
        xhr.send(JSON.stringify(data))
    }

    render(){

        return(

            <div className={GGCss.out}>
                <div className={GGCss.left}>
                    <span className={GGCss.tianjia}>添加广告</span>
                    <Input   placeholder="输入广告名称"  className={GGCss.shuru} name="advid" value={this.state.advid} onChange={e=>this.changeValue(e)}></Input>
                    <div className={GGCss.liulan}>
                        <Upload {...props} >
                            <Button>
                            <Icon type="upload" /> 浏览
                            </Button>
                        </Upload>
                    </div>
                    <Input placeholder="该广告的超链接地址" className={GGCss.a} name="advurl" value={this.state.advurl} onChange={e=>this.changeValue(e)}></Input>
                    <Button type="primary" className={GGCss.confirm}  onClick={success}> 确认添加</Button>
                </div>
                <div className={GGCss.right}>
                    <span className={GGCss.delete}>删除广告</span>
                    <Input placeholder="输入广告名称" className={GGCss.sousuo}></Input>
                    <Button type="primary" className={GGCss.last} onClick={chenggong}>确认删除</Button>
                </div>
            </div>
        )
    }
}