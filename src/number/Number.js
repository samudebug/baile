import React from 'react';
import num0 from './images/0.png';
import num1 from './images/1.png';
import num2 from './images/2.png';
import num3 from './images/3.png';
import num4 from './images/4.png';
import num5 from './images/5.png';
import num6 from './images/6.png';
import num7 from './images/7.png';
import num8 from './images/8.png';
import num9 from './images/9.png';
import colon from './images/ponto.png'
import './Number.css';
export default class Number extends React.Component {
    
    getNumber(i) {
        const numbersArray = [
            ['0', num0],
            ['1', num1],
            ['2', num2],
            ['3', num3],
            ['4', num4],
            ['5', num5],
            ['6', num6],
            ['7', num7],
            ['8', num8],
            ['9', num9],
            ['col', colon],
        ];
        const numbersMap = new Map(numbersArray);
        return numbersMap.get(i);
    }

    render() {
        return (
            <img src={this.getNumber(this.props.number)} className={this.props.className} style={this.props.style} id={this.props.id} alt="number"/>
        )
    }
}