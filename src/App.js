import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollBox from './ScrollBox';

class App extends Component {
    render() {
        return (
            <div> 
            <ScrollBox ref={(ref) => {this.scrollBox=ref}}/>
            <button onClick={() => this.scrollBox.scrollToBottom()}>
            맨 밑으로
            </button>
            <button onClick={() => this.scrollBox.scrollToTop()}>
            맨 위로
            </button>
            </div>
        );
    }
}



export default App;
