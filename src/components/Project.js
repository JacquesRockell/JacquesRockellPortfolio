import * as React from "react"

// markup
const Project = (props) => {
    return (
        <section data-pagenum={props.PageNum} className="project">
            <div className="sticky-box">
                <div className="card">
                    <h2>{props.Title}</h2>
                    <p>{props.Description}</p>
                    <div className="tags">
                        { 
                            props.Tags.map((tag, i) => (
                                <div className="tag" key={i}><p>{tag}</p></div>
                            ))
                        }
                    </div>
                </div>            
            </div>
            <div className="images-container">
                { 
                    props.Images.map((image, i) => (
                        <img className="project-img" key={i} src={image}/>
                    ))
                }
            </div>               
        </section> 
    )
}

export default Project

