// References
// https://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';



// TODO
// Add BMI value text : Done
// Center align: Done
// Validate input
// Use framework for UI
// Add option to toggle from metric to imperial system


class WeightComponent extends React.Component{
    render(){
        return (
            <form 
                className = 'form-center'
            >
                <label>
                    Enter your weight (in kg)
                    <input 
                        type="text" 
                        name="name" 
                        value={this.props.weight_value} 
                        onChange={this.props.onChange}
                        />
                </label>
                {/* {this.props.weight_value} */}
                
            </form>
            
        );
    }
}

class HeightComponent extends React.Component{
    render(){
        return (
            <form 
                className = 'form-center'
            >
                <label>
                    Enter your height (in meter)
                    <input type="text" name="name" value={this.props.height_value} onChange={this.props.onChange} />
                </label>
                {/* {this.props.weight_value} */}
            </form>
            
        );
    }
}

class BMIDisplay extends React.Component{
    render(){
        return (
            <form 
                className = 'form-center'
            >
                <label>
                    {this.props.bmi_result}
                </label>
            </form>
        );
    }
}





class Interface extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weight_val: undefined,
            height_val: undefined,
            bmi: undefined,
        };

        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleWeightChange(event) {
        let user_input = event.target.value;
        if (this.isNumeric(user_input))
        {
            this.setState({weight_val: event.target.value});
        }
        else
        {
            alert('Weight entry error: Please enter positive numbers only');
            this.setState({weight_val: undefined});
            event.target.value = null;
        }
        
    }

    handleHeightChange(event) {
        this.setState({height_val: event.target.value});
    }


    handleSubmit(event) {
        let bmi = this.calculateBMI();
        // console.log(bmi);

        this.setState({bmi: 'BMI: ' + bmi});
        
        // console.log('Done');
        
        event.preventDefault();
    }

    calculateBMI() {
        let bmi_value;
        bmi_value = (this.state.weight_val/(this.state.height_val*this.state.height_val));
        bmi_value = bmi_value.toFixed(2);

        return bmi_value;
    }

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
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

                <form 
                    className='form-center'
                    onSubmit={this.handleSubmit}
                >
                    <input type="submit" value="Calculate BMI" />
                </form>

                <BMIDisplay bmi_result={this.state.bmi} />
                
            </div>
        );
    }
}


ReactDOM.render(
    <Interface />, 
    document.getElementById('root')
);


