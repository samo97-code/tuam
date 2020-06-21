import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";



class App extends React.Component{

    state = {
        input:'',
        showInput:[]
    };

    componentDidMount() {
        axios.get('/').then((users)=>{
            console.log(users,'3333')
        }).catch((error)=>{
            console.log(error,'3333')
        })
    }



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Start Programm</h1>
                </header>
            </div>
        );
    }
}




export default App;
