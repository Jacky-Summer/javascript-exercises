//=>公共方法库:项目中常用的一些方法
let utils = (function(){
    //设置元素css样式
    let setCss = function(element,attr,value){
        if(attr === 'opacity'){
            element.style.opacity = value;
            element.style.filter = "alpha(opacity=" + value*100 + ")";
        }
        //=>IS-NaN检测的结果是FALSE：说明VALUE是纯数字没单位
        if(!isNaN(value)){
            var reg = /^(width|height|fontSize|((margin|padding)?(top|left|right|bottom)?))$/i;
            reg.test(attr) ? value += 'px' : null;
        }
        element['style'][attr] = value;
    }

    //获取元素css样式
    let getCss = function(element,attr){
        if(window.getComputedStyle === undefined){
            return;
        }
        var val = window.getComputedStyle(element,null)[attr];
        var reg = /^-?\d+(\.\d+)?(px|rem|em|pt|vw|vh)?$/i;
        reg.test(val) ? val = parseFloat(val) : null;
        return val;
    }

    //批量设置css元素样式
    let setGroupCss = function(element,options={}){
        for(var attr in options){
            if(!options.hasOwnProperty(attr)) break;
            setCss(element,attr,options[attr]);
        }
    }
    

    let css = function (...arg) {
        let len = arg.length,
            fn = getCss;
        len >= 3 ? fn = setCss : null;
        len === 2 && (arg[1] instanceof Object) ? fn = setGroupCss : null;
        return fn(...arg);
    };

    return {
        css,//=>在ES6中直接这样写相当于 css:css
    }
})();