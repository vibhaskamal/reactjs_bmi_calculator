// References
// https://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// import { Container, Row, Col } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



// TODO
// Add BMI value text : Done
// Center align: Done
// Validate input: Done
// Use framework for UI: Done
// Add option to toggle from metric to imperial system: Done


class WeightComponent extends React.Component{
    render(){
        return (
            <form 
                className = 'form-center'
            >
                <label>
                    <InputGroup 
                        size="sm"
                        name="name" 
                        value={this.props.weight_value} 
                        onChange={this.props.onChange}
                    >
                        Enter your weight     
                        <FormControl
                            placeholder="e.g. 50"
                        />
                    </InputGroup>
                </label>
                
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
                    <InputGroup 
                        size="sm"
                        name="name" 
                        value={this.props.height_value} 
                        onChange={this.props.onChange}
                    >
                        Enter your height 
                        <FormControl
                            placeholder="e.g. 1.6"
                        />
                    </InputGroup>

                </label>
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

class MetricImperial extends React.Component{
    render(){
        let formula_metric = 'Weight(kg) / [Height(m)]^2';
        let formula_imperial = '703 x Weight(lbs) / [Height(in)]^2';

        let return_value;

        if (this.props.system == 1)
        {
            return_value = formula_metric;
        }
        else
        {
            return_value = formula_imperial;
        }

        return(
            <div className = 'form-center'>
                Formula: {return_value}
            </div>
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
            metric: 1,
        };

        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMetricChange = this.handleMetricChange.bind(this);
        this.handleImperialChange = this.handleImperialChange.bind(this);
    }

    handleMetricChange(event) {
        this.setState(
            {
                metric: 1,
            }
        );
    }

    handleImperialChange(event) {
        this.setState(
            {
                metric: 0,
            }
        );
    }

    handleWeightChange(event) {
        let user_input = event.target.value;
        if (this.isNumeric(user_input))
        {
            this.setState({weight_val: event.target.value});
        }
        else if (user_input)
        {
            alert('Weight entry error: Please enter positive numbers only');
            this.setState({weight_val: undefined});
            event.target.value = null;
        }  
    }

    handleHeightChange(event) {
        let user_input = event.target.value;
        if (this.isNumeric(user_input))
        {
            this.setState({height_val: event.target.value});
        }
        else if (user_input)
        {
            alert('Height entry error: Please enter positive numbers only');
            this.setState({height_val: undefined});
            event.target.value = null;
        }
    }


    handleSubmit(event) {
        let bmi = this.calculateBMI();

        this.setState({bmi: 'BMI: ' + bmi});
        
        
        event.preventDefault();
    }

    calculateBMI() {
        let bmi_value;

        if (this.state.weight_val && this.state.height_val)
        {
            if (this.state.metric === 1)
            {
                bmi_value = (this.state.weight_val/(this.state.height_val*this.state.height_val));
            }
            else
            {
                bmi_value = (703*this.state.weight_val/(this.state.height_val*this.state.height_val));
            }
            
            bmi_value = bmi_value.toFixed(2);
    
            return bmi_value;
        }
        else
        {
            alert('Enter BOTH weight and height values');
            return 0;
        }

    }

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }


    render(){
        return (
            <Container>
            
                <Row>
                    <Col sm={{ size: 'auto', offset: 3 }}>
                        <Button color="info" onClick={this.handleMetricChange}>Metric System</Button>{' '}
                    </Col>
                    <Col sm={{ size: 'auto' }}>
                        <Button color="info" onClick={this.handleImperialChange}>Imperial System</Button>{' '}
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ size: 'auto', offset: 4 }}>Formula</Col>
                </Row>
                
                <MetricImperial system={this.state.metric} />

                <div>
                    <WeightComponent 
                        weight_value={this.state.weight_val} 
                        onChange={this.handleWeightChange} 
                    />
                </div>

                <div>
                    <HeightComponent 
                        height_value={this.state.height_val} 
                        onChange={this.handleHeightChange} 
                    />
                </div>

                <form 
                    className='form-center'
                    onSubmit={this.handleSubmit}
                >
                    <Button variant="success" type="submit" value="Calculate BMI" >Calculate BMI</Button>
                </form>

                <BMIDisplay bmi_result={this.state.bmi} />
                
           
            </Container>
        );
    }
}


ReactDOM.render(
    <Interface />, 
    document.getElementById('root')
);


