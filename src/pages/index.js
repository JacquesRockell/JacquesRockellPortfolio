import * as React from "react"
import { useEffect } from "react"
import {Helmet} from "react-helmet";
import "../css/main.css"
import Icon from "../images/icon.png"
import Landing from "../Layout/Landing"
import About from "../Layout/About"
import Education from "../Layout/Education"
import Projects from "../Layout/Projects"
import Contact from "../Layout/Contact"


// markup
const IndexPage = () => {

    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0,0);
        };
    }, [])
    

    return (
        <main>
            <Helmet>
                <link rel="icon" type="image/png" href={Icon} sizes="16x16" />
                <meta name="description" content="Web developer resume"/>
                <meta name="keywords" content="Resume, CV, Jacques, Rockell, Software engineer, web developer, React, Css, Designer"/>
                <meta name="author" content="Jacques Rockell"/>
            </Helmet>
            <title>Jacques Rockell</title> 
            <div className="">                  
                <Landing />
                <About />
                <Education />
                <Projects />
                <Contact />
            </div>        
        </main>
    )
}

export default IndexPage
