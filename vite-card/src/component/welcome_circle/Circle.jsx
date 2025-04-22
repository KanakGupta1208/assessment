import React from 'react'
import "../welcome_circle/circle.css"
import { useEffect, useState } from 'react';

function Circle() {
    const [xcoord, setXCoord] = useState(20);
    const [ycoord, setYCoord] = useState(20);
    const [angle, setAngle] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setAngle(prevAngle => (prevAngle + (Math.PI * 2 / 100)) % (Math.PI * 2));

            const newXCoord = Math.cos(angle) * 12;
            const newYCoord = Math.sin(angle) * 12;
            setXCoord(newXCoord);
            setYCoord(newYCoord);
        }, 20); 
        return () => clearInterval(interval);
    }, [angle]);
    return (
        <>
            <div className="circle-body">
                <div className="circle-holder">
                    <div className="outer-circle" style={{ marginTop: ycoord + 'px', marginLeft: xcoord + 'px' }}></div>
                    <div className="inner-circle">
                        <p><strong>Welcome!!</strong></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Circle