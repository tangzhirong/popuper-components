/**
 * Created by tzr4032369 on 2016/4/27.
 */

var popuper = function(){
    //获取对象
    var btn = document.getElementById('show_popuper');
    var popuper = document.getElementsByClassName('popuper')[0];
    var wrap = document.getElementsByClassName('popuper_wrap')[0];

    //用来存储鼠标相对于对象的位置
    dx=dy=0;
    wrap.onmousedown = function(e){
        var e = e || window.event,
            x = e.clientX,
            y = e.clientY;

        //parseInt把"5px"类的字符转化为数值5
        dx = x - parseInt(getStyle(this,'left')),
            dy = y - parseInt(getStyle(this,'top'));

        document.onmousemove = function(e){
            var e = e || window.event,
                x = e.clientX,
                y = e.clientY;
            wrap.style.left = x - dx + 'px';
            wrap.style.top = y - dy + 'px';
        };
        document.onmouseup = function(){
            //鼠标松开时，把mousemove等解除引用
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    //点击按钮弹出浮出层
    EventUtil.addHandler(btn,"click", function (event) {
        popuper.style.display = 'block';
        event.stopPropagation();
    })
    //点击浮出层外，关闭浮出层
    EventUtil.addHandler(document,"click", function (event) {
        if(event.target.className == 'popuper' && event.target.parentNode.className != 'popuper_wrap'){
            popuper.style.display = 'none';
        }
    })

    //获取obj对象当前所应用的样式
    function getStyle(obj,style){
        if(window.getComputedStyle){
            //标准浏览器
            return getComputedStyle(obj,null)[style];
        } else {
            //针对IE8及IE8以下版本的浏览器
            return obj.currentStyle[style];
        }
    };
};


window.onload = popuper;

