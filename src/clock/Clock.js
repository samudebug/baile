import React, { useEffect, useState } from 'react';
import './Clock.css';
import Number from '../number/Number';
import { Image } from 'react-bootstrap';
import dias from '../assets/dias.png';
import hrs from '../assets/hrs.png';
import min from '../assets/min.png';
import seg from '../assets/seg.png';
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

    const END_DATE = new Date("Feb 19, 2021 00:00:00");

    function getText(content, isDays) {
        const contentString = content.toString();
        if (contentString.length === 2) {
            return (
                <div className="numbers">
                    <Number number={contentString.charAt(0)} className="number" />
                    <Number number={contentString.charAt(1)} className="number" />
                </div>
            );
        }
        return (isDays ? (<div className="numbers days">
            <Number number='0' className="number" />
            <Number number={contentString} className="number" />
        </div>) : (<div className="numbers">
            <Number number='0' className="number" />
            <Number number={contentString} className="number" />
        </div>)

        );
    }

    function getContent() {

        return (
            <div className="clock">
                <div className="content-wrapper">
                    <div className="content">
                        <div className="numbers-text ">
                            {getText(timeLeft.days, true)}
                            <Image src={dias} className="words" id="dias" />
                        </div>
                        <Number number="col" className="colon" />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <div className="numbers-text">
                            {getText(timeLeft.hours)}
                            <Image src={hrs} className="words" />

                        </div>
                        <Number number="col" className="colon" id="colon-hours" />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <div className="numbers-text">
                            {getText(timeLeft.minutes)}
                            <Image src={min} className="words" />
                        </div>
                        <Number number="col" className="colon" />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="numbers-text">
                        {getText(timeLeft.seconds)}
                        <Image src={seg} className="words" />
                    </div>
                </div>
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
