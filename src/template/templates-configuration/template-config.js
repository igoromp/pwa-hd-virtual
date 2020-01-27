export default {
    'slider_active':(el)=>{
        el.setAttribute('class', 'slider_desactive')
    },
    'slider_desactive': (el)=>{
        el.setAttribute('class', 'slider_active')
    }
}