
export default {
    
    byId :(id)=>document.getElementById(id),

    byClass: (clazz)=>document.getElementsByClassName(clazz),
    
    querySelector:(el)=>document.querySelector(el),
    
    querySelectorAll:(el)=>document.querySelectorAll(el),
}