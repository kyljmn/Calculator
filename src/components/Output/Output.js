import React from 'react'

const Output = ({ output }) => {
    const formatted = parseFloat(output.toFixed(5)); 
    return (
        <div className="output">
            {formatted}
        </div>
    )
}

export default Output
