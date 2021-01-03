import React from 'react';
import './greeting.css';

const Greeting = ({greeting}) => {
    
    return (
        <main>
            <h3 className={'title'}>{greeting}</h3>
        </main>
    );
}

export default Greeting;