import React from 'react';
import './Calculator.css'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstNumber: '',
            secondNumber: '',
            operator: '',
            result: '0'
        }
    }



    changeFirstNumber = event => {
       this.setState({
           firstNumber: event.target.value
       })
    }


    changeSecondNumber = event => {
        this.setState({
            secondNumber: event.target.value
        })
    }

    handleChange = event => {
        this.setState({ 
            operator: event.target.value
         })
      }
      

    performOperation  = () =>  {    
        
        var oper = this.state.operator;

        switch (oper) {
            case 'Add' :
                this.setState ( {
                    result: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber)
                    })
                    break;
            case 'Subtract' :
                this.setState ( {
                    result: parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber)
                    })
                    break;

            case 'Multiply' :
                this.setState ( {
                    result: parseInt(this.state.firstNumber) * parseInt(this.state.secondNumber)
                    })
                    break;  

            case 'Divide' :
                this.setState ( {
                    result: parseInt(this.state.firstNumber) / parseInt(this.state.secondNumber)
                    })
                    break;  
                
            default :
                this.setState ({
                    result: "There is something wrong with your calculation!"
                })
            
        }
        
        this.setState({ 
            firstNumber: '',
            secondNumber: '',

         }) 
   
    }
   


    render() {
        return (
            
                
            
            <div className='wrapper1'>
                <h1 className="Heading">CALCULATOR</h1>
                <div className='input'>
                    <input className='firstNumber-input' value={this.state.firstNumber} type='number' onChange={ this.changeFirstNumber } />
                    <input className='secondNumber-input' value={this.state.secondNumber} type='number' onChange={ this.changeSecondNumber } />
                </div>
                <div className='select'>
                    <label className='label' for="oper">Choose an operation:</label>
                    <select className='oper' id="oper" value={this.state.operator } type='string'  onChange={ this.handleChange } >
                        <option value="Add" defaultValue  >Select operation</option>
                        <option value="Add">Add</option>
                        <option value="Subtract">Subtract</option>
                        <option value="Multiply">Multiply</option>
                        <option value="Divide">Divide</option>
                    </select>
                </div>
                <div className='calc'>
                    <button className="calc-btn" type='number' onClick={ this.performOperation }>Calculate</button>
                </div>    
                    
                
                
                <div className="result">
                    RESULT:: { this.state.result } 
                </div>
                
            </div>
            
        )
        
        }

    }
export default Calculator;