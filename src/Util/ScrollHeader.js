export const ScrollHeader = (Offset, id) => {
    window.addEventListener('scroll', () => { 
        let winHeight = document.getElementById("info-section-id").offsetHeight  
        let header = document.getElementById(`info-header${id}-id`)
        let scrollPos = window.scrollY       
        let pos = (scrollPos / winHeight - Offset) * 20
        header.style.transform = `translateX(${pos}%)`;          
    }) 
}
