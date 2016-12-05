/**
 * Created by KUYLIM on 11/11/2016.
 */
import React, { Component } from 'react';
import Home from './home';

export default class App extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}
