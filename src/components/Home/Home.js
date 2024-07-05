import React from "react";
import { Link } from "react-router-dom";
function Home() {

    return <>
    <h1>Avatar The Last Air Bender Quiz</h1><br/><br/>
    <Link to="/quiz"><button>Start</button></Link>
    </>
}


export default Home