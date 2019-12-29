import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


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
                    Enter your height (in cms)
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
            weight_val: undefined,
            height_val: undefined,
            // bmi: undefined,
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
        let bmi = this.calculateBMI();
        alert('BMI: ' + bmi.toFixed(2));
        console.log(bmi);
        event.preventDefault();
    }

    calculateBMI() {
        let bmi_value;
        //  BMI = (Weight/2.205) / (Height/39.37)2
        // bmi_value = (this.state.weight_val/(this.state.height_val*this.state.height_val))*703;
        bmi_value = (this.state.weight_val/(this.state.height_val*this.state.height_val));
        // this.setState({
        //     bmi: bmi_value,
        // });

        return bmi_value;
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

                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Calculate BMI" />
                </form>
            </div>
        );
    }
}


ReactDOM.render(
    <Interface />, 
    document.getElementById('root')
);


