import React from 'react'
import illustration from '../../assets/illustration.png';

export default function Navbar () {
    return (
        <div id="panel">
            <div id="panel-illustration"> 
                <img src={illustration} alt="" />
            </div>
            
            <p>
                Some nice explanation
            </p>

        </div>
    )
}
