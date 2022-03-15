import * as React from "react"
import { useState, useEffect } from "react"
import Name from "../components/Name"
import Social from "../components/Social"
import PageCounter from "../components/PageCounter"


// markup
const Landing = () => {
    var [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => { setScroll(true) }) 
    }, []);
    

    return (
        <section data-pagenum={0}>
            <div className="landing w-full flex z-50 isolate relative">
                <div className={scroll ? "fixed name-scroll name-container" : "fixed name-container"}>
                    <Name scroll={scroll} />            
                </div> 
                <div className={scroll ? "fixed social-container social-fadeIn" : "fixed social-container"}>
                    <Social />
                </div> 
                <div className={scroll ? "fixed pageCounter-container pageCounter-fadeIn" : "fixed pageCounter-container"}>
                    <PageCounter />
                </div> 
                <div className={scroll ? "scroll-reminder" : "scroll-reminder active animate-pulse"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                    </svg>          
                </div>
            </div>
        </section>
    )
}

export default Landing
