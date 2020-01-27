import '../index.html';
import 'semantic-ui-css/semantic.min.css'
import sidebar from './sidebar.html';
import header from './header.html'
import footer from './footer.html';
import content from './content.html';
import htmlUtil from '../utils/html-elements-util'
import templateConfig from './templates-configuration/template-config';


class HtmlTempleteRenderer{
    constructor(){
        this.header = header;
        this.sidebar = sidebar;
        this.footer = footer;
        this.content = content;
    }

    loadTemplate() {
        console.log('**************** Renderer Template Application ****************')
        const {byId} = htmlUtil;
        byId('header').innerHTML = this.header;
        byId('sidebar').innerHTML= this.sidebar;
        byId('content').innerHTML = this.content;
        byId('footer').innerHTML = this.footer;

        const btnDashboard = byId("dashboard-toggle");
        btnDashboard.addEventListener('click',(e)=>{
            const sidebar = byId('sidebar');
            const content = byId('content');
            
            templateConfig[sidebar.className](sidebar);
            templateConfig[content.className](content);
            console.log("Toggle", sidebar.className);
        })
    }
}

export default new  HtmlTempleteRenderer();