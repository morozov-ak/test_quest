import React from 'react';
import { ValidateComponent } from './ValidateComponent';

export function Some_component(props) {
    
    return (
        <div className="SomeComponent">
            <h1>Родитель</h1>
            {props.children}
            {props.trigger}
            
        </div>

    );
}