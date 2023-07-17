import React  from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";


function Head(){  

    return(
        <div id="head--container">
            <span className="head--manu--container">
                <Link to="/"><img id='logo' src="../logo.png" alt='logo' ></img></Link>
                <span id='title--name'>coz shopping</span>
            </span>
            <span className="head--manu--container">
                <Dropdown></Dropdown>
            </span>
        </div>

    );
}

export default Head;