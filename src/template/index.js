import '../index.html';
import 'semantic-ui-css/semantic.min.css'
import sidebar from './sidebar.html';
import header from './header.html'
import footer from './footer.html';
import content from './content.html';


class HtmlTempleteRenderer{
    constructor(){
        this.header = header;
        this.sidebar = sidebar;
        this.footer = footer;
        this.content = content;
    }

    loadTemplate() {
        console.log('**************** Renderer Template Application ****************')
        document.getElementById('header').innerHTML = this.header;
        document.getElementById('sidebar').innerHTML= this.sidebar;
        document.getElementById('content').innerHTML = this.content;
        document.getElementById('footer').innerHTML = this.footer;
    }
}

export default new  HtmlTempleteRenderer();