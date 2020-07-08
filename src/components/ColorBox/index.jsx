// rsfp create all thing 

import React from 'react';
import { useState } from 'react';
import './ColorBox.scss'

ColorBox.propTypes = {

};

function getRandomColor() {
    const colors = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5)   //Math.ramdom() => 1 so tu 0->1 *5 -> tu 1->5
    return colors[randomIndex]
}

function ColorBox() {
    //Initial state chỉ dùng cho lần đầu, những lần sau nó bị bỏ rơi. 
    //Solution: => use callback function for useState , initial state callback function chi chay mot lang
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink'
        return initColor
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor)
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}    //cach viet inline style trong reactjs : nhan vap 1 obj { camelCase: value }
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;