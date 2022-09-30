import React, { useState, useEffect } from 'react'

function Timer() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "October, 1, 2022";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div>
                <h2>
                    {days}
                </h2>
                <span>
                    days
                </span>
            </div>
            <div>
                <h2>
                    {hours}
                </h2>
                <span>
                    hours
                </span>
            </div>
            <div>
                <h2>
                    {minutes}
                </h2>
                <span>
                    minutes
                </span>
            </div>
            <div>
                <h2>
                    {seconds}
                </h2>
                <span>
                    seconds
                </span>
            </div>
        </>
    )
}

export default Timer