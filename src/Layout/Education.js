import * as React from "react"
import InfoSection from "../components/InfoSection"


// markup
const Education = () => {

    const EducationChart = () => {
        return (
            <div className="ed-chart-container flex flex-row justify-items-stretch gap-x-8">
                <div className="timeline-container flex flex-col justify-between">
                    <p>2019</p>
                    <p>2022</p>
                </div>
                <span className="bar"></span>
                <p className="text-left self-center inline-block">Bachelor of Applied Information Technology - Software development</p>
            </div>
        )
    }

    return (
        <section data-pagenum={2}>
            <InfoSection 
                Header={"EDUCATION"}
                id={"2"}
                Content={EducationChart()}
                Offset={2.2}
            />
        </section>      
    )  
}

export default Education