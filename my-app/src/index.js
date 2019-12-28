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

class HeightComponent extends React.Component{
    render(){
        return (
            <form>
                <label>
                    Enter your heigh (in cms)
                    <input type="text" name="name" value={this.props.height_value} onChange={this.props.onChange} />
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

        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleWeightChange(event) {
        this.setState({weight_val: event.target.value});
    }

    handleHeightChange(event) {
        this.setState({height_val: event.target.value});
    }


    handleSubmit(event) {
        alert('Weight: ' + this.state.weight_val + ' Height: ' + this.state.height_val);
        event.preventDefault();
    }


    render(){
        return (
            <div>
                <WeightComponent 
                    weight_value={this.state.weight_val} 
                    onChange={this.handleWeightChange} 
                />
                <HeightComponent 
                    height_value={this.state.height_val} 
                    onChange={this.handleHeightChange} 
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


