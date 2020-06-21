import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";



class App extends React.Component{

    state = {
        input:'Send',
        showInput:[]
    };

    componentDidMount() {
        axios.get('/qwe').then((users)=>{
            console.log(users.data,'4444')
        }).catch((error)=>{
            console.log(error,'3333')
        })
    }

    test = ()=>{
        let name = this.input
        axios.post('/add',{name:name}).then((res)=>{
            this.state.showInput = [...this.state.showInput,res.data.username]
        }).catch((er)=>{
            console.log(er,'777')
        })
    }



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Start Programm</h1>
                    <input type="text" onChange={(event)=>this.input = event.target.value}/>
                    <button onClick={this.test}>{this.state.input}</button>
                    <ul>
                        <li></li>
                    </ul>
                </header>
            </div>
        );
    }
}




export default App;
