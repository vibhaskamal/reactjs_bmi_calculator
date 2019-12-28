import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

//  BMI = (Weight/2.205) / (Height/39.37)2

class WeightComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weight: '',
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({weight: event.target.value});
    }


    render(){
        return (
            <form>
                <label>
                    Enter your weight (in kg)
                    <input type="text" name="name" value={this.state.weight} onChange={this.handleChange} />
                </label>
                {/* <input type="submit" value="Submit" /> */}
                {this.state.weight}
            </form>
            
        );
    }
}


class Interface extends React.Component{
    render(){
        return (
            // "This is the main UI"
            <div>
                <WeightComponent />
            </div>
        );
    }
}


ReactDOM.render(
    <Interface />, 
    document.getElementById('root')
);


