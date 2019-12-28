import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

//  BMI = (Weight/2.205) / (Height/39.37)2

class WeightComponent extends React.Component{
    render(){
        return (
            <form>
                <label>
                    Enter your weight (in kg)
                    <input type="text" name="name" value={this.props.weight_value} onChange={this.props.onChange} />
                </label>
                {/* {this.props.weight_value} */}
            </form>
            
        );
    }
}




class Interface extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weight_val: null,
            height_val: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({weight_val: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.weight_val);
        event.preventDefault();
    }


    render(){
        return (
            <div>
                <WeightComponent 
                    weight_value={this.state.weight_val} 
                    onChange={this.handleChange} 
                />
                <form onSubmit={() => this.handleSubmit()}>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}


ReactDOM.render(
    <Interface />, 
    document.getElementById('root')
);


