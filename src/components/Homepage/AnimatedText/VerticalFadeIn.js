import React from 'react';
import { Wave } from 'react-animated-text';


export function VerticalFadeIn(props) {
    return (
        <div>
            <Wave 
                text={props.text} 
                effect="verticalFadeIn" 
                effectDuration={0.0001} 
                effectChange={1}
                effectDirection="up" 
                iterations={1}
            ></Wave>
        </div>
    );
}