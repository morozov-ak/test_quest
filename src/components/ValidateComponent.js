import React, { useEffect } from 'react';

export function ValidateComponent(props) {
    const method = function () {
        alert("method in valid")
    }

    useEffect(
        () => {
            if(props.trigger){
                method()
            }
            
        }
        , [props.trigger]
    )

    return (
        <div className='Validate'>
            <h1>Дочка</h1>
            {props.children}
            <p></p>  {props.trigger}
        </div>
    );
}
