/**
 * Created by tzr4032369 on 2016/4/27.
 */

var EventUtil = {
    addHandler: function(element, type, handler){
        //���¼�
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if(element.attachEvent){
            element.attachEvent('on'+type,handler);
        } else {
            element['on'+type] = handler;
        }
    },
    removeHandler:function(element,type,handler){
        //����󶨵��¼�
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent('on'+type,handler);
        }else {
            element['on'+type] = null;
        }
    }
};




