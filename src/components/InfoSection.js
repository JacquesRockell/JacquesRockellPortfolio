import * as React from "react"
import { useEffect } from "react"
import { ScrollHeader } from "../Util/ScrollHeader"

// markup
const InfoSection = (props) => {
    useEffect(() => {
        ScrollHeader(props.Offset, props.id)
    }, []);
    
    
    return (
        <div id="info-section-id" className="h-screen flex flex-col justify-center items-center">
            <div id={`info-header${props.id}-id`} className="paralax-header">
                <h1>{props.Header}</h1>
            </div>
            <div className="inline text-center lg:w-6/12 md:w-8/12 sm:w-10/12 w-10/12">
                {props.Content}
            </div>        
        </div>    
    )
}

export default InfoSection