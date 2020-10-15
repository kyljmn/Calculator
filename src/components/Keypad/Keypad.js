import React from 'react'
import Button from '../Button/Button'

const Keypad = ( { buttonPress } ) => {
    const buttonList = [
        'C', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='
    ]
    const buttons= buttonList.map((button) => <Button 
                                                key={button} 
                                                value={button} 
                                                buttonPress={buttonPress} 
                                                />)
    return (
        <div className="buttons-container">
            { buttons }
        </div>
    )
}

export default Keypad
