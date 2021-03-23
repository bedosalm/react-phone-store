import React from 'react';

function Title({name,title}) {
    return (
        <div className="py-5 mx-auto text-title text-center">
            <h1>{name} <strong className="text-blue font-italic">{title}</strong></h1>
        </div>
    );
}

export default Title;