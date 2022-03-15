import * as React from "react"
import { useState, useEffect } from "react"

// markup
const PageCounter = () => {
    const [pageNum, setPageNum] = useState(0)

    useEffect(() => {
        let sections = document.querySelectorAll("section")
      
        let options = {
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        }
          
        let observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {  
                if(entry.isIntersecting == true) {
                    setPageNum(entry.target.dataset.pagenum)
                }  
            })
        }, options);

        sections.forEach(section => {
            observer.observe(section)
        })       
    },[])

    return (
        <div>
            <h4>.0</h4>
            <div id="num-list" className={`page-${pageNum}`}>
                <h4>0</h4>
                <h4>1</h4>
                <h4>2</h4>
                <h4>3</h4>
                <h4>4</h4>
                <h4>5</h4>
                <h4>6</h4>
            </div>            
        </div>
    )
}

export default PageCounter