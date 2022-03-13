import React from "react";
import placeHolderImg from "../assets/img/placeHolder.jpeg"
import "../assets/styles/header.scss"

export default function Header(){

    return(
        <div id="HD-main">
            <img id="HD-logo" src={placeHolderImg} alt="radio beguin logo"/>
            <nav>
                <button>À suivre</button>
                <button>Béguincasts</button>
                <button>La team</button>
                <button>Crush</button>
            </nav>
            <div id="HD-social-media">
                <a className="HD-social-icon"><img  src={placeHolderImg} alt="radio beguin logo"/></a>
                <a className="HD-social-icon"><img  src={placeHolderImg} alt="radio beguin logo"/></a>
                <a className="HD-social-icon"><img  src={placeHolderImg} alt="radio beguin logo"/></a>
                <a className="HD-social-icon"><img  src={placeHolderImg} alt="radio beguin logo"/></a>
            </div>
        </div>
    )

}