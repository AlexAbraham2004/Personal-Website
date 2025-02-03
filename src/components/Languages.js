import javascript from "../assets/img/langs/icons8-javascript.svg";
import python from "../assets/img/langs/icons8-python.svg";
import cpp from "../assets/img/langs/c.svg";
import java from "../assets/img/langs/java-4.svg";
import sql from "../assets/img/langs/icons8-oracle-pl-sql.svg";
import arduino from "../assets/img/langs/icons8-arduino.svg";
import csharp from "../assets/img/langs/CSharp.svg";
import html from "../assets/img/langs/HTML5.svg";
import css from "../assets/img/langs/CSS3.svg";
import vhdl from "../assets/img/langs/vhdl.svg";

import assembly from "../assets/img/langs/asm-seeklogo.svg";


import React from 'react';


export const Languages = () => {

    const langs = [
        {
            name: "Javascript",
            imgSrc: javascript,
            color: "#F7DF1E" // Yellow
        },
        {
            name: "Python",
            imgSrc: python,
            color: "#3776AB" // Blue
        },
        {
            name: "C++/C",
            imgSrc: cpp,
            color: "#00599C" // Blue
        },
        {
            name: "Java",
            imgSrc: java,
            color: "#007396" // Blue
        },
        {
            name: "SQL",
            imgSrc: sql,
            color: "#F29111" // Orange (depends on the SQL variant)
        },
        {
            name: "Arduino",
            imgSrc: arduino,
            color: "#00979D" // Teal
        },
        {
            name: "C#",
            imgSrc: csharp,
            color: "#9B4F96" // Purple
        },
        {
            name: "HTML",
            imgSrc: html,
            color: "#E34F26" // Orange
        },
        {
            name: "CSS",
            imgSrc: css,
            color: "#1572B6" // Blue
        },
        {
            name: "Assembly",
            imgSrc: assembly,
            color: "#6E4C13" // Brownish (varies, but usually metallic)
        },
        {
            name: "VHDL",
            imgSrc: vhdl,
            color: "#000" 
        }
    ];
    
    
  return (
    <>
        <div className="language-block">
            {langs.map((item, index) => (
            <div className="icon">
                <img 
                    style={{border:`3px ${item.color} solid`}}
                    src={item.imgSrc} 
                    alt={item.name} 
                />
            </div>
            ))}
        </div>


        {/* <div className="language-block">
            <div className="icon">
                <img src="https://www.flaticon.com/free-icons/javascript" />
            </div>
            <div className="icon">
                <img src={profileImg} alt="testImage" />
            </div>
            <div className="icon">
                <img src={profileImg} alt="testImage" />
            </div>
        </div> */}
    </>
  )
}
