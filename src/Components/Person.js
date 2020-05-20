import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h1>List of Bad Asses</h1>
            <p>Hey my name is {props.name} and I'm {props.age} years young</p>
        </div>

    );
}

export default Person;