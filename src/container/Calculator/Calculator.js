import React, { useState, useEffect } from 'react'
import Input from '../../components/Input/Input'
import Keypad from '../../components/Keypad/Keypad'
import Output from '../../components/Output/Output'


const Calculator = () => {
    const [input, setInput] = useState('0');
    const [output, setOutput] = useState(0);
    const operations = ['/', 'x', '+', '-']
    const operationRe = /(-?[0-9]+\.?[0-9]*)([/+\-x]?)(-?[0-9]+\.?[0-9]*)?/
    
    const inputParser = (input) => {
        const parsed = input.match(operationRe)
        const first = parseFloat(parsed[1])
        const operator = parsed[2]
        const second = parseFloat(parsed[3])
        return { first, second, operator }
    }

    const buttonPress = (event) => {
        const value = event.target.value
        const { first, second, operator } = inputParser(input)
        if (input === '0') {
            if ( value === ".") setInput(input + value)
            else if ( isNaN(value) ) console.log('Invalid Operation')
            else setInput(value)
        } else if (value === 'C') {
           setInput('0')
        } else if (value === '%') {
            const float = parseInt(output) / 100;
            setInput(float.toString())
        } else if (value ==='+/-') {
            const num = -1 * parseFloat(output);
            setInput(num.toString())
        } else if (value === '.') {
            if (second >= 0)  {
                Number.isInteger(second) ? setInput(input + value) : console.log('Already a float!1')
            } else {
                Number.isInteger(first) ? setInput(input + value) : console.log('Already a float!')
            }
            
        } else if ( operations.includes(value)) {
            if (operations.includes(input.charAt(input.length-1))) {
                console.log('Invalid Operation')
            } else if (operator) {
                setInput(output+value);
            } else {
                setInput(input + value)
            }
        } else if (value === '=') {
            setInput(output.toString());
        } else {
            setInput(input+value);
        }
    }
    useEffect(() => {
        const { first, second, operator } = inputParser(input)
        if(second) {
            switch (operator) {
                case '+':
                    setOutput(first + second)
                    break
                case '-':
                    setOutput(first - second)
                    break
                case '/':
                    setOutput(first / second)
                    break
                case 'x':
                    setOutput(first * second)
                    break
                default:
                    setOutput(first)
                    break
            }
        } else {
            setOutput(first)
        }
    }, [input, inputParser])

    return (
        <div className="calculator-body">
            <div className="screen">
                <Input input={input}/>
                <Output output={output}/>
            </div>
            <Keypad buttonPress={buttonPress} />
        </div>
    )
}

export default Calculator
