import * as React from "react"
import InfoSection from "../components/InfoSection"

// markup
const About = () => {  
    return (
        <section data-pagenum={1}>
            <InfoSection 
                Header={"ABOUT ME"}
                id={"1"}
                Content={<p>Hi, I'm Jacques, a front-end specialized full-stack developer. I am passionate about designing and developing interactive modern websites. My skills range from JS, React, SASS, C#, Abobe XD and much more. Currently, I'm searching for opportunities to learn and grow within the
                development field.</p>}
                Offset={1.2}
            />  
        </section> 
    )
}

export default About