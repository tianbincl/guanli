import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top from './Top/top';
import Type from './Type/type';
import Login1Page from './Login1/login1'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Redirect,Route} from 'react-router-dom';
import register from './Register/register';

class Index extends React.Component{
    render(){
        return(
            <div >
                
                <BrowserRouter>
                    <Route path="/login1" component={Login1Page}></Route>
                    <Route path="/type" component={Type}></Route>
                    <Route path="/top" component={Top}></Route>
                    <Route path="/register" component={register}></Route>
                    <Redirect to="/login1"></Redirect>
           
                
                </BrowserRouter>
              
              
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
