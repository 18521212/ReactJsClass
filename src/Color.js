import React from "react";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) =>
{
    let a = getRandomColor();
    console.log (a);
    return (props) => (
        <div style={{color: a}}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default Color;