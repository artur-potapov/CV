import React from 'react';
import './Block.css';

function Block(props) {

    return (
        <div class="block">
            <div>
                <h1>{props.title}</h1>             
            </div>
            <div>
                { props.children }
            </div>
            
     </div>
    )
}

export default Block;