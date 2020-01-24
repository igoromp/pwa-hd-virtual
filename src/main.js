import './style.scss';
import HtmlTempleteRenderer from './template/'

class Init{
    constructor(){
        const template =HtmlTempleteRenderer;
        template.loadTemplate();
    }
}

new Init();