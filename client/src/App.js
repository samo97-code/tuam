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
        axios.get('/user')
            .then(res => {
                this.setState({showInput:res.data})
            })
            .catch(function (error) {
            })
    }

    getInputVale = (event)=>{
        this.setState({input:event.target.value})
    };
    saveInfo = ()=>{
        axios.post('/user',{name:this.state.input})
            .then(res => {
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    render() {

        const userInfo = this.state.showInput.map((item,index)=>{
            return(
                <ul key={index}>
                    <li><b>{index+1}</b>User Name: {item.name}</li>
                </ul>
            )
        });

        return (
            <div className="App">
                <header className="App-header">
                    <form action="" method="post">
                        <input type="text"  onInput={(event)=>this.getInputVale(event)}/>
                        <button type="button" onClick={()=>this.saveInfo()}>Send</button>
                    </form>
                </header>
                <div>
                    <h2>User Info</h2>
                    {userInfo}
                </div>
            </div>
        );
    }
}




export default App;
