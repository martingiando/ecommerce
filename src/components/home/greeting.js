import React from 'react';
import './greeting.css';

const Greeting = ({greeting}) => {
    
    return (
        <main>

            <h2 className={'title'}>{greeting}</h2>

        </main>
    );
}

export default Greeting;