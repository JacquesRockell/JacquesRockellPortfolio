import * as React from "react"
import { useEffect } from "react"
import Project from "../components/Project"

import Synweb1 from "../images/synweb1.png"
import Synweb2 from "../images/synweb2.png"
import Synweb3 from "../images/synweb3.png"

import Minigame1 from "../images/minigame1.png"
import Minigame2 from "../images/minigame2.png"
import Minigame3 from "../images/minigame3.png"

import Credapp1 from "../images/credapp1.png"
import Credapp2 from "../images/credapp2.png"
import Credapp3 from "../images/credapp3.png"

// markup
const Projects = () => {

    const getCenterOffset = () => {       
        let els = document.getElementsByClassName("project-img")     
        Array.prototype.forEach.call(els, function(el) {
            //get data
            let r = el.getBoundingClientRect()
            let winHeight = document.getElementById("info-section-id").offsetHeight 
            let centerOffeset = ((r.top - winHeight / 2) + (el.offsetHeight / 2))
            //process data for effect
            let scale = 0       
            centerOffeset > 0 ? scale -= centerOffeset : scale = centerOffeset
            scale = scale / 8000
            if(scale > -.2){
                el.style.transform = `scale(${ 1 + scale})`;
            }
            
        });              
    }
    
    useEffect(() => {
        window.addEventListener('scroll', () => {    
            getCenterOffset()
        }) 
    }, [])
    

    return (
        <div className="projects-container">
            <Project 
                PageNum={3}
                Title={"synergy website"}
                Description={"An Interactive animation-filled company website was developed during an internship with Synergy Technologies to meet the client's business needs and personal vision. Primarily front-end but included a mailing service."}
                Tags={["REACT", "JAVASCRIPT", "JSX", "CSS"]}
                Images={[Synweb1, Synweb2, Synweb3]}
            />
            <Project 
                PageNum={4}
                Title={"peer-peer minigame"}
                Description={"Online Noughts and Crosses UWP App developed with an Azure SQL database and API calls to a text legibility standard to ensure optimal accessibility."}
                Tags={["UWP", "C#", "XAML", "AZURE", "SQL"]}
                Images={[Minigame1, Minigame2, Minigame3]}
            />
            <Project 
                PageNum={5}
                Title={"credit transfer"}
                Description={"This credit transfer app was developed primarily as a backend project to improve my proficiency with some of Firebase's services like Firestore and Authentication. It also served as for testing ground for Tailwind CSS/UI."}
                Tags={["REACT", "TAILWIND", "FIREBASE"]}
                Images={[Credapp1, Credapp2, Credapp3]}
            />
        </div>
    )  
}

export default Projects