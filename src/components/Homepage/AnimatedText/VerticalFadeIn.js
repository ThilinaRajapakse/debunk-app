import React from 'react';
import { Wave } from 'react-animated-text';


export function VerticalFadeIn(props) {
    return (
        <div>
            <Wave 
                text={props.text} 
                effect="verticalFadeIn" 
                effectChange={2} 
                effectDirection="up" 
                iterations={1}
            ></Wave>
        </div>
    );
}