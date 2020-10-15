import React from 'react'

function Button({ value, buttonPress }) {
    const orangeButtons = ['/', 'x', '-', '+', '=']
    const buttonCheck = (value) => {
        if (orangeButtons.includes(value)) return ' -orange'
        if (value === '0') return ' -long'
        return ''
    }
    const classes = 'button' + buttonCheck(value)

    return (
        <button className={classes} onClick={(e) => buttonPress(e)} value={value}>
            { value}
        </button>
    )
}

export default Button
