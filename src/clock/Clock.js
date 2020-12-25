import React, {useEffect, useState} from 'react';
import './Clock.css';
import Number from '../number/Number';

export default function Clock(props) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(getDistance());
        }, 1000);

        return () => clearTimeout(timer);
    })

    const END_DATE = new Date("Feb 19, 2021 18:00:00");

    function getText(content)  {
        const contentString = content.toString();
        if (contentString.length === 2) {
            return (
                <div className="content">
                <Number number={contentString.charAt(0)}/>
                <Number number={contentString.charAt(1)}/>
                </div>
            );
        }
        return (
            <div className="content">
                <Number number='0'/>
                <Number number={contentString}/>
            </div>
        );
    }

    function getContent() {
        
        return (
            <div className="clock">
                {getText(timeLeft.days)}
                <Number number="col" className="colon"/>
                {getText(timeLeft.hours)}
                <Number number="col" className="colon"/>
                {getText(timeLeft.minutes)}
                <Number number="col" className="colon"/>
                {getText(timeLeft.seconds)}
            </div>
        )
    }


    function getDistance() {
        const now = new Date().getTime();
        const distance = END_DATE.getTime() - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }

    return (
        <div className="clock-container">
            {getContent()}
        </div>
    );
}
