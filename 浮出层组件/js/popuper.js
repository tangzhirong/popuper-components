/**
 * Created by tzr4032369 on 2016/4/27.
 */

var popuper = function(){
    //��ȡ����
    var btn = document.getElementById('show_popuper');
    var popuper = document.getElementsByClassName('popuper')[0];
    var wrap = document.getElementsByClassName('popuper_wrap')[0];

    //�����洢�������ڶ����λ��
    dx=dy=0;
    wrap.onmousedown = function(e){
        var e = e || window.event,
            x = e.clientX,
            y = e.clientY;

        //parseInt��"5px"����ַ�ת��Ϊ��ֵ5
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
            //����ɿ�ʱ����mousemove�Ƚ������
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    //�����ť����������
    EventUtil.addHandler(btn,"click", function (event) {
        popuper.style.display = 'block';
        event.stopPropagation();
    })
    //����������⣬�رո�����
    EventUtil.addHandler(document,"click", function (event) {
        if(event.target.className == 'popuper' && event.target.parentNode.className != 'popuper_wrap'){
            popuper.style.display = 'none';
        }
    })

    //��ȡobj����ǰ��Ӧ�õ���ʽ
    function getStyle(obj,style){
        if(window.getComputedStyle){
            //��׼�����
            return getComputedStyle(obj,null)[style];
        } else {
            //���IE8��IE8���°汾�������
            return obj.currentStyle[style];
        }
    };
};


window.onload = popuper;

